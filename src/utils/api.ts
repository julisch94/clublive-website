import { TheContactFormData } from '@/components/TheContactForm.vue'

export const sendContactForm = async (values: TheContactFormData): Promise<boolean> => {
  const body = {
    'form-name': 'clublive-contact',
    ...values,
  }

  console.log('sending form', body)

  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(body as never).toString(),
  })

  if (response.ok) {
    console.log('response is ok', await response.json())
    return true
  }

  console.log('response not ok')
  return false
}
