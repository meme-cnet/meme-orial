'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { datarojo } from '../../data/datarojomovil'
import { datanegro } from '../../data/datanegromovil'
import { buildCombinedCarouselImages, type CarouselImageData } from '@/lib/buildCarouselImages'

const carouselShellClass = 'block sm:hidden overflow-hidden w-full h-[250px]'

export default function ImgCarruselIzqDer() {
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [images, setImages] = useState<CarouselImageData[]>([])

  const carouselSpeed = 0.05
  const maxHeight = 250

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    setImages(buildCombinedCarouselImages(datarojo, datanegro))
  }, [mounted])

  useEffect(() => {
    if (!mounted || images.length === 0 || !containerRef.current) return

    const containerWidth = containerRef.current.offsetWidth
    const totalWidth = images.reduce((sum, img) => sum + (img.width * (maxHeight / img.height)), 0)
    const animationDuration = (totalWidth / containerWidth) * images.length * carouselSpeed

    controls.start({
      x: [`-${(totalWidth / containerWidth) * 100}%`, `0%`],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: animationDuration,
          ease: 'linear',
        },
      },
    })
  }, [images, carouselSpeed, controls, mounted])

  if (!mounted || images.length === 0) {
    return <div className={carouselShellClass} />
  }

  return (
    <div ref={containerRef} className="block sm:hidden overflow-hidden w-full">
      <motion.div className="flex gap-[8px]" animate={controls}>
        {[...images, ...images].map((image, index) => {
          const imageWidth = image.width * (maxHeight / image.height)
          return (
            <div
              key={`${image.id}-${index}`}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ width: `${imageWidth}px`, height: `${maxHeight}px` }}
            >
              <Image
                src={image.src}
                alt={`Image ${image.id}`}
                width={imageWidth}
                height={maxHeight}
                className="object-contain"
                onError={() => console.error(`Error loading image: ${image.src}`)}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
              />
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}
