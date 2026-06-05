'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { datarojo } from '../../data/datarojomovil'
import { datanegro } from '../../data/datanegromovil'

type ImageData = {
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

export default function ImgCarruselDerIzq() {
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)
  const [images, setImages] = useState<ImageData[]>([])

  const carouselSpeed = 0.05
  const maxHeight = 250

  useEffect(() => {
    const shuffledRojo = shuffleArray(datarojo)
    const shuffledNegro = shuffleArray(datanegro)
    
    const combinedImages: ImageData[] = []
    let rojoIndex = 0
    let negroIndex = 0

    while (combinedImages.length < shuffledRojo.length * 4) {
      combinedImages.push(shuffledRojo[rojoIndex])
      rojoIndex = (rojoIndex + 1) % shuffledRojo.length

      for (let i = 0; i < 3; i++) {
        combinedImages.push(shuffledNegro[negroIndex])
        negroIndex = (negroIndex + 1) % shuffledNegro.length
      }
    }

    setImages(combinedImages)
  }, [])

  useEffect(() => {
    if (images.length > 0 && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      const totalWidth = images.reduce((sum, img) => sum + (img.width * (maxHeight / img.height)), 0)
      const animationDuration = (totalWidth / containerWidth) * images.length * carouselSpeed

      controls.start({
        x: [`0%`, `-${(totalWidth / containerWidth) * 100}%`],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: animationDuration,
            ease: "linear",
          },
        },
      })
    }
  }, [images, carouselSpeed, controls])

  if (images.length === 0) {
    return null;
  }

  return (
    <div ref={containerRef} className="block sm:hidden overflow-hidden w-full">
      <motion.div
        className="flex gap-[8px]"
        animate={controls}
      >
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