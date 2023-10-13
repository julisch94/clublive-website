import { describe, expect, it, vi } from 'vitest'
import { sendContactForm } from '../api'

describe('api', () => {
  it('should send the contact form correctly', async () => {
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)

    await sendContactForm({
      name: 'name',
      email: 'email',
      message: 'message',
      reference: 'reference',
      referenceOther: 'other',
    })

    expect(fetchMock).toHaveBeenCalledWith('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: new URLSearchParams({
        'form-name': 'clublive-contact',
        name: 'name',
        email: 'email',
        message: 'message',
        reference: 'reference',
        referenceOther: 'other',
      }).toString(),
    })
  })
})
