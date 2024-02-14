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
      date: '2023/08/03',
      place: 'Gig day after tomorrow',
      type: 'public',
    },
    {
      date: '2023/08/04',
      place: 'Gig soon',
      type: 'public',
    },
    {
      date: '2999/12/03',
      place: 'The Irish Pub, Pforzheim',
      description: 'nice description',
      website: 'https://www.irishpubpf.de',
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

  expect(screen.queryAllByTestId('show').length).toBe(6)
  expect(screen.getByText(/The Irish Pub, Pforzheim/)).toBeTruthy()
  expect(screen.getByText(/Private Veranstaltung, Karlsruhe/)).toBeTruthy()
  expect(screen.getByText(/Gig this evening/)).toBeTruthy()
  expect(screen.getByText(/Gig tomorrow/)).toBeTruthy()
  expect(screen.getByText(/Gig day after tomorrow/)).toBeTruthy()
  expect(screen.getByText(/Gig soon/)).toBeTruthy()

  expect(screen.queryByText(/Old gig/i)).toBeFalsy()
})

it('displays description and website when not excerpt', () => {
  const screen = render(ShowList)

  expect(screen.getByText('nice description')).toBeTruthy()
  expect(screen.getByRole('link', { name: 'www.irishpubpf.de' })).toBeTruthy()
})

it('does not display description and website when excerpt', () => {
  const screen = render(ShowList, {
    props: {
      excerpt: true,
    },
  })

  expect(screen.queryByText('nice description')).toBeFalsy()
  expect(screen.queryByRole('link', { name: 'www.irishpubpf.de' })).toBeFalsy()
})

it('displays only 5 future shows when excerpt is true', () => {
  const screen = render(ShowList, {
    props: {
      excerpt: true,
    },
  })

  expect(screen.queryAllByTestId('show')).toHaveLength(5)

  expect(screen.getByText(/Gig this evening/)).toBeTruthy()
  expect(screen.getByText(/Gig tomorrow/)).toBeTruthy()
  expect(screen.getByText(/Gig day after tomorrow/)).toBeTruthy()
  expect(screen.getByText(/Gig soon/)).toBeTruthy()
  expect(screen.getByText(/Private Veranstaltung, Karlsruhe/)).toBeTruthy()

  expect(screen.queryByText(/The Irish Pub, Pforzheim/)).toBeFalsy()
})
