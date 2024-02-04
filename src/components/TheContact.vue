<script setup lang="ts">
import { computed, ref } from 'vue'
import TheContactForm from './TheContactForm.vue'
import TheContactResult from './TheContactResult.vue'

const success = ref(false)
const failure = ref(false)

const shouldShowResultView = computed(() => success.value || failure.value)

const onSuccess = () => {
  success.value = true
  failure.value = false
}

const onFailure = () => {
  success.value = false
  failure.value = true
}

const resetResult = () => {
  success.value = false
  failure.value = false
}
</script>

<template>
  <section id="contact" class="scroll-target">
    <div class="inner pa">
      <section>
        <h2>Buchungsanfrage</h2>
        <p>
          Dieses Kontaktformular ist die beste Möglichkeit ein Angebot von uns anzufragen. Wir lesen deine Nachricht und
          melden uns schnellstmöglich bei dir zurück. Für einfache Kontaktanfragen kannst du uns auch eine E-Mail
          schreiben an
          <a href="mailto:contact@clublive.band">contact@clublive.band</a>.
        </p>
        <TheContactForm @success="onSuccess" @error="onFailure" @changed="resetResult" @submit="resetResult" />
        <TheContactResult v-if="shouldShowResultView" :success="success" :failure="failure" />
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

.actions {
  text-align: end;
}
</style>
