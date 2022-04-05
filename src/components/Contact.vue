<template>
  <section id="contact">
    <div class="inner">
      <section>
        <h3>Kontaktformular / Ihre Anfrage</h3>
        <form
          @submit.prevent="submitForm"
          @reset.prevent="reset()"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <div class="field half first">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" v-model="name" required />
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
            <li><input type="submit" value="Abschicken" class="special" /></li>
            <li><input type="reset" value="Löschen" /></li>
          </ul>
        </form>
        <div class="result">
          <p v-if="success">
            Vielen Dank! Die Nachricht wurde übermittelt. Wir melden uns
            baldmöglichst zurück.
          </p>
          <p v-if="failure">
            Oh. Da ist etwas schief gegangen. Kannst du uns bitte stattdessen
            eine E-Mail an contact@clublive.band schicken?
          </p>
        </div>
      </section>
      <section class="split">
        <section>
          <div class="contact-method">
            <span class="icon alt fa-envelope"></span>
            <h3>E-Mail</h3>
            <span>contact(at)clublive.band</span>
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

export default defineComponent({
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      success: false,
      failure: false,
    };
  },
  mounted() {
    console.log(this.name);
  },
  methods: {
    submitForm() {
      const body = {
        "form-name": "clublive-contact",
        name: this.name,
        email: this.email,
        message: this.message,
      };
      console.log("Sending form with the following data", body);

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(body).toString(),
      })
        .then((result) => {
          console.log(result);
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
</style>
