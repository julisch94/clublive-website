import { test, expect } from '@playwright/test'

test('open up menu and go to shows', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('link', { name: 'Menu' }).click()
  await page.getByRole('link', { name: 'Shows', exact: true }).click()

  await expect(page.getByRole('heading', { name: 'Shows' })).toBeVisible()
})

test('shows page is loaded correctly', async ({ page }) => {
  await page.goto('/shows')

  await expect(page.getByRole('heading', { name: 'Shows' })).toBeVisible()
  await expect(
    page.getByText('Schaue hier regelmäßig vorbei um zu sehen, wann wir wieder in deine Nähe kommen.')
  ).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Referenzen' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Kontaktformular / Buchung' })).toBeVisible()
  await expect(page.getByText('Um keinen Auftritt von uns zu verpassen, folge uns bei Instagram')).toBeVisible()
})

test('references are loaded correctly', async ({ page }) => {
  await page.goto('/shows')

  await expect(page.getByRole('heading', { name: 'Referenzen' })).toBeVisible()

  // only checking a few
  await expect(page.locator('[data-test-id="references"]').getByText('Freudenstadt', { exact: true })).toBeVisible()
  await expect(page.locator('[data-test-id="references"]').getByText('Bad Wildbad', { exact: true })).toBeVisible()
  await expect(page.locator('[data-test-id="references"]').getByText('Karlsruhe', { exact: true })).toBeVisible()
  await expect(page.locator('[data-test-id="references"]').getByText('Pforzheim', { exact: true })).toBeVisible()
  await expect(page.locator('[data-test-id="references"]').getByText('Ettlingen', { exact: true })).toBeVisible()
  await expect(
    page.locator('[data-test-id="references"]').getByText('Vaihingen a.d. Enz', { exact: true })
  ).toBeVisible()
})

test('should contain the correct title', async ({ page }) => {
  await page.goto('/shows')

  await page.waitForFunction(() => document.title === 'Club Live | Shows')

  const title = await page.evaluate(() => document.title)
  expect(title).toBe('Club Live | Shows')
})

test('should contain the correct meta tags', async ({ page }) => {
  await page.goto('/shows')

  await page.waitForLoadState()

  const ogDescription = await page.$eval('meta[property="og:description"]', el => (el as HTMLMetaElement).content)
  expect(ogDescription).toMatch(/^Schaue hier regelmäßig vorbei /)

  const ogTitle = await page.$eval('meta[property="og:title"]', el => (el as HTMLMetaElement).content)
  expect(ogTitle).toBe('Club Live | Shows')

  const description = await page.$eval('meta[name="description"]', el => (el as HTMLMetaElement).content)
  expect(description).toMatch(/^Schaue hier regelmäßig vorbei /)
})
