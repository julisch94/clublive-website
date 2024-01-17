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
        <NewContactForm />
        <!-- <div>
          <p>
            Dieses Kontaktformular ist die beste Möglichkeit zu uns Kontakt aufzunehmen. Wir lesen deine Nachricht und
            melden uns schnellstmöglich bei dir zurück.
          </p>
          <form data-netlify="true" data-netlify-honeypot="bot-field" @submit.prevent="submitForm">
            <div class="row">
              <div class="field">
                <label for="name">Name</label>
                <input id="name" v-model="name" type="text" name="name" required />
              </div>
              <div class="field">
                <label for="email">E-Mail</label>
                <input
                  id="email"
                  v-model="email"
                  type="text"
                  name="email"
                  pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,}$"
                  required
                />
              </div>
            </div>

            <div class="field">
              <label for="message">Nachricht</label>
              <textarea
                id="message"
                v-model="message"
                name="message"
                rows="6"
                required
                @keyup.ctrl.enter="submitForm()"
              />
            </div>

            <div class="row">
              <div class="field">
                <label for="reference">Woher kennst du uns?</label>
                <select id="reference" v-model="reference" name="reference" required>
                  <option disabled value="">Bitte wählen</option>
                  <option value="live">Live-Auftritt</option>
                  <option value="friends">Empfehlung</option>
                  <option value="internet">Internet</option>
                  <option value="press">Presse</option>
                  <option value="other">Etwas anderes</option>
                </select>
              </div>
              <div v-if="showReferenceOther" class="field">
                <label for="reference">Woher genau?</label>
                <input
                  id="referenceOther"
                  v-model="referenceOther"
                  placeholder="Bitte angeben"
                  type="text"
                  name="referenceOther"
                  required
                />
              </div>
            </div>

            <div data-netlify-recaptcha="true" />

            <ul v-if="!success" class="actions">
              <li>
                <button type="submit" class="special" :disabled="isLoading">
                  <span v-if="isLoading">Sendet...</span>
                  <span v-else>Abschicken</span>
                </button>
              </li>
            </ul>
          </form>

          <div ref="resultArea" class="result" :class="{ shake: failure, 'slide-in-from-left': success }">
            <div v-if="success">
              <span class="icon alt fa-check" />
              <span>Vielen Dank! Deine Nachricht wurde übermittelt. Wir melden uns baldmöglichst zurück.</span>
            </div>
            <div v-if="failure">
              <span class="icon alt fa-exclamation" />
              <span>
                Oh. Da ist etwas schief gegangen. Kannst du uns bitte stattdessen eine E-Mail an
                <a href="mailto:contact@clublive.band">contact@clublive.band</a>
                schicken?
              </span>
            </div>
          </div>
        </div> -->
      </section>
    </div>
  </section>
</template>

<style scoped>
#contact {
  border-bottom: solid 1px rgba(212, 212, 255, 0.1);
  overflow-x: hidden;
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
