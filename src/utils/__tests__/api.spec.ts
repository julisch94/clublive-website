import { describe, expect, it } from 'vitest'
import { sendContactForm } from '../api'

describe('api', () => {
  it('should be true', async () => {
    

    const result = await sendContactForm({
        name: 'test',
        email: 'test',
        message: 'test',
        reference: 'test',
        referenceOther: 'test',
    })

    expect(true).toBe(true)
  })
})
