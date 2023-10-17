import { beforeAll, describe, expect, it, vi } from 'vitest'
import ContactForm from '../ContactForm.vue'
import { render } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import * as api from '@/utils/api'

beforeAll(() => {
  // this is required to make scrollIntoView work,
  // otherwise we'd have to wrap all of them with try/catch
  window.HTMLElement.prototype.scrollIntoView = () => {}
})

describe('ContactForm', () => {
  it('displays texts correctly', () => {
    const screen = render(ContactForm)

    screen.getByRole('heading', { name: 'Kontaktformular / Buchung' })

    screen.getByRole('textbox', { name: 'Name' })
    screen.getByRole('textbox', { name: 'E-Mail' })
    screen.getByRole('textbox', { name: 'Nachricht' })

    screen.getByRole('button', { name: 'Abschicken' })

    screen.unmount()
  })

  it('displays the reference dropdown correctly', () => {
    const screen = render(ContactForm)

    screen.getByRole('combobox', { name: /Woher kennst du uns\?/ })

    screen.getByRole('option', { name: 'Bitte wählen' })
    screen.getByRole('option', { name: 'Live-Auftritt' })
    screen.getByRole('option', { name: 'Empfehlung' })
    screen.getByRole('option', { name: 'Internet' })
    screen.getByRole('option', { name: 'Presse' })
    screen.getByRole('option', { name: 'Etwas anderes' })

    screen.unmount()
  })

  describe('when form is submitted', () => {
    it('sends the form data correctly', async () => {
      vi.spyOn(api, 'sendContactForm').mockResolvedValue({
        ok: true,
      } as Response)

      const screen = render(ContactForm)

      await fillOutContactForm(screen)

      expect(api.sendContactForm).toHaveBeenCalledWith({
        name: 'Test User',
        email: 'hello@test.org',
        message: 'Hello World',
        reference: 'internet',
        referenceOther: '',
      })

      screen.unmount()
    })

    it('displays a loading indicator', async () => {
      vi.spyOn(api, 'sendContactForm').mockImplementation(async () => {
        await new Promise(resolve => setTimeout(resolve, 100))
        return {} as Response
      })

      const screen = render(ContactForm)

      await fillOutContactForm(screen)

      await screen.findByText('Sendet...')

      screen.unmount()
    })

    it('displays a success message', async () => {
      vi.spyOn(api, 'sendContactForm').mockResolvedValue({
        ok: true,
      } as Response)

      const screen = render(ContactForm)

      await fillOutContactForm(screen)

      await screen.findByText('Vielen Dank! Deine Nachricht wurde übermittelt. Wir melden uns baldmöglichst zurück.')

      screen.unmount()
    })

    it('displays an error message', async () => {
      vi.spyOn(api, 'sendContactForm').mockResolvedValue({
        ok: false,
      } as Response)

      const screen = render(ContactForm)

      await fillOutContactForm(screen)

      screen.getByText(/Oh. Da ist etwas schief gegangen./)
      screen.getByRole('link', { name: 'contact@clublive.band' })

      screen.unmount()
    })
  })

  // helper function to fill out form correctly
  const fillOutContactForm = async (screen: any) => {
    const nameField = screen.getByRole('textbox', { name: 'Name' })
    await userEvent.type(nameField, 'Test User')

    const emailField = screen.getByRole('textbox', { name: 'E-Mail' })
    await userEvent.type(emailField, 'hello@test.org')

    const messageField = screen.getByRole('textbox', { name: 'Nachricht' })
    await userEvent.type(messageField, 'Hello World')

    const referenceField = screen.getByRole('combobox', { name: /Woher kennst du uns\?/ })
    await userEvent.selectOptions(referenceField, 'Internet')

    const submitButton = screen.getByRole('button', { name: 'Abschicken' })
    await userEvent.click(submitButton)
  }
})
