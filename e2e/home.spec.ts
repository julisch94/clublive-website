import { test, expect } from '@playwright/test'

test('page title is correct', async ({ page }) => {
  await page.goto('/')

  expect(await page.title()).toBe('Club Live | Live Band aus Karlsruhe | Wir spielen Clubmusik live!')
})

test('header bar contains title and menu button', async ({ page }) => {
  console.info('starting')
  await page.goto('/')

  await expect(page.getByRole('link', { name: 'Club Live Club-Hits and Charts' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Menu' })).toBeVisible()
})

test('banner contains title, subtitle, call to action and social media icons', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('img', {name: 'Club Live Logo'})).toBeVisible()
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
  await expect(page.locator('#start iframe[title="Club Live YouTube"]')).toBeVisible()
  await expect(
    page.locator('#start').getByText('Wer sich fragt, ob moderne, hoch-produzierte Musik überhaupt')
  ).toBeVisible()
  await expect(page.getByRole('link', { name: 'Schreibe uns' })).toBeVisible()
})

test('home link leads back to root', async ({ page }) => {
  await page.goto('/#start')

  await page.getByRole('link', { name: 'Club Live Club-Hits and Charts' }).click()

  await page.waitForURL('/')
})
