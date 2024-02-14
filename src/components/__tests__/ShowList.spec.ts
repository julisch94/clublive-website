import { expect, beforeEach, afterEach, it, vi } from 'vitest'
import ShowList from '../ShowList.vue'
import { render } from '@testing-library/vue'
import { ShowModel } from '@/model/show.model'

beforeEach(() => {
  vi.useFakeTimers()

  vi.setSystemTime(new Date('2023-08-01T23:00:00'))
})

afterEach(() => {
  vi.useRealTimers()
})

vi.mock('@/data/shows', () => {
  const shows: ShowModel[] = [
    {
      date: '2020/10/15',
      place: 'Old gig',
      type: 'public',
    },
    {
      date: '2023/08/01',
      place: 'Gig this evening',
      type: 'public',
    },
    {
      date: '2023/08/02',
      place: 'Gig tomorrow',
      type: 'public',
    },
    {
      date: '2999/12/03',
      place: 'The Irish Pub, Pforzheim',
      website: 'https://www.irishpubpf.de/',
      mapsLink: 'https://g.page/TheIrishPubPforzheim?share',
      type: 'public',
    },
    {
      date: '2999/07/01',
      place: 'Private Veranstaltung, Karlsruhe',
      type: 'private',
    },
  ]

  return { shows }
})

it('displays future shows', () => {
  const screen = render(ShowList)

  expect(screen.queryAllByTestId('show').length).toBe(4)
  expect(screen.getByText(/The Irish Pub, Pforzheim/)).toBeTruthy()
  expect(screen.getByText(/Private Veranstaltung, Karlsruhe/)).toBeTruthy()
  expect(screen.getByText(/Gig this evening/)).toBeTruthy()
  expect(screen.queryByText(/Old gig/i)).toBeFalsy()
})

it('displays only three future shows when excerpt is true', () => {
  const screen = render(ShowList, {
    props: {
      excerpt: true,
    },
  })

  expect(screen.queryAllByTestId('show')).toHaveLength(3)
  expect(screen.queryByText(/Gig this evening/)).toBeTruthy()
  expect(screen.queryByText(/Gig tomorrow/)).toBeTruthy()
  expect(screen.queryByText(/Private Veranstaltung, Karlsruhe/)).toBeTruthy()
})

it('displays ... in excerpt when there are more shows than visible', () => {
  const screen = render(ShowList, {
    props: {
      excerpt: true,
    },
  })

  expect(screen.queryByText('...')).toBeTruthy()
})
