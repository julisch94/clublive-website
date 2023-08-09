import { render, screen, waitFor } from '@testing-library/vue'
import { describe, expect, test, vi } from 'vitest'

import { mount } from '@vue/test-utils'

let isMobile = false

vi.mock('@/utils', () => {
  return {
    useIsMobile: () => {
      return { isMobile }
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

  test('uses small images when on mobile', async () => {
    isMobile = true

    const wrapper = mount(CarouselContainer)

    expect(wrapper.vm['slides']).toEqual([
      { image: 'file:///images/banner/sm/crowd.jpg' },
      { image: 'file:///images/banner/sm/felix.jpg' },
      { image: 'file:///images/banner/sm/blaeser.jpg' },
      { image: 'file:///images/banner/sm/tiffany.jpg' },
      { image: 'file:///images/banner/sm/tobi.jpg' },
    ])
  })

  test('uses big images when not on mobile', async () => {
    isMobile = false

    const wrapper = mount(CarouselContainer)

    const expected = [
      { image: 'file:///images/banner/crowd.jpg' },
      { image: 'file:///images/banner/felix.jpg' },
      { image: 'file:///images/banner/blaeser.jpg' },
      { image: 'file:///images/banner/tiffany.jpg' },
      { image: 'file:///images/banner/tobi.jpg' },
    ]
    expect(wrapper.vm['slides']).toEqual(expected)
  })
})
