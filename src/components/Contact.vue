<template>
  <section id="contact">
    <div class="inner">
      <section>
        <h3>Kontaktformular / Ihre Anfrage</h3>
        <form>
          <div class="field half first">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" required>
          </div>
          <div class="field half">
            <label for="email">E-Mail</label>
            <input type="text" name="email" id="email" pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,}$" required>
          </div>
          <div class="field">
            <label for="message">Nachricht</label>
            <textarea name="message" id="message" rows="6"></textarea>
          </div>
          <div class="g-recaptcha" data-sitekey="6LcMQYQUAAAAAIGCx_-QUKMErQ_zxxm8uB3kAZic"></div>
          <ul class="actions">
            <li><input type="submit" value="Abschicken" class="special"></li>
            <li><input type="reset" value="Löschen"></li>
          </ul>
        </form>
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
            <span>76131 Karlsruhe<br>Baden-Württemberg<br>Deutschland</span>
          </div>
        </section>
      </section>
    </div>
  </section>
</template>

<script lang="ts">

import {Vue} from "vue-class-component";

export default class Contact extends Vue {

}

</script>
