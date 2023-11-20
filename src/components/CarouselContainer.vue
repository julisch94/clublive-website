<template>
  <div class="carousel-container">
    <vueper-slides fade autoplay lazy fixed-height="100%" :arrows="false">
      <vueper-slide v-for="(image, index) in images" :key="index" :image="image" :duration="8000" />
    </vueper-slides>

    <div class="image-overlay"></div>
  </div>
</template>

<script setup lang="ts">
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { getImageURL } from '@/utils'

const images = ['crowd', 'felix', 'blaeser', 'tiffany', 'tobi'].map(image => getImageURL(image))
</script>

<style>
.carousel-container {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-attachment: fixed;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity as needed */
  z-index: 1;
}

button.vueperslides__bullet,
button.vueperslides__bullet:hover {
  border: none;
  box-shadow: none;
}

button.vueperslides__bullet--active {
  color: var(--color-accent-2);
}
</style>
