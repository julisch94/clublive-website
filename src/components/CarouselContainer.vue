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

import image1 from '@/assets/images/banner/Club-Live-231.jpg'
import image2 from '@/assets/images/banner/Club-Live-65.jpg'
import image3 from '@/assets/images/banner/Club-Live-258.jpg'
import image4 from '@/assets/images/banner/Club-Live-81.jpg'
import image5 from '@/assets/images/banner/Club-Live-261.jpg'
import image6 from '@/assets/images/banner/Club-Live-194.jpg'

const slides = [
  {
    image: image1,
  },
  {
    image: image2,
  },
  {
    image: image3,
  },
  {
    image: image4,
  },
  {
    image: image5,
  },
  {
    image: image6,
  },
]
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
