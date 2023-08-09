<template>
  <div class="carousel-container">
    <vueper-slides fade autoplay fixed-height="100%" :arrows="false">
      <vueper-slide v-for="(slide, index) in slides" :key="index" :image="slide.image" :duration="8000" />
    </vueper-slides>

    <div class="image-overlay"></div>
  </div>
</template>

<script setup lang="ts">
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { useIsMobile } from '@/utils'

const { isMobile } = useIsMobile()

const imageFolder = isMobile ? '/images/banner/sm' : '/images/banner'

const slides = ['crowd.jpg', 'felix.jpg', 'blaeser.jpg', 'tiffany.jpg', 'tobi.jpg'].map(image => ({
  image: new URL(`${imageFolder}/${image}`, import.meta.url).href,
}))
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

button.vueperslides__bullet {
  border: none;
  box-shadow: none;
}

button.vueperslides__bullet,
button.vueperslides__bullet:hover {
  border: none;
  box-shadow: none;
}

button.vueperslides__bullet--active {
  color: #9bf1ff;
}
</style>
