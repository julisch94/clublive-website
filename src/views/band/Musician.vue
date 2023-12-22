<template>
  <div>
    <div class="container">
      <img :src="imageSrc" :alt="alt" />
    </div>
    <p class="subtitle">{{ name }} - {{ instrument }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Musician',
  props: {
    imageSrc: String,
    name: String,
    instrument: String,
  },
  computed: {
    alt(): string {
      return `Bild von ${this.name} - ${this.instrument}`
    },
  },
})
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
}

img {
  flex-grow: 1;
}

.subtitle {
  background-color: var(--color-accent-1);
  padding: 0.5em 1em;
  font-size: 0.8em;
}
</style>
