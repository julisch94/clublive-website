import test, { expect } from '@playwright/test'

test('fills form and shows success message; happy path', async ({ page }) => {
  await page.clock.install({ now: new Date('2024-04-04') })

  await page.goto('/')

  await page.getByLabel('Art der Veranstaltung').click()
  await page.getByLabel('Vereinsfest').click()
  await page.getByLabel('Anzahl der Gäste').click()
  await page.getByLabel('500 - 1000').click()
  await page.getByLabel('Geplante Spielzeit der Band').click()
  await page.getByLabel('180 Minuten').click()
  await page.getByLabel('Name der Location').click()
  await page.getByLabel('Name der Location').fill('Hochschule Karlsruhe')
  await page.getByLabel('Adresse', { exact: true }).click()
  await page.getByLabel('Adresse', { exact: true }).fill('Moltkestraße, Karlsruhe')
  await page.getByLabel('Datum der Veranstaltung').click()
  await page.locator('.flatpickr-next-month').click()
  await page.locator('.flatpickr-next-month').click()
  await page.locator('.flatpickr-next-month').click()
  await page.getByLabel('July 13,').click()
  await page.getByRole('button', { name: 'Weiter' }).click()
  await page.getByLabel('Dein Name').click()
  await page.getByLabel('Dein Name').fill('Hans Wurst')
  await page.getByText('E-Mail', { exact: true }).click()
  await page.getByText('Telefon', { exact: true }).click()
  await page.getByText('Whatsapp').click()
  await page.getByLabel('E-Mail-Adresse').click()
  await page.getByLabel('E-Mail-Adresse').fill('hans.wurst@web.de')
  await page.getByLabel('Telefonnummer').click()
  await page.getByLabel('Telefonnummer').fill('0123456789')
  await page.getByRole('button', { name: 'Weiter' }).click()
  await page.getByPlaceholder('Falls du uns noch etwas Persö').click()
  await page.getByPlaceholder('Falls du uns noch etwas Persö').fill('Hier eine kurze Nachricht für euch')
  await page.getByLabel('Woher kennst du uns?').click()
  await page.getByLabel('Empfehlung').click()

  await page.route('/', async route => {
    await route.fulfill()
  })

  await page.getByRole('button', { name: 'Angebot anfordern' }).click()

  await expect(page.getByText('Vielen Dank! Deine Nachricht')).toBeVisible()
})

test('sends all data to the server', async ({ page }) => {
  await page.clock.install({ now: new Date('2024-04-04') })

  await page.goto('/')

  await page.getByLabel('Art der Veranstaltung').click()
  await page.getByLabel('Andere', { exact: true }).click()
  await page.getByLabel('Bitte beschreibe die Art').click()
  await page.getByLabel('Bitte beschreibe die Art').fill('Fette Party')
  await page.getByLabel('Anzahl der Gäste').click()
  await page.getByLabel('2000 - 3000').click()
  await page.getByLabel('Geplante Spielzeit der Band').click()
  await page.getByLabel('210 Minuten').click()
  // no idea why this exact false is needed
  await page.getByLabel('Name der Location', { exact: false }).click()
  await page.getByLabel('Name der Location').fill('Hochschule Karlsruhe')
  await page.getByLabel('Adresse', { exact: true }).click()
  await page.getByLabel('Adresse', { exact: true }).fill('Moltkestraße Karlsruhe')
  await page.getByLabel('Datum der Veranstaltung').click()
  await page.locator('.flatpickr-next-month').click()
  await page.locator('.flatpickr-next-month').click()
  await page.locator('.flatpickr-next-month').click()
  await page.getByLabel('July 15,').click()
  await page.locator('label').filter({ hasText: 'Ich kenne das genaue Datum' }).click()
  await page.getByLabel('Ungefährer Zeitraum').click()
  await page.getByLabel('Ungefährer Zeitraum').fill('könnte auch die Woche danach werden')
  await page.getByRole('button', { name: 'Weiter' }).click()

  await page.getByLabel('Dein Name').click()
  await page.getByLabel('Dein Name').fill('Ansprechperson')
  await page.getByText('E-Mail', { exact: true }).click()
  await page.getByText('Whatsapp').click()
  await page.getByText('Telefon', { exact: true }).click()
  await page.getByLabel('E-Mail-Adresse').click()
  await page.getByLabel('E-Mail-Adresse').fill('test@example.com')
  await page.getByLabel('Telefonnummer').click()
  await page.getByLabel('Telefonnummer').fill('0721000000')
  await page.getByRole('button', { name: 'Weiter' }).click()

  await page.getByPlaceholder('Falls du uns noch etwas Persö').click()
  await page.getByPlaceholder('Falls du uns noch etwas Persö').fill('in der Kürze liegt die Würze')
  await page.getByLabel('Woher kennst du uns?').click()
  await page.getByLabel('Etwas anderes').click()
  await page.getByLabel('Woher genau?').click()
  await page.getByLabel('Woher genau?').fill('Eventplaner')

  await page.route('/', async route => {
    const request = route.request()

    expect(request.method() === 'POST')

    const expectedPayload = {
      amountOfGuests: '2000 - 3000',
      contactName: 'Ansprechperson',
      contactTypes: 'E-Mail,Whatsapp,Telefon',
      dateEstimate: 'könnte auch die Woche danach werden',
      dateUnknown: 'true',
      email: 'test@example.com',
      eventDate: '2024-07-15',
      eventType: 'Andere',
      eventTypeDescription: 'Fette Party',
      'form-name': 'clublive-contact',
      locationAddress: 'Moltkestraße Karlsruhe',
      locationName: 'Hochschule Karlsruhe',
      message: 'in der Kürze liegt die Würze',
      plannedAirTime: '210 Minuten',
      reference: 'Etwas anderes',
      referenceOther: 'Eventplaner',
      telephone: '0721000000',
    }

    expect(request.postDataJSON()).toStrictEqual(expectedPayload)

    await route.fulfill()
  })

  await page.getByRole('button', { name: 'Angebot anfordern' }).click()
})

test('shows error message when submission fails', async ({ page }) => {
  await page.clock.install({ now: new Date('2024-04-02') })

  await page.goto('/')

  await page.getByLabel('Art der Veranstaltung').click()
  await page.getByLabel('Vereinsfest').click()
  await page.getByLabel('Anzahl der Gäste').click()
  await page.getByLabel('500 - 1000').click()
  await page.getByLabel('Geplante Spielzeit der Band').click()
  await page.getByLabel('180 Minuten').click()
  await page.getByLabel('Name der Location').click()
  await page.getByLabel('Name der Location').fill('Hochschule Karlsruhe')
  await page.getByLabel('Adresse', { exact: true }).click()
  await page.getByLabel('Adresse', { exact: true }).fill('Moltkestraße, Karlsruhe')
  await page.getByLabel('Datum der Veranstaltung').click()
  await page.locator('.flatpickr-next-month').click()
  await page.locator('.flatpickr-next-month').click()
  await page.locator('.flatpickr-next-month').click()
  await page.getByLabel('July 13,').click()
  await page.getByRole('button', { name: 'Weiter' }).click()
  await page.getByLabel('Dein Name').click()
  await page.getByLabel('Dein Name').fill('Hans Wurst')
  await page.getByText('E-Mail', { exact: true }).click()
  await page.getByText('Telefon', { exact: true }).click()
  await page.getByText('Whatsapp').click()
  await page.getByLabel('E-Mail-Adresse').click()
  await page.getByLabel('E-Mail-Adresse').fill('hans.wurst@web.de')
  await page.getByLabel('Telefonnummer').click()
  await page.getByLabel('Telefonnummer').fill('0123456789')
  await page.getByRole('button', { name: 'Weiter' }).click()
  await page.getByPlaceholder('Falls du uns noch etwas Persö').click()
  await page.getByPlaceholder('Falls du uns noch etwas Persö').fill('Hier eine kurze Nachricht für euch')
  await page.getByLabel('Woher kennst du uns?').click()
  await page.getByLabel('Empfehlung').click()

  await page.route('/', async route => {
    await route.fulfill({
      status: 400,
    })
  })

  await page.getByRole('button', { name: 'Angebot anfordern' }).click()

  await expect(page.getByText('Oh. Da ist etwas schief')).toBeVisible()
})

test('shows additional event type field when other event type selected', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByLabel('Bitte beschreibe die Art')).not.toBeVisible()

  await page.getByLabel('Art der Veranstaltung').click()
  await page.getByLabel('Andere', { exact: true }).click()
  await page.getByLabel('Bitte beschreibe die Art').click()
  await page.getByLabel('Bitte beschreibe die Art').fill('Fette Party')
})

test('shows additional date field when no specific date selected', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByLabel('Ungefährer Zeitraum')).not.toBeVisible()

  await page.locator('label').filter({ hasText: 'Ich kenne das genaue Datum' }).click()
  await page.getByLabel('Ungefährer Zeitraum').click()
  await page.getByLabel('Ungefährer Zeitraum').fill('irgendwann im Mai')
})

test('requires a contact name', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Weiter' }).click()

  await page.getByRole('button', { name: 'Weiter' }).click()

  await expect(page.getByText('Dieses Feld muss ausgefüllt')).toBeVisible()
})

test('requires at least one contact option', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Weiter' }).click()

  await page.getByRole('button', { name: 'Weiter' }).click()

  await expect(page.getByText('Mindestens eine Option muss')).toBeVisible()
})

test('requires email address when email contact option selected', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Weiter' }).click()

  await page
    .locator('label')
    .filter({ hasText: /^E-Mail$/ })
    .click()
  await page.getByRole('button', { name: 'Weiter' }).click()

  await expect(page.getByText('E-Mail-Adresse muss eine gü')).toBeVisible()
})

test('requires phone number when phone contact option selected', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Weiter' }).click()

  await page
    .locator('label')
    .filter({ hasText: /^Telefon$/ })
    .click()
  await page.getByRole('button', { name: 'Weiter' }).click()

  await expect(page.locator('[id="container_3\\.telephone__error"]')).toBeVisible()
})

test('requires phone number when whatsapp contact option selected', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Weiter' }).click()

  await page
    .locator('label')
    .filter({ hasText: /^Whatsapp$/ })
    .click()
  await page.getByRole('button', { name: 'Weiter' }).click()

  await expect(page.locator('[id="container_3\\.telephone__error"]')).toBeVisible()
})

test('requires reference', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Weiter' }).click()
  await page.getByLabel('Dein Name').click()
  await page.getByLabel('Dein Name').fill('a')
  await page
    .locator('label')
    .filter({ hasText: /^Telefon$/ })
    .click()
  await page.getByLabel('Telefonnummer').click()
  await page.getByLabel('Telefonnummer').fill('1')
  await page.getByRole('button', { name: 'Weiter' }).click()

  await page.getByRole('button', { name: 'Angebot anfordern' }).click()

  await expect(page.locator('[id="container_5\\.reference__error"]')).toBeVisible()
})
