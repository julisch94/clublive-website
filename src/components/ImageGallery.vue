<template>
  <div class="container">
    <vueper-slides
      lazy
      class="no-shadow"
      :visible-slides="3"
      :arrows-outside="false"
      :scroll-multiple="3"
      fixed-height="100%"
      :slide-ratio="1 / 4"
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
    scrollMultiple: 1,
  },
}
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
</style>
