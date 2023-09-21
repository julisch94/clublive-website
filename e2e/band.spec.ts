import test, { expect } from '@playwright/test'

test('should contain the correct title', async ({ page }) => {
  await page.goto('/band')

  await page.waitForFunction(() => document.title === 'Club Live | Band')

  const title = await page.evaluate(() => document.title)
  expect(title).toBe('Club Live | Band')
})

test('should contain the correct meta tags', async ({ page }) => {
  await page.goto('/band')

  const ogDescription = await page.$eval('meta[property="og:description"]', el => (el as HTMLMetaElement).content)
  expect(ogDescription).toMatch(/^Aus verschiedenen Regionen Deutschlands/)

  const ogTitle = await page.$eval('meta[property="og:title"]', el => (el as HTMLMetaElement).content)
  expect(ogTitle).toBe('Club Live | Band')

  const description = await page.$eval('meta[name="description"]', el => (el as HTMLMetaElement).content)
  expect(description).toMatch(/^Aus verschiedenen Regionen Deutschlands/)
})
