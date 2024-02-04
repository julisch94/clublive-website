import { describe, expect, it, vi } from 'vitest'
import { sendContactForm } from '../api'

describe('api', () => {
  it('should send the contact form correctly', async () => {
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)

    await sendContactForm({
      amountOfGuests: '2000 - 3000',
      contactName: 'Ansprechperson',
      contactTypes: ['E-Mail', 'Whatsapp', 'Telefon'],
      dateEstimate: 'könnte auch die Woche danach werden',
      dateUnknown: true,
      email: 'test@example.com',
      eventDate: '2024-06-15',
      eventType: 'Andere',
      eventTypeDescription: 'Fette Party',
      locationAddress: 'Moltkestraße Karlsruhe',
      locationName: 'Hochschule Karlsruhe',
      message: 'in der Kürze liegt die Würze',
      plannedAirTime: '180 Minuten',
      reference: 'Etwas anderes',
      referenceOther: 'Eventplaner',
      telephone: '0721000000',
    })

    expect(fetchMock).toHaveBeenCalledWith('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'clublive-contact',
        amountOfGuests: '2000 - 3000',
        contactName: 'Ansprechperson',
        contactTypes: 'E-Mail,Whatsapp,Telefon',
        dateEstimate: 'könnte auch die Woche danach werden',
        dateUnknown: 'true',
        email: 'test@example.com',
        eventDate: '2024-06-15',
        eventType: 'Andere',
        eventTypeDescription: 'Fette Party',
        locationAddress: 'Moltkestraße Karlsruhe',
        locationName: 'Hochschule Karlsruhe',
        message: 'in der Kürze liegt die Würze',
        plannedAirTime: '180 Minuten',
        reference: 'Etwas anderes',
        referenceOther: 'Eventplaner',
        telephone: '0721000000',
      }).toString(),
    })
  })
})
