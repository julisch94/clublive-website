import { render } from '@testing-library/vue'
import { beforeAll, describe, expect, it } from 'vitest'
import TheContactResultVue from '../TheContactResult.vue'

describe('TheContactResult', () => {
  beforeAll(() => {
    // this is required to make scrollIntoView work,
    // otherwise we'd have to wrap all of them with try/catch
    window.HTMLElement.prototype.scrollIntoView = () => {}
  })

  it('shows success message when success is true', () => {
    const screen = render(TheContactResultVue, {
      props: {
        success: true,
        failure: false,
      },
    })

    expect(
      screen.getByText('Vielen Dank! Deine Nachricht wurde übermittelt. Wir melden uns baldmöglichst zurück.')
    ).toBeTruthy()
  })

  it('shows error message when failure is true', () => {
    const screen = render(TheContactResultVue, {
      props: {
        success: false,
        failure: true,
      },
    })

    expect(screen.getByText(/Oh. Da ist etwas schief gegangen./)).toBeTruthy()
    expect(screen.getByRole('link', { name: 'contact@clublive.band' })).toBeTruthy()
  })

  it('does not show anything when neither success nor failure is true', () => {
    const screen = render(TheContactResultVue, {
      props: {
        success: false,
        failure: false,
      },
    })

    expect(screen.queryByText(/Vielen Dank!/)).toBeFalsy()
    expect(screen.queryByText(/Da ist etwas schief gegangen/)).toBeFalsy()
  })
})
