import { clamp, padStart } from 'lodash'

const addOpacity = (color: string, opacity: number): string => {
  const normalizedOpacity = clamp(opacity, 0, 1)

  const alpha = Math.round(255 * normalizedOpacity)
    .toString(16)
    .toUpperCase()

  const normalizedAlpha = padStart(alpha, 2, '0')

  return `${color}${normalizedAlpha}`
}

export default addOpacity
