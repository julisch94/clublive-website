<template>
  <div class="carousel-container" :style="{ backgroundImage: 'url(' + image + ')' }">
    <div class="image-overlay"></div>

    <div class="image-circle-row">
      <div
        v-for="(imageUrl, index) in imageUrls"
        :key="imageUrl"
        class="image-circle"
        :class="{ active: index === activeImageIndex }"
        @click="changeActiveImage(index)"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import image1 from '@/assets/images/banner/Club-Live-231.jpg'
import image2 from '@/assets/images/banner/Club-Live-65.jpg'
import image3 from '@/assets/images/banner/Club-Live-258.jpg'
import image4 from '@/assets/images/banner/Club-Live-81.jpg'
import image5 from '@/assets/images/banner/Club-Live-261.jpg'
import image6 from '@/assets/images/banner/Club-Live-194.jpg'

const imageUrls = [image1, image2, image3, image4, image5, image6]

const activeImageIndex = ref(0)
const image = ref(imageUrls[activeImageIndex.value])

const shouldUseCarousel = true
let intervalId

onMounted(() => {
  if (shouldUseCarousel) {
    startImageRotation()
  }
})

onUnmounted(() => {
  clearInterval(intervalId)
})

const updateBackground = () => {
  image.value = imageUrls[activeImageIndex.value]
}

const startImageRotation = () => {
  intervalId = setInterval(() => {
    activeImageIndex.value = (activeImageIndex.value + 1) % imageUrls.length
    updateBackground()
  }, 5000)
}

const changeActiveImage = index => {
  activeImageIndex.value = index
  updateBackground()
  clearInterval(intervalId)
  startImageRotation()
}
</script>

<style scoped>
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
}

.image-circle-row {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 1em;
  left: 0;
  right: 0;
}

@media screen and (max-width: 760px) {
  .image-circle-row {
    display: none;
  }
}

.image-circle {
  width: 10px;
  height: 10px;
  margin: 0 0.5rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
}

.image-circle.active {
  background-color: white;
}
</style>
