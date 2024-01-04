import { test, expect } from '@playwright/test'
import { waitForHead } from './wait-for-head'

test('opens up shows', async ({ page }) => {
  await page.goto('/shows')

  await expect(page.getByRole('heading', { name: 'Shows', exact: true })).toBeVisible()
})

test('shows page is loaded correctly', async ({ page }) => {
  await page.goto('/shows')

  await expect(page.getByRole('heading', { name: 'Shows', exact: true })).toBeVisible()
  await expect(
    page.getByText('Schau hier regelmäßig rein, um zu sehen, wann wir wieder in deine Nähe kommen.')
  ).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Referenzen' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Kontaktformular / Buchung' })).toBeVisible()
  await expect(page.getByText('Stay tuned und folge uns bei Instagram')).toBeVisible()
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

  await waitForHead()

  const ogDescription = await page.locator('meta[property="og:description"]').getAttribute('content')
  expect(ogDescription).toMatch(/^Schaue hier regelmäßig vorbei /)

  const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content')
  expect(ogTitle).toBe('Club Live | Shows')

  const description = await page.locator('meta[name="description"]').getAttribute('content')
  expect(description).toMatch(/^Schaue hier regelmäßig vorbei /)
})
