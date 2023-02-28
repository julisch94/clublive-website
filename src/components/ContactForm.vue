<template>
  <section id="contact" class="scroll-target">
    <div class="inner pa">
      <section>
        <h3>Kontaktformular / Buchung</h3>
        <div>
          <p>
            Dieses Kontaktformular ist die beste Möglichkeit zu uns Kontakt aufzunehmen. Wir lesen deine Nachricht auf
            unseren Handys und melden uns umgehend bei dir zurück.
          </p>
          <form
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            @submit.prevent="submitForm"
            @reset.prevent="reset()"
          >
            <div class="field half first">
              <label for="name">Name</label>
              <input id="name" v-model="name" type="text" name="name" required />
            </div>
            <div class="field half">
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
            <div class="field first" :class="{ half: showReferenceOther }">
              <label for="reference">Woher kennst du uns?</label>
              <select id="reference" v-model="reference" required>
                <option disabled value="">Bitte wählen</option>
                <option value="live">Live-Auftritt</option>
                <option value="friends">Empfehlung</option>
                <option value="internet">Internet</option>
                <option value="press">Presse</option>
                <option value="other">Etwas anderes</option>
              </select>
            </div>
            <div v-if="showReferenceOther" class="field half">
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
          <div ref="result" class="result" :class="{ shake: failure, 'slide-in-from-left': success }">
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
        </div>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ContactForm',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      success: false,
      failure: false,
      isLoading: false,
      reference: '',
      referenceOther: '',
    }
  },
  computed: {
    showReferenceOther() {
      return this.reference === 'other'
    },
  },
  methods: {
    submitForm() {
      const body = {
        'form-name': 'clublive-contact',
        name: this.name,
        email: this.email,
        message: this.message,
        reference: this.reference,
        referenceOther: this.referenceOther,
      }
      console.log('form data', body)

      this.success = false
      this.failure = false
      this.isLoading = true
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(body).toString(),
      })
        .then(result => {
          console.log(result)
          this.isLoading = false
          if (result.ok) {
            this.success = true
            console.log('Form successfully submitted.')
          } else {
            this.failure = true
            console.error('Form submission failed', result.status, result.statusText)
          }
          const resultArea = this.$refs.result as HTMLDivElement
          resultArea.scrollIntoView()
        })
        .catch(error => {
          this.isLoading = false
          alert(error)
        })
    },
    reset() {
      this.name = ''
      this.email = ''
      this.message = ''
      this.success = false
      this.failure = false
    },
  },
})
</script>

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
