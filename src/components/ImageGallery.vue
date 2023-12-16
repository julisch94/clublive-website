<template>
  <div class="image-gallery-container">
    <vueper-slides
      lazy
      lazy-load-on-drag
      class="no-shadow"
      :visible-slides="4"
      :touchable="false"
      slide-multiple
      :arrows-outside="false"
      fixed-height="100%"
      :dragging-distance="50"
      :breakpoints="breakpoints"
    >
      <vueper-slide v-for="(image, i) in imageUrls" :key="i" :image="image" />
    </vueper-slides>
  </div>
</template>

<script setup lang="ts">
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { getImageURL } from '@/utils'
import { computed } from 'vue'

const props = defineProps<{
  images?: string[]
}>()

const imageUrls = computed(() => {
  return props.images?.map(image => getImageURL(image))
})

const breakpoints = {
  800: {
    visibleSlides: 1,
    touchable: true,
  },
  1000: {
    visibleSlides: 2,
  },
}
</script>

<style>
.image-gallery-container {
  height: 80vh;
  padding-bottom: 5em;
}

@media screen and (max-width: 800px) {
  .image-gallery-container {
    padding-bottom: 0;
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
