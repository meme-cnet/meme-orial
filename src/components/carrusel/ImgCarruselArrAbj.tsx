'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { datarojoweb } from '../../data/datarojoweb'
import { datanegroweb } from '../../data/datanegroweb'

interface ImageData {
  id: number
  src: string
  link: string
  width: number
  height: number
}

const shuffleArray = (array: ImageData[]): ImageData[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const ShimmerEffect: React.FC = () => (
  <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:400%_100%]"/>
)

const CarouselImage: React.FC<{
  image: ImageData
  containerWidth: number
  isLoaded: boolean
  onLoad: () => void
  onError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void
}> = React.memo(({ image, containerWidth, isLoaded, onLoad, onError }) => {
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
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>
    </div>
  )
})

CarouselImage.displayName = 'CarouselImage'

const ImgCarruselArrAbj: React.FC = () => {
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState<number>(0)
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())
  const [combinedImages, setCombinedImages] = useState<ImageData[]>([])

  useEffect(() => {
    const shuffledRojo = shuffleArray(datarojoweb)
    const shuffledNegro = shuffleArray(datanegroweb)
    
    const combined: ImageData[] = []
    let rojoIndex = 0
    let negroIndex = 0

    while (combined.length < shuffledRojo.length * 4) {
      combined.push(shuffledRojo[rojoIndex])
      rojoIndex = (rojoIndex + 1) % shuffledRojo.length

      for (let i = 0; i < 3; i++) {
        combined.push(shuffledNegro[negroIndex])
        negroIndex = (negroIndex + 1) % shuffledNegro.length
      }
    }

    setCombinedImages(combined)
  }, [])

  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }

    updateContainerWidth()
    window.addEventListener('resize', updateContainerWidth)

    return () => window.removeEventListener('resize', updateContainerWidth)
  }, [])

  const startAnimation = useCallback(() => {
    if (combinedImages.length > 0 && containerRef.current && containerWidth > 0) {
      const totalHeight = combinedImages.reduce((sum, img) => sum + (img.height * (containerWidth / img.width)), 0)
      const gapHeight = (combinedImages.length - 1) * 8

      controls.start({
        y: [0, -(totalHeight + gapHeight)],
        transition: {
          y: {
            repeat: Infinity,
            repeatType: "loop",
            duration: (totalHeight + gapHeight) / 50,
            ease: "linear",
          },
        },
      })
    }
  }, [combinedImages, containerWidth, controls])

  useEffect(() => {
    startAnimation()
  }, [startAnimation])

  return (
    <div ref={containerRef} className="hidden sm:block h-screen w-full overflow-hidden pointer-events-none">
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

export default ImgCarruselArrAbj