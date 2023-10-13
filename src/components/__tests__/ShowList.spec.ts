import { test, expect, beforeEach, afterEach } from 'vitest'
import ShowList from '../ShowList.vue'
import { render } from '@testing-library/vue'
import { vi } from 'vitest'
import { ShowModel } from '@/model/show.model'

beforeEach(() => {
  vi.useFakeTimers()
})

afterEach(() => {
  vi.useRealTimers()
})

test('future shows are displayed', () => {
  vi.setSystemTime(new Date('2023-08-01T23:00:00'))

  vi.mock('@/data/shows', () => {
    const shows: ShowModel[] = [
      {
        date: '2020/10/15',
        place: 'Old gig',
      },
      {
        date: '2023/08/01',
        place: 'Gig this evening',
      },
      {
        date: '2999/12/03',
        place: 'The Irish Pub, Pforzheim',
        website: 'https://www.irishpubpf.de/',
        mapsLink: 'https://g.page/TheIrishPubPforzheim?share',
      },
      {
        date: '2999/07/01',
        place: 'Private Veranstaltung, Karlsruhe',
      },
    ]

    return { shows }
  })

  const screen = render(ShowList)

  expect(screen.queryAllByTestId('show').length).toBe(3)
  expect(screen.getByText(/The Irish Pub, Pforzheim/)).to.exist
  expect(screen.getByText(/Private Veranstaltung, Karlsruhe/)).to.exist
  expect(screen.getByText(/Gig this evening/)).to.exist
  expect(screen.queryByText(/Old gig/i)).not.to.exist

  screen.unmount()
})
