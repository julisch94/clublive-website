<template>
  <div class='container'>
    <img :src='getImageUrl(imageSrc)' :alt='alt' />
    <div class='overlay'>
      <h3>{{ name }}</h3>
      <p>{{ instrument }}</p>
    </div>
  </div>
</template>

<script lang='ts'>
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
    src(): string {
      // const url = "index.html"
      // console.log(url)
      // console.log(import.meta.env.BASE_URL)
      // const result = new URL('/en-US/docs', "https://developer.mozilla.org/fr-FR/toto")
      // console.log(result)
      // return result.href
      return ''
    },
  },
  methods: {
    getImageUrl(src: string) {
      const url = 'index.html'
      console.log(url)
      console.log(import.meta.env.BASE_URL)
      const result = new URL('assets/images/band/tiffany/tiffany.jpg', import.meta.env.BASE_URL)
      console.log(result)
      return result.href
    },
  },
})
</script>

<style scoped>
.container {
  position: relative;
}

.container img {
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #333856;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.overlay :first-child::after {
  content: '';
  background-color: #fff;
  display: block;
  height: 2px;
  margin: 0.325em 0 0.325em 0;
  width: 100%;
}

.overlay:hover {
  opacity: 0.8;
}
</style>
