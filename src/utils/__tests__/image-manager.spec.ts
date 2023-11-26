import { describe, expect, test, vi } from 'vitest'

let isMobile = false

vi.mock('@/utils/is-mobile', () => {
  return {
    useIsMobile: () => {
      return { isMobile }
    },
  }
})

import { getImageURL } from '../image-manager'

describe('image manager', () => {
  test('image manager returns URLs for small images when is mobile', () => {
    isMobile = true

    const url = getImageURL('andre')

    expect(url).toEqual('file:///images/gallery/sm/andre.webp')
  })

  test('image manager returns URLs for big big images when not mobile', () => {
    isMobile = false

    const url = getImageURL('andre')

    expect(url).toEqual('file:///images/gallery/andre.webp')
  })

  test('returns undefined when image key is not found', () => {
    const url = getImageURL('not-found')

    expect(url).toEqual(undefined)
  })
})
