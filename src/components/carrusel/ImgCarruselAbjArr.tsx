'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { datarojoweb } from '../../data/datarojoweb'
import { datanegroweb } from '../../data/datanegroweb'
import { buildCombinedCarouselImages, type CarouselImageData } from '@/lib/buildCarouselImages'

const carouselShellClass = 'hidden sm:block h-screen w-full overflow-hidden pointer-events-none'

const ShimmerEffect: React.FC = () => (
  <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:400%_100%]"/>
)

const CarouselImage = React.memo(({ image, containerWidth, isLoaded, onLoad, onError }: {
  image: CarouselImageData
  containerWidth: number
  isLoaded: boolean
  onLoad: () => void
  onError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void
}) => {
  const aspectRatio = image.width / image.height
  const imageHeight = containerWidth / aspectRatio

  return (
    <div
      className="flex-shrink-0 flex items-center justify-center mb-2"
      style={{ width: `${containerWidth}px`, height: `${imageHeight}px` }}
    >
      <div className="relative w-full h-full">
        {!isLoaded && <ShimmerEffect />}
        <Image
          src={image.src}
          alt={`Image ${image.id}`}
          width={containerWidth}
          height={imageHeight}
          className={`object-cover w-full h-full ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          onError={onError}
          onLoad={onLoad}
          placeholder="empty"
        />
      </div>
    </div>
  )
})

CarouselImage.displayName = 'CarouselImage'

const ImgCarruselAbjArr: React.FC = () => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [containerWidth, setContainerWidth] = useState<number>(0)
  const [combinedImages, setCombinedImages] = useState<CarouselImageData[]>([])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    setCombinedImages(buildCombinedCarouselImages(datarojoweb, datanegroweb))
  }, [mounted])

  useEffect(() => {
    if (!mounted) return
    const updateContainerWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }

    updateContainerWidth()
    window.addEventListener('resize', updateContainerWidth)

    return () => window.removeEventListener('resize', updateContainerWidth)
  }, [mounted])

  const startAnimation = useCallback(() => {
    if (!mounted || combinedImages.length === 0 || !containerRef.current || containerWidth <= 0) return

    const totalHeight = combinedImages.reduce((sum, img) => sum + (img.height * (containerWidth / img.width)), 0)
    const gapHeight = (combinedImages.length - 1) * 0.5

    controls.start({
      y: [-(totalHeight + gapHeight * 16), 0],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: (totalHeight + gapHeight * 16) / 50,
          ease: 'linear',
        },
      },
    })
  }, [combinedImages, containerWidth, controls, mounted])

  useEffect(() => {
    startAnimation()
  }, [startAnimation])

  if (!mounted) {
    return <div className={carouselShellClass} />
  }

  return (
    <div ref={containerRef} className={carouselShellClass}>
      <motion.div
        className="flex flex-col space-y-2"
        animate={controls}
        style={{ willChange: 'transform' }}
      >
        {[...combinedImages, ...combinedImages].map((image, index) => (
          <CarouselImage
            key={`${image.id}-${index}`}
            image={image}
            containerWidth={containerWidth}
            isLoaded={loadedImages.has(image.src)}
            onLoad={() => {
              setLoadedImages(prev => new Set(prev).add(image.src))
            }}
            onError={(e) => {
              console.error(`Error loading image: ${image.src}`, e)
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default ImgCarruselAbjArr
