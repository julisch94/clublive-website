import { useIsMobile } from './is-mobile'

export const getImageURL = (key: string) => {
  const { isMobile } = useIsMobile()

  const path = isMobile ? imageMap[key]?.sm : imageMap[key]?.default

  return path ? new URL(path, import.meta.url).href : undefined
}

const imageMap = {
  'andre-side': {
    default: '/images/gallery/andre-side.jpg',
    sm: '/images/gallery/sm/andre-side.jpg',
  },
  andre: {
    default: '/images/gallery/andre.jpg',
    sm: '/images/gallery/sm/andre.jpg',
  },
  blaeser: {
    default: '/images/gallery/blaeser.jpg',
    sm: '/images/gallery/sm/blaeser.jpg',
  },
  'crowd-red': {
    default: '/images/gallery/crowd-red.jpg',
    sm: '/images/gallery/sm/crowd-red.jpg',
  },
  crowd: {
    default: '/images/gallery/crowd.jpg',
    sm: '/images/gallery/sm/crowd.jpg',
  },
  felix: {
    default: '/images/gallery/felix.jpg',
    sm: '/images/gallery/sm/felix.jpg',
  },
  green: {
    default: '/images/gallery/green.jpg',
    sm: '/images/gallery/sm/green.jpg',
  },
  jules: {
    default: '/images/gallery/jules.jpg',
    sm: '/images/gallery/sm/jules.jpg',
  },
  lasse: {
    default: '/images/gallery/lasse.jpg',
    sm: '/images/gallery/sm/lasse.jpg',
  },
  'tiffany-erasmus': {
    default: '/images/gallery/tiffany-erasmus.jpg',
    sm: '/images/gallery/sm/tiffany-erasmus.jpg',
  },
  tiffany: {
    default: '/images/gallery/tiffany.jpg',
    sm: '/images/gallery/sm/tiffany.jpg',
  },
  'tobi-erasmus': {
    default: '/images/gallery/tobi-erasmus.jpg',
    sm: '/images/gallery/sm/tobi-erasmus.jpg',
  },
  tobi: {
    default: '/images/gallery/tobi.jpg',
    sm: '/images/gallery/sm/tobi.jpg',
  },
}
