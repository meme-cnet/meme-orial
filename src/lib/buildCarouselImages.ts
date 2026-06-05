export type CarouselImageData = {
  id: number
  src: string
  link: string
  width: number
  height: number
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function buildCombinedCarouselImages(
  rojo: CarouselImageData[],
  negro: CarouselImageData[]
): CarouselImageData[] {
  const shuffledRojo = shuffleArray(rojo)
  const shuffledNegro = shuffleArray(negro)
  const combined: CarouselImageData[] = []
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

  return combined
}
