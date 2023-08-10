<template>
  <div class="container">
    <vueper-slides
      class="no-shadow"
      :visible-slides="3"
      :arrows-outside="false"
      fixed-height="100%"
      :slide-ratio="1 / 4"
      :dragging-distance="200"
      :breakpoints="{ 800: { visibleSlides: 1, slideMultiple: 1 } }"
    >
      <vueper-slide v-for="(slide, i) in images" :key="i" :image="slide.image" />
    </vueper-slides>
  </div>
</template>

<script setup lang="ts">
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

const imageFolder = '/images/gallery'

const images = [
  'andre.jpg',
  'crowd.jpg',
  'tiffany-erasmus.jpg',
  'blaeser.jpg',
  'crowd-red.jpg',
  'jules.jpg',
  'felix.jpg',
  'tobi.jpg',
  'lasse.jpg',
  'green.jpg',
  'tobi-erasmus.jpg',
  'andre-side.jpg',
].map(image => ({
  image: new URL(`${imageFolder}/${image}`, import.meta.url).href,
}))
</script>

<style>
.container {
  height: 100vh;
}

button.vueperslides__bullet,
button.vueperslides__bullet:hover {
  border: none;
  box-shadow: none;
}

@media screen and (max-width: 760px) {
  button.vueperslides__bullet {
    display: none;
  }
}

button.vueperslides__arrow,
button.vueperslides__arrow:hover,
button.vueperslides__arrow:focus,
button.vueperslides__arrow:active {
  border: none;
  box-shadow: none;
  background-color: inherit;
}

.vueperslides__arrows {
  user-select: none;
}
</style>
