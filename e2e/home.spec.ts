import { test, expect } from '@playwright/test'

test('page title is correct', async ({ page }) => {
  await page.goto('/')

  expect(await page.title()).toBe('Club Live | Live-Band aus Karlsruhe | Wir spielen Clubmusik live!')
})

test('banner contains title, subtitle, call to action and social media icons', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('img', { name: 'Club Live Logo' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Live-Band aus Karlsruhe' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Jetzt reinhören' })).toBeVisible()

  await expect(page.locator('#banner').getByRole('link', { name: 'Instagram' })).toHaveAttribute(
    'href',
    'https://instagram.com/clublive.band'
  )
  await expect(page.locator('#banner').getByRole('link', { name: 'Facebook' })).toHaveAttribute(
    'href',
    'https://facebook.com/ClubLive.band'
  )
  await expect(page.locator('#banner').getByRole('link', { name: 'YouTube' })).toHaveAttribute(
    'href',
    'https://www.youtube.com/channel/UCpnhZgIseF5XWs5icvU4nuQ'
  )
})

test('when user clicks on the call to action button, the browser scrolls #start section into view', async ({
  page,
}) => {
  await page.goto('/')

  await page.getByRole('link', { name: 'Jetzt reinhören' }).click()

  expect(page.url()).toContain('#start')
})

test('start section contains heading, video and info paragraph', async ({ page }) => {
  await page.goto('/#start')

  await expect(page.locator('#start').getByRole('heading', { name: 'Wir spielen Clubmusik live!' })).toBeVisible()

  await expect(page.locator('video')).toBeVisible()
  await expect(page.locator('video source')).toHaveAttribute(
    'src',
    'https://clublive.blob.core.windows.net/movies/sommer-23.mp4'
  )

  await expect(
    page.locator('#start').getByText('Club Live ist deine Live-Band für mitreißende Clubmusik')
  ).toBeVisible()
  await expect(page.getByRole('link', { name: 'Schreibe uns' })).toBeVisible()
})

test('should contain the correct meta tags', async ({ page }) => {
  await page.goto('/')

  await page.waitForLoadState()

  const ogDescription = await page.$eval('meta[property="og:description"]', el => (el as HTMLMetaElement).content)
  expect(ogDescription).toMatch(/^Wir spielen Clubmusik live! Charts und Dance Hits aus dem Club handgemacht/)

  const ogTitle = await page.$eval('meta[property="og:title"]', el => (el as HTMLMetaElement).content)
  expect(ogTitle).toBe('Club Live | Live-Band aus Karlsruhe | Wir spielen Clubmusik live!')

  const description = await page.$eval('meta[name="description"]', el => (el as HTMLMetaElement).content)
  expect(description).toMatch(/^Wir spielen Clubmusik live! Charts und Dance Hits aus dem Club handgemacht/)
})

test.describe('on desktop', () => {
  test.use({
    viewport: { width: 1600, height: 1200 },
  })
  test('header bar contains title', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByRole('link', { name: 'Club Live Club-Hits and Charts' })).toBeVisible()
  })
})

test.describe('on mobile', () => {
  test.use({
    viewport: { width: 500, height: 900 },
  })

  test('header bar contains title', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByRole('link', { name: 'Club Live' })).toBeVisible()
  })
})
