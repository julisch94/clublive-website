import { TheContactFormData } from '@/components/TheContactForm.vue'

export const sendContactForm = async (values: TheContactFormData): Promise<boolean> => {
  const body = {
    'form-name': 'clublive-contact',
    ...values,
  }

  console.log('sending form', body)

  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(body as never).toString(),
    })

    if (response.ok) {
      return true
    }
    return false
  } catch (error) {
    return false
  }
}
