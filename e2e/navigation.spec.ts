import test, { expect } from '@playwright/test'

test.describe('on desktop', () => {
  test.use({
    viewport: { width: 1600, height: 1200 },
  })

  test('navigates through all the pages on desktop', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByRole('img', { name: 'Club Live Logo' })).toBeVisible()
    await page.locator('#menu-desktop').getByRole('link', { name: 'Musik' }).click()
    await expect(page.getByRole('heading', { name: 'Musik', exact: true })).toBeVisible()
    await page.locator('#menu-desktop').getByRole('link', { name: 'Band' }).click()
    await expect(page.getByRole('heading', { name: 'Band' })).toBeVisible()
    await page.locator('#menu-desktop').getByRole('link', { name: 'Shows' }).click()
    await expect(page.getByRole('heading', { name: 'Shows', exact: true })).toBeVisible()
    await page.locator('#menu-desktop').getByRole('link', { name: 'Downloads' }).click()
    await expect(page.getByRole('heading', { name: 'Downloads' })).toBeVisible()
  })

  test('navigates back to home when user clicks on logo', async ({ page }) => {
    await page.goto('/')

    await page.locator('nav#menu-desktop.navigation-bar').getByRole('link', { name: 'Musik' }).click()
    await expect(page.getByRole('heading', { name: 'Musik', exact: true })).toBeVisible()

    await page.getByRole('link', { name: 'Club Live Club-Hits and Charts' }).click()
    await expect(page.getByRole('img', { name: 'Club Live Logo' })).toBeVisible()
  })
})

test.describe('on mobile', () => {
  test.use({
    viewport: { width: 500, height: 900 },
  })
  test('navigates through all the pages on mobile', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByRole('img', { name: 'Club Live Logo' })).toBeVisible()

    await page.locator('#menu-mobile').getByRole('link').click()
    await page.locator('#menu').getByRole('link', { name: 'Musik' }).click()
    await expect(page.getByRole('heading', { name: 'Musik', exact: true })).toBeVisible()

    await page.locator('#menu-mobile').getByRole('link').click()
    await page.locator('#menu').getByRole('link', { name: 'Band' }).click()
    await expect(page.getByRole('heading', { name: 'Band' })).toBeVisible()

    await page.locator('#menu-mobile').getByRole('link').click()
    await page.locator('#menu').getByRole('link', { name: 'Shows' }).click()
    await expect(page.getByRole('heading', { name: 'Shows', exact: true })).toBeVisible()

    await page.locator('#menu-mobile').getByRole('link').click()
    await page.locator('#menu').getByRole('link', { name: 'Downloads' }).click()
    await expect(page.getByRole('heading', { name: 'Downloads' })).toBeVisible()

    await page.locator('#menu-mobile').getByRole('link').click()
    await page.locator('#menu').getByRole('link', { name: 'Home' }).click()
    await expect(page.getByRole('img', { name: 'Club Live Logo' })).toBeVisible()
  })

  test('navigates back to home when user clicks on logo', async ({ page }) => {
    await page.goto('/')

    await page.locator('#menu-mobile').getByRole('link').click()
    await page.locator('#menu').getByRole('link', { name: 'Musik' }).click()
    await expect(page.getByRole('heading', { name: 'Musik', exact: true })).toBeVisible()

    await page.getByRole('link', { name: 'Club Live' }).click()
    await expect(page.getByRole('img', { name: 'Club Live Logo' })).toBeVisible()
  })
})
