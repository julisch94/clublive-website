import { useIsMobile } from './is-mobile'

export const getImageURL = (key: string) => {
  const { isMobile } = useIsMobile()

  const path = isMobile ? imageMap[key]?.sm : imageMap[key]?.default

  return path ? new URL(path, import.meta.url).href : undefined
}

const imageMap = {
  'andre-side': {
    default: '/images/gallery/andre-side.webp',
    sm: '/images/gallery/sm/andre-side.webp',
  },
  andre: {
    default: '/images/gallery/andre.webp',
    sm: '/images/gallery/sm/andre.webp',
  },
  blaeser: {
    default: '/images/gallery/blaeser.webp',
    sm: '/images/gallery/sm/blaeser.webp',
  },
  'crowd-red': {
    default: '/images/gallery/crowd-red.webp',
    sm: '/images/gallery/sm/crowd-red.webp',
  },
  crowd: {
    default: '/images/gallery/crowd.webp',
    sm: '/images/gallery/sm/crowd.webp',
  },
  felix: {
    default: '/images/gallery/felix.webp',
    sm: '/images/gallery/sm/felix.webp',
  },
  green: {
    default: '/images/gallery/green.webp',
    sm: '/images/gallery/sm/green.webp',
  },
  jules: {
    default: '/images/gallery/jules.webp',
    sm: '/images/gallery/sm/jules.webp',
  },
  lasse: {
    default: '/images/gallery/lasse.webp',
    sm: '/images/gallery/sm/lasse.webp',
  },
  'tiffany-erasmus': {
    default: '/images/gallery/tiffany-erasmus.webp',
    sm: '/images/gallery/sm/tiffany-erasmus.webp',
  },
  tiffany: {
    default: '/images/gallery/tiffany.webp',
    sm: '/images/gallery/sm/tiffany.webp',
  },
  'tobi-erasmus': {
    default: '/images/gallery/tobi-erasmus.webp',
    sm: '/images/gallery/sm/tobi-erasmus.webp',
  },
  tobi: {
    default: '/images/gallery/tobi.webp',
    sm: '/images/gallery/sm/tobi.webp',
  },
}
