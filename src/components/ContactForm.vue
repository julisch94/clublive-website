<script setup lang="ts">
import { Ref, computed, ref } from 'vue'
import { sendContactForm } from '@/utils/api'
import NewContactForm from './NewContactForm.vue'

const name = ref('')
const email = ref('')
const message = ref('')
const success = ref(false)
const failure = ref(false)
const isLoading = ref(false)
const reference = ref('')
const referenceOther = ref('')

const resultArea: Ref<HTMLDivElement | null> = ref(null)

const showReferenceOther = computed(() => reference.value === 'other')

const submitForm = async () => {
  const body = {
    name: name.value,
    email: email.value,
    message: message.value,
    reference: reference.value,
    referenceOther: referenceOther.value,
  }

  success.value = false
  failure.value = false
  isLoading.value = true

  try {
    const result = await sendContactForm(body)

    isLoading.value = false
    if (result?.ok) {
      success.value = true
    } else {
      failure.value = true
    }
  } catch (error) {
    console.error(error)
    isLoading.value = false
  }

  resultArea.value?.scrollIntoView()
}
</script>

<template>
  <section id="contact" class="scroll-target">
    <div class="inner pa">
      <section>
        <h2>Buchungsanfrage</h2>
        <p>
          Dieses Kontaktformular ist die beste Möglichkeit ein Angebot von uns anzufragen. Wir lesen deine Nachricht und
          melden uns schnellstmöglich bei dir zurück. Für einfache Kontaktanfragen kannst du uns auch eine E-Mail schreiben an
          <a href="mailto:contact@clublive.band">contact@clublive.band</a>.
        </p>
        <NewContactForm />
      </section>
    </div>
  </section>
</template>

<style scoped>
#contact {
  border-bottom: solid 1px rgba(212, 212, 255, 0.1);
}

#contact .inner {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  justify-content: center;
}

#contact .inner > :nth-child(2n-1) {
  width: 60%;
}

#contact .inner > :nth-child(2n) {
  padding-left: 3em;
  width: 40%;
}

#contact .inner > .split {
  padding: 0;
}

#contact .inner > .split > * {
  padding: 3em 0 2em 3em;
  position: relative;
}

#contact .inner > .split > *:before {
  border-top: solid 1px rgba(212, 212, 255, 0.1);
  content: '';
  display: block;
  margin-left: -3em;
  position: absolute;
  top: 0;
  width: calc(100vw + 3em);
}

#contact .inner > .split > :first-child:before {
  display: none;
}

@media screen and (max-width: 960px) {
  #contact .inner {
    display: block;
  }

  #contact .inner > :nth-child(2n-1) {
    /* padding: 4em 0 3em 0; */
    border-right: 0;
    width: 100%;
  }

  #contact .inner > :nth-child(2n) {
    padding-left: 0;
    width: 100%;
  }

  #contact .inner > .split > * {
    padding: 3em 0 2em 0;
  }

  #contact .inner > .split > :first-child:before {
    display: block;
  }
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.row .field {
  flex: 1 1 20em;
  min-width: 20em;
}

div.result {
  margin-top: 1em;
}

.actions {
  text-align: end;
}

.result div {
  display: flex;
  align-items: center;
  gap: 15px;
}

.slide-in-from-left {
  animation: slide-in-from-left 0.3s ease-out 0.2s forwards;
  transform: translateX(-10px);
  opacity: 0;
}

@keyframes slide-in-from-left {
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
