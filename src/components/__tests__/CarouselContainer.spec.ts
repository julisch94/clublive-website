import { render, screen, waitFor } from '@testing-library/vue'
import { describe, expect, test, vi } from 'vitest'

import { mount } from '@vue/test-utils'

vi.mock('@/utils', () => {
  return {
    getImageURL: image => {
      return `file:///images/my-gallery/${image}.jpg`
    },
  }
})

import CarouselContainer from '../CarouselContainer.vue'

describe('CarouselContainer', () => {
  test('loads slideshow correctly', async () => {
    render(CarouselContainer)

    expect(screen.getByLabelText('Slideshow')).to.exist

    // the slideshow navigation appears after some delay
    await waitFor(() => {
      expect(screen.getByLabelText('Slideshow navigation')).to.exist
    })
  })

  test('loads all images from image manager', async () => {
    const wrapper = mount(CarouselContainer)

    expect(wrapper.vm['images']).toEqual([
      'file:///images/my-gallery/crowd.jpg',
      'file:///images/my-gallery/felix.jpg',
      'file:///images/my-gallery/blaeser.jpg',
      'file:///images/my-gallery/tiffany.jpg',
      'file:///images/my-gallery/tobi.jpg',
    ])
  })
})
