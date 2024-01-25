<template>
  <Vueform
    ref="bookingForm"
    id="booking-form"
    class="pt-s"
    validate-on="step|change"
    :size="formSize"
    :endpoint="false"
    add-class="vf-buchungsanfrage"
    :messages="{
      required: 'Dieses Feld muss ausgefüllt werden',
    }"
    @submit="onSubmit"
    :loading="isFormLoading"
    @change="onChangeForm"
  >
    <template #empty>
      <FormSteps @next="onNextClicked" @select="onChangeForm">
        <FormStep
          name="page0"
          :elements="['container', 'container_1', 'container_2']"
          label="Veranstaltung"
          :labels="{
            previous: 'Zurück',
            next: 'Weiter',
          }"
        />
        <FormStep
          name="page1"
          :elements="['container_3']"
          label="Kontakt"
          :labels="{
            previous: 'Zurück',
            next: 'Weiter',
          }"
        />
        <FormStep
          name="page2"
          label="Angebot"
          :elements="['container_5', 'container_4']"
          :labels="{
            previous: 'Zurück',
            next: 'Angebot anfordern',
          }"
        />
      </FormSteps>

      <FormElements>
        <GroupElement name="container">
          <StaticElement name="h2_1" tag="h4" content="Was?" />
          <SelectElement
            name="eventType"
            label="Art der Veranstaltung"
            :native="false"
            :items="eventTypeOptions"
            :can-deselect="false"
            default="Festival"
          />
          <TextElement
            name="eventTypeDescription"
            label="Bitte beschreibe die Art deiner Veranstaltung"
            :conditions="[['container.eventType', '==', 'Andere']]"
          />
          <SelectElement
            name="amountOfGuests"
            :native="false"
            label="Anzahl der Gäste"
            :items="guestOptions"
            :can-deselect="false"
            default="1500 - 2000"
          />
          <SelectElement
            name="plannedAirTime"
            :native="false"
            label="Geplante Spielzeit der Band"
            :items="showLengthOptions"
            :can-deselect="false"
            default="120 Minuten"
          />
        </GroupElement>
        <GroupElement name="container_1">
          <StaticElement name="h2" tag="h4" content="Wo?" />
          <TextElement name="locationName" label="Name der Location" />
          <TextElement name="locationAddress" label="Adresse" />
        </GroupElement>
        <GroupElement name="container_2">
          <StaticElement name="h2_2" tag="h4" content="Wann?" />
          <DateElement name="eventDate" label="Datum der Veranstaltung" display-format="DD.MM.YYYY" :submit="true" />
          <CheckboxElement name="dateUnknown" text="Ich kenne das genaue Datum noch nicht" />
          <TextElement
            name="dateEstimate"
            label="Ungefährer Zeitraum"
            :conditions="[['container_2.dateUnknown', '==', true]]"
          />
        </GroupElement>
        <GroupElement name="container_3">
          <StaticElement name="h4" tag="h4" content="Wer?" />
          <TextElement name="contactName" label="Dein Name" :rules="['required']" />
          <CheckboxgroupElement
            name="contactTypes"
            :items="contactTypeOptions"
            label="Wie erreichen wir dich am besten?"
            :rules="['required', 'min:1']"
            :messages="{
              required: 'Mindestens eine Option muss ausgewählt werden',
            }"
          />
          <TextElement
            name="email"
            input-type="email"
            label="E-Mail-Adresse"
            :rules="[
              {
                email: [['contactTypes', ['E-Mail']]],
              },
            ]"
          />
          <TextElement
            name="telephone"
            input-type="tel"
            label="Telefonnummer"
            :rules="[
              {
                required: ['contactTypes', ['Telefon', 'Whatsapp']],
              },
            ]"
          />
        </GroupElement>
        <GroupElement name="container_5">
          <StaticElement name="h4_1" tag="h4" content="Fast fertig!" />
          <TextareaElement
            name="message"
            label="Deine Nachricht"
            placeholder="Falls du uns noch etwas Persönliches sagen möchtest..."
            :floating="false"
          />
          <SelectElement
            name="reference"
            :native="false"
            label="Woher kennst du uns?"
            :items="referenceOptions"
            :can-deselect="false"
            :rules="['required']"
          />
          <TextElement
            name="referenceOther"
            label="Woher genau?"
            :conditions="[['container_5.reference', '==', 'Etwas anderes']]"
            :rules="['required']"
          />
        </GroupElement>
        <GroupElement name="container_4">
          <StaticElement
            name="p_1"
            tag="p"
            content="Bitte stelle nochmal sicher, dass deine Kontaktdaten korrekt sind, sonst können wir dir unser Angebot nicht zukommen lassen."
          />
          <StaticElement
            name="p"
            tag="p"
            content="Wir speichern und verarbeiten deine Daten gemäß DSGVO nur zur Bearbeitung deiner Anfrage. Mit dem Abschicken deiner Anfrage erklärst du du dich damit einverstanden."
          />
        </GroupElement>
      </FormElements>

      <FormStepsControls />
    </template>
  </Vueform>
</template>

<script setup lang="ts">
import { sendContactForm } from '@/utils'
import { type Vueform } from '@vueform/vueform'
import { ref } from 'vue'
import { computed } from 'vue'

export type TheContactFormData = {
  eventType: (typeof eventTypeOptions)[number] | null
  amountOfGuests: (typeof guestOptions)[number] | null
  plannedAirTime: (typeof showLengthOptions)[number] | null
  locationName: string | null
  locationAddress: string | null
  eventDate: string // YYYY-MM-DD
  dateUnknown: boolean
  dateEstimate?: string | null
  contactName: string
  contactTypes: (typeof contactTypeOptions)[number][]
  email: string | null
  telephone: string | null
  message: string | null
  reference: (typeof referenceOptions)[number]
  referenceOther?: string
}

const guestOptions = [
  'bis 100',
  '100 - 250',
  '250 - 500',
  '500 - 1000',
  '1000 - 1500',
  '1500 - 2000',
  '2000 - 3000',
  'mehr als 3000',
] as const

const eventTypeOptions = ['Festival', 'Stadtfest', 'Firmen-Event', 'Vereinsfest', 'Hochzeit', 'Andere'] as const

const contactTypeOptions = ['E-Mail', 'Telefon', 'Whatsapp'] as const

const showLengthOptions = [
  '60 Minuten',
  '90 Minuten',
  '120 Minuten',
  '150 Minuten',
  '180 Minuten',
  '210 Minuten',
] as const

const referenceOptions = ['Live', 'Empfehlung', 'Internet', 'Presse', 'Etwas anderes'] as const

const onChangeForm = () => {
  // give signal to parent; that user has changed something in the form
  // very useful for changes that happen after submission
  emit('changed')
}

const formSize = computed(() => {
  if (window.innerWidth > 760) {
    return 'lg'
  }
  return 'sm'
})

const onNextClicked = () => {
  const contactSection = document.getElementById('booking-form')
  contactSection?.scrollIntoView()
}

const emit = defineEmits(['error', 'success', 'changed'])

const bookingForm = ref<Vueform>()

const isFormLoading = ref(false)

const onSubmit = async form => {
  onChangeForm()
  isFormLoading.value = true

  const formData = bookingForm.value?.requestData as TheContactFormData

  console.log('formData', formData)

  await sendContactForm(formData)

  // send data to API here
  // await new Promise(resolve => setTimeout(resolve, 4000))

  emit('success')
  isFormLoading.value = false
}
</script>

<style>
.pt-s {
  padding-top: 5em;
}

.vf-static-tag-h4 > h4 {
  margin-top: 1em;
  margin-bottom: 0;
}

label {
  /* text-transform: none !important; */
  letter-spacing: 0.1em;
}

.vf-step a {
  border-bottom: 0;
}

.vf-element-layout {
  margin-bottom: 0.5em;
}

textarea::placeholder {
  color: var(--vf-color-input) !important;
  opacity: 0.5;
}

.vf-btn-lg {
  letter-spacing: 0.25em !important;
}

input[type='checkbox'].vf-checkbox {
  opacity: 1;
}

input[type='checkbox'],
input[type='radio'] {
  margin-right: var(--vf-space-checkbox) !important;
}

/* fix border highlight  */
.vf-datepicker-wrapper {
  height: inherit !important;
}

input[type='text'],
input[type='password'],
input[type='email'],
input[type='text']:focus,
input[type='password']:focus,
input[type='email']:focus {
  height: inherit !important;
}

/* make buttons feel like the other buttons on the page */
.vf-steps-controls > .vf-btn {
  transition:
    background-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out,
    color 0.2s ease-in-out;
  box-shadow: none;
  font-size: 0.8rem;
}

.vf-steps-controls > .vf-btn:hover {
  transform: inherit !important;
  background-color: transparent;
}

.vf-steps-controls > .vf-btn-primary:hover {
  box-shadow: inset 0 0 0 2px var(--color-accent-1);
}

.vf-steps-controls > .vf-btn-secondary:hover {
  box-shadow: inset 0 0 0 2px var(--vf-bg-btn-secondary);
}

/* variables from vueform builder */
.vf-buchungsanfrage *,
.vf-buchungsanfrage *:before,
.vf-buchungsanfrage *:after,
.vf-buchungsanfrage:root {
  --vf-primary: #0049ff;
  --vf-primary-darker: #6300ff;
  --vf-color-on-primary: #ffffff;
  --vf-danger: #ef4444;
  --vf-danger-lighter: #fee2e2;
  --vf-success: #10b981;
  --vf-success-lighter: #d1fae5;
  --vf-gray-50: #f9fafb;
  --vf-gray-100: #f3f4f6;
  --vf-gray-200: #e5e7eb;
  --vf-gray-300: #d1d5db;
  --vf-gray-400: #9ca3af;
  --vf-gray-500: #6b7280;
  --vf-gray-600: #4b5563;
  --vf-gray-700: #374151;
  --vf-gray-800: #1f2937;
  --vf-gray-900: #111827;
  --vf-ring-width: 2px;
  --vf-ring-color: #07bf9b66;
  --vf-link-color: var(--vf-primary);
  --vf-link-decoration: inherit;
  --vf-font-size: 1em;
  --vf-font-size-sm: 1em;
  --vf-font-size-lg: 1em;
  --vf-font-size-small: 0.875em;
  --vf-font-size-small-sm: 0.875em;
  --vf-font-size-small-lg: 0.875em;
  --vf-font-size-h1: 2.125em;
  --vf-font-size-h1-sm: 2.125em;
  --vf-font-size-h1-lg: 2.125em;
  --vf-font-size-h2: 1.875em;
  --vf-font-size-h2-sm: 1.875em;
  --vf-font-size-h2-lg: 1.875em;
  --vf-font-size-h3: 1.5em;
  --vf-font-size-h3-sm: 1.5em;
  --vf-font-size-h3-lg: 1.5em;
  --vf-font-size-h4: 1.25em;
  --vf-font-size-h4-sm: 1.25em;
  --vf-font-size-h4-lg: 1.25em;
  --vf-font-size-h1-mobile: 1.5em;
  --vf-font-size-h1-mobile-sm: 1.5em;
  --vf-font-size-h1-mobile-lg: 1.5em;
  --vf-font-size-h2-mobile: 1.25em;
  --vf-font-size-h2-mobile-sm: 1.25em;
  --vf-font-size-h2-mobile-lg: 1.25em;
  --vf-font-size-h3-mobile: 1.125em;
  --vf-font-size-h3-mobile-sm: 1.125em;
  --vf-font-size-h3-mobile-lg: 1.125em;
  --vf-font-size-h4-mobile: 1em;
  --vf-font-size-h4-mobile-sm: 1em;
  --vf-font-size-h4-mobile-lg: 1em;
  --vf-font-size-blockquote: 1rem;
  --vf-font-size-blockquote-sm: 0.875rem;
  --vf-font-size-blockquote-lg: 1rem;
  /* --vf-line-height: 1.5rem;
  --vf-line-height-sm: 1.25rem;
  --vf-line-height-lg: 1.5rem;
  --vf-line-height-small: 1.25rem;
  --vf-line-height-small-sm: 1.125rem;
  --vf-line-height-small-lg: 1.25rem; */
  --vf-line-height-headings: 1.2;
  --vf-line-height-headings-sm: 1.2;
  --vf-line-height-headings-lg: 1.2;
  --vf-line-height-blockquote: 1.5rem;
  --vf-line-height-blockquote-sm: 1.25rem;
  --vf-line-height-blockquote-lg: 1.5rem;
  --vf-letter-spacing: 0px;
  --vf-letter-spacing-sm: 0px;
  --vf-letter-spacing-lg: 0px;
  --vf-letter-spacing-small: 0px;
  --vf-letter-spacing-small-sm: 0px;
  --vf-letter-spacing-small-lg: 0px;
  --vf-letter-spacing-headings: 0px;
  --vf-letter-spacing-headings-sm: 0px;
  --vf-letter-spacing-headings-lg: 0px;
  --vf-letter-spacing-blockquote: 0px;
  --vf-letter-spacing-blockquote-sm: 0px;
  --vf-letter-spacing-blockquote-lg: 0px;
  --vf-gutter: 1rem;
  --vf-gutter-sm: 0.5rem;
  --vf-gutter-lg: 1rem;
  --vf-min-height-input: 2.375rem;
  --vf-min-height-input-sm: 2.125rem;
  --vf-min-height-input-lg: 2.875rem;
  --vf-py-input: 0.375rem;
  --vf-py-input-sm: 0.375rem;
  --vf-py-input-lg: 0.625rem;
  --vf-px-input: 0.75rem;
  --vf-px-input-sm: 0.5rem;
  --vf-px-input-lg: 0.875rem;
  --vf-py-btn: 0.375rem;
  --vf-py-btn-sm: 0.375rem;
  --vf-py-btn-lg: 0.625rem;
  --vf-px-btn: 0.875rem;
  --vf-px-btn-sm: 0.75rem;
  --vf-px-btn-lg: 1.25rem;
  --vf-py-btn-small: 0.25rem;
  --vf-py-btn-small-sm: 0.25rem;
  --vf-py-btn-small-lg: 0.375rem;
  --vf-px-btn-small: 0.625rem;
  --vf-px-btn-small-sm: 0.625rem;
  --vf-px-btn-small-lg: 0.75rem;
  --vf-py-group-tabs: 0.375rem;
  --vf-py-group-tabs-sm: 0.375rem;
  --vf-py-group-tabs-lg: 0.625rem;
  --vf-px-group-tabs: 0.75rem;
  --vf-px-group-tabs-sm: 0.5rem;
  --vf-px-group-tabs-lg: 0.875rem;
  --vf-py-group-blocks: 0.75rem;
  --vf-py-group-blocks-sm: 0.625rem;
  --vf-py-group-blocks-lg: 0.875rem;
  --vf-px-group-blocks: 1rem;
  --vf-px-group-blocks-sm: 1rem;
  --vf-px-group-blocks-lg: 1rem;
  --vf-py-tag: 0px;
  --vf-py-tag-sm: 0px;
  --vf-py-tag-lg: 0px;
  --vf-px-tag: 0.4375rem;
  --vf-px-tag-sm: 0.4375rem;
  --vf-px-tag-lg: 0.4375rem;
  --vf-py-slider-tooltip: 0.125rem;
  --vf-py-slider-tooltip-sm: 0.0625rem;
  --vf-py-slider-tooltip-lg: 0.1875rem;
  --vf-px-slider-tooltip: 0.375rem;
  --vf-px-slider-tooltip-sm: 0.3125rem;
  --vf-px-slider-tooltip-lg: 0.5rem;
  --vf-py-blockquote: 0.25rem;
  --vf-py-blockquote-sm: 0.25rem;
  --vf-py-blockquote-lg: 0.25rem;
  --vf-px-blockquote: 0.75rem;
  --vf-px-blockquote-sm: 0.75rem;
  --vf-px-blockquote-lg: 0.75rem;
  --vf-py-hr: 0.25rem;
  --vf-space-addon: 0px;
  --vf-space-addon-sm: 0px;
  --vf-space-addon-lg: 0px;
  --vf-space-checkbox: 0.375rem;
  --vf-space-checkbox-sm: 0.375rem;
  --vf-space-checkbox-lg: 0.375rem;
  --vf-space-tags: 0.1875rem;
  --vf-space-tags-sm: 0.1875rem;
  --vf-space-tags-lg: 0.1875rem;
  --vf-space-static-tag-1: 1rem;
  --vf-space-static-tag-2: 2rem;
  --vf-space-static-tag-3: 3rem;
  --vf-floating-top: 0rem;
  --vf-floating-top-sm: 0rem;
  --vf-floating-top-lg: 0.6875rem;
  --vf-bg-input: #ffffff;
  --vf-bg-input-hover: #ffffff;
  --vf-bg-input-focus: #ffffff;
  --vf-bg-input-danger: #ffffff;
  --vf-bg-input-success: #ffffff;
  --vf-bg-disabled: var(--vf-gray-200);
  --vf-bg-selected: #1118270d;
  --vf-bg-passive: var(--vf-gray-300);
  --vf-bg-icon: var(--vf-gray-500);
  --vf-bg-danger: var(--vf-danger-lighter);
  --vf-bg-success: var(--vf-success-lighter);
  --vf-bg-tag: var(--vf-primary);
  --vf-bg-slider-handle: var(--vf-primary);
  --vf-bg-toggle-handle: #ffffff;
  --vf-bg-date-head: var(--vf-gray-100);
  --vf-bg-addon: #ffffff00;
  --vf-bg-btn: var(--vf-primary);
  --vf-bg-btn-danger: var(--vf-danger);
  --vf-bg-btn-secondary: var(--color-accent-8);
  --vf-color-input: var(--vf-gray-800);
  --vf-color-input-hover: var(--vf-gray-800);
  --vf-color-input-focus: var(--vf-gray-800);
  --vf-color-input-danger: var(--vf-gray-800);
  --vf-color-input-success: var(--vf-gray-800);
  --vf-color-disabled: var(--vf-gray-400);
  --vf-color-placeholder: var(--vf-gray-300);
  --vf-color-passive: var(--vf-gray-700);
  --vf-color-muted: var(--vf-gray-500);
  --vf-color-floating: var(--vf-gray-500);
  --vf-color-floating-focus: var(--vf-gray-500);
  --vf-color-floating-success: var(--vf-gray-500);
  --vf-color-floating-danger: var(--vf-gray-500);
  --vf-color-danger: var(--vf-danger);
  --vf-color-success: var(--vf-success);
  --vf-color-tag: var(--vf-color-on-primary);
  --vf-color-addon: var(--vf-gray-800);
  --vf-color-date-head: var(--vf-gray-700);
  --vf-color-btn: var(--vf-color-on-primary);
  --vf-color-btn-danger: #ffffff;
  --vf-color-btn-secondary: var(--color-fg);
  --vf-border-color-input: var(--vf-gray-300);
  --vf-border-color-input-hover: var(--vf-gray-300);
  --vf-border-color-input-focus: var(--vf-primary);
  --vf-border-color-input-danger: var(--vf-gray-300);
  --vf-border-color-input-success: var(--vf-gray-300);
  --vf-border-color-checked: var(--vf-primary);
  --vf-border-color-passive: var(--vf-gray-300);
  --vf-border-color-slider-tooltip: var(--vf-primary);
  --vf-border-color-tag: var(--vf-primary);
  --vf-border-color-btn: var(--vf-primary);
  --vf-border-color-btn-danger: var(--vf-danger);
  --vf-border-color-btn-secondary: var(--vf-gray-200);
  --vf-border-color-blockquote: var(--vf-gray-300);
  --vf-border-color-hr: var(--vf-gray-300);
  --vf-border-width-input-t: 1px;
  --vf-border-width-input-r: 1px;
  --vf-border-width-input-b: 1px;
  --vf-border-width-input-l: 1px;
  --vf-border-width-radio-t: 1px;
  --vf-border-width-radio-r: 1px;
  --vf-border-width-radio-b: 1px;
  --vf-border-width-radio-l: 1px;
  --vf-border-width-checkbox-t: 1px;
  --vf-border-width-checkbox-r: 1px;
  --vf-border-width-checkbox-b: 1px;
  --vf-border-width-checkbox-l: 1px;
  --vf-border-width-dropdown: 1px;
  --vf-border-width-btn: 0;
  --vf-border-width-toggle: 0.125rem;
  --vf-border-width-tag: 1px;
  --vf-border-width-blockquote: 3px;
  --vf-shadow-input: 0px 0px 0px 0px rgba(0, 0, 0, 0);
  --vf-shadow-input-hover: 0px 0px 0px 0px rgba(0, 0, 0, 0);
  --vf-shadow-input-focus: 0px 0px 0px 0px rgba(0, 0, 0, 0);
  --vf-shadow-handles: 0px 0px 0px 0px rgba(0, 0, 0, 0);
  --vf-shadow-handles-hover: 0px 0px 0px 0px rgba(0, 0, 0, 0);
  --vf-shadow-handles-focus: 0px 0px 0px 0px rgba(0, 0, 0, 0);
  --vf-shadow-btn: 0px 0px 0px 0px rgba(0, 0, 0, 0);
  --vf-shadow-dropdown: 0px 0px 0px 0px rgba(0, 0, 0, 0);
  --vf-radius-input: 0;
  --vf-radius-input-sm: 0;
  --vf-radius-input-lg: 0;
  --vf-radius-btn: 0;
  --vf-radius-btn-sm: 0;
  --vf-radius-btn-lg: 0;
  --vf-radius-small: 0;
  --vf-radius-small-sm: 0;
  --vf-radius-small-lg: 0;
  --vf-radius-large: 0;
  --vf-radius-large-sm: 0;
  --vf-radius-large-lg: 0;
  --vf-radius-tag: 0.25rem;
  --vf-radius-tag-sm: 0.25rem;
  --vf-radius-tag-lg: 0.25rem;
  --vf-radius-checkbox: 0;
  --vf-radius-checkbox-sm: 0;
  --vf-radius-checkbox-lg: 0;
  --vf-radius-slider: 0.25rem;
  --vf-radius-slider-sm: 0.25rem;
  --vf-radius-slider-lg: 0.25rem;
  --vf-radius-image: 0.25rem;
  --vf-radius-image-sm: 0.25rem;
  --vf-radius-image-lg: 0.25rem;
  --vf-radius-gallery: 0.25rem;
  --vf-radius-gallery-sm: 0.25rem;
  --vf-radius-gallery-lg: 0.25rem;
  --vf-checkbox-size: 1rem;
  --vf-checkbox-size-sm: 0.875rem;
  --vf-checkbox-size-lg: 1rem;
  --vf-gallery-size: 6rem;
  --vf-gallery-size-sm: 5rem;
  --vf-gallery-size-lg: 7rem;
  --vf-toggle-width: 3rem;
  --vf-toggle-width-sm: 2.75rem;
  --vf-toggle-width-lg: 3rem;
  --vf-toggle-height: 1.25rem;
  --vf-toggle-height-sm: 1rem;
  --vf-toggle-height-lg: 1.25rem;
  --vf-slider-height: 0.375rem;
  --vf-slider-height-sm: 0.3125rem;
  --vf-slider-height-lg: 0.5rem;
  --vf-slider-height-vertical: 20rem;
  --vf-slider-height-vertical-sm: 20rem;
  --vf-slider-height-vertical-lg: 20rem;
  --vf-slider-handle-size: 1rem;
  --vf-slider-handle-size-sm: 0.875rem;
  --vf-slider-handle-size-lg: 1.25rem;
  --vf-slider-tooltip-distance: 0.5rem;
  --vf-slider-tooltip-distance-sm: 0.375rem;
  --vf-slider-tooltip-distance-lg: 0.5rem;
  --vf-slider-tooltip-arrow-size: 0.3125rem;
  --vf-slider-tooltip-arrow-size-sm: 0.3125rem;
  --vf-slider-tooltip-arrow-size-lg: 0.3125rem;
}
</style>
