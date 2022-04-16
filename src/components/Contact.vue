<template>
  <section id="contact">
    <div class="inner">
      <section>
        <h3>Kontaktformular / Ihre Anfrage</h3>
        <div class="overlay-container">
          <div class="loading-overlay" v-if="isLoading">
            <Loader color="#efefef" />
          </div>
          <form
            @submit.prevent="submitForm"
            @reset.prevent="reset()"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <div class="field half first">
              <label for="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                v-model="name"
                required
              />
            </div>
            <div class="field half">
              <label for="email">E-Mail</label>
              <input
                type="text"
                name="email"
                id="email"
                v-model="email"
                pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,}$"
                required
              />
            </div>
            <div class="field">
              <label for="message">Nachricht</label>
              <textarea
                name="message"
                id="message"
                v-model="message"
                rows="6"
                @keyup.ctrl.enter="submitForm()"
              >
              </textarea>
            </div>
            <div data-netlify-recaptcha="true"></div>
            <ul class="actions">
              <li>
                <button type="submit" class="special" :disabled="isLoading">
                  Abschicken
                </button>
              </li>
              <li>
                <button type="reset" :disabled="isLoading">Löschen</button>
              </li>
            </ul>
          </form>
          <div class="result" :class="{ shake: success || failure }">
            <div v-if="success">
              <span class="icon alt fa-check"></span>
              <span
                >Vielen Dank! Die Nachricht wurde übermittelt. Wir melden uns
                baldmöglichst zurück.</span
              >
            </div>
            <div v-if="failure">
              <span class="icon alt fa-exclamation"></span>
              <span>
                Oh. Da ist etwas schief gegangen. Kannst du uns bitte
                stattdessen eine E-Mail an
                <a href="mailto:contact@clublive.band">contact@clublive.band</a>
                schicken?
              </span>
            </div>
          </div>
        </div>
      </section>
      <section class="split">
        <section>
          <div class="contact-method">
            <span class="icon alt fa-envelope"></span>
            <h3>E-Mail</h3>
            <a href="mailto:contact@clublive.band">contact@clublive.band</a>
            <p>Wir freuen uns über Ihre Anfrage!</p>
          </div>
        </section>
        <section>
          <div class="contact-method">
            <span class="icon alt fa-home"></span>
            <h3>Adresse</h3>
            <span>76131 Karlsruhe<br />Baden-Württemberg<br />Deutschland</span>
          </div>
        </section>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Loader from "vue-spinner/src/ScaleLoader.vue";

export default defineComponent({
  name: "Contact",
  components: {
    Loader,
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      success: false,
      failure: false,
      isLoading: false,
    };
  },
  methods: {
    submitForm() {
      const body = {
        "form-name": "clublive-contact",
        name: this.name,
        email: this.email,
        message: this.message,
      };
      console.log("form data", body);

      this.success = false;
      this.failure = false;
      this.isLoading = true;
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(body).toString(),
      })
        .then((result) => {
          console.log(result);
          this.isLoading = false;
          if (result.ok) {
            this.success = true;
            console.log("Form successfully submitted.");
          } else {
            this.failure = true;
            console.error(
              "Form submission failed",
              result.status,
              result.statusText
            );
          }
        })
        .catch((error) => {
          this.isLoading = false;
          alert(error);
        });
    },
    reset() {
      this.name = "";
      this.email = "";
      this.message = "";
      this.success = false;
      this.failure = false;
    },
  },
});
</script>

<style>
div.result {
  margin-top: 1em;
}

.overlay-container {
  position: relative;
}

.loading-overlay {
  position: absolute;
  background-color: #00000044;
  user-select: none;
  top: -10px;
  bottom: -10px;
  left: -10px;
  right: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}

.result div {
  display: flex;
  align-items: center;
  gap: 15px;
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
