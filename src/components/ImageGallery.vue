<template>
  <div class="container">
    <vueper-slides
      lazy
      class="no-shadow"
      :visible-slides="4"
      slide-multiple
      :arrows-outside="false"
      fixed-height="100%"
      :dragging-distance="50"
      :breakpoints="breakpoints"
    >
      <vueper-slide v-for="(image, i) in images" :key="i" :image="image" />
    </vueper-slides>
  </div>
</template>

<script setup lang="ts">
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { getImageURL } from '@/utils'

const images = [
  'andre',
  'crowd',
  'tiffany-erasmus',
  'blaeser',
  'crowd-red',
  'jules',
  'felix',
  'tobi',
  'andre-side',
  'lasse',
  'green',
  'tobi-erasmus',
].map(image => getImageURL(image))

const breakpoints = {
  800: {
    visibleSlides: 1,
  },
  1000: {
    visibleSlides: 2,
  },
  1280: {
    visibleSlides: 3,
  }
}
</script>

<style>
.container {
  height: 80vh;
  max-height: 30vw;
  padding-bottom: 5em;
}

@media screen and (max-width: 1280px) {
  .container {
    height: 60vh;
    max-height: none;
  }
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
</style>
