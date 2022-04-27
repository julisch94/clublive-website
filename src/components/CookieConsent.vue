<template>
  <div v-if="show" class="cookie-consent">
    <p>
      Wir verwenden Cookies, um Inhalte und Anzeigen zu personalisieren,
      Funktionen für soziale Medien anbieten zu können und die Zugriffe auf
      unsere Website zu analysieren.
    </p>
    <button @click="hide()">Okay</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CookieConsent",
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.show = !this.$cookies.get("cookie-consent");
  },
  methods: {
    hide(): void {
      this.$cookies.set("cookie-consent", 1);
      this.show = false;
    },
  },
});
</script>

<style scoped>
div.cookie-consent {
  position: sticky;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  gap: 1em;
  padding: 1em;
  border-top: solid 1px rgba(212, 212, 255, 0.1);
  background-color: #2e3450;
  transform: translateY(100px);
  animation: moveup 0.2s 1.5s ease-out forwards;
}

@keyframes moveup {
  from {
    transform: translateY(100px);
  }
  to {
    transform: translateY(0);
  }
}

div.cookie-consent > * {
  margin: 0;
}
</style>
