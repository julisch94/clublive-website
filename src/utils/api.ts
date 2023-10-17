export const sendContactForm = async (values: {
  name: string
  email: string
  message: string
  reference: string
  referenceOther: string
}) => {
  const body = {
    'form-name': 'clublive-contact',
    ...values,
  }

  return fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(body).toString(),
  })
}
