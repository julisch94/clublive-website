<template>
  <section
    id="banner"
    class="major"
    :class="{ 'is-loading': isLoading }"
    :style="{ backgroundImage: 'url(' + image + ')' }"
  >
    <div class="inner">
      <header class="major">
        <h1>ClubLive</h1>
      </header>
      <div class="content">
        <p>Live Band aus Karlsruhe.</p>
        <ul class="actions">
          <li>
            <a href="#start" class="button next">Jetzt reinhören</a>
          </li>
        </ul>
        <Social />
      </div>
    </div>
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
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import image1 from '@/assets/images/banner/Club-Live-231.jpg'
import image2 from '@/assets/images/banner/Club-Live-65.jpg'
import image3 from '@/assets/images/banner/Club-Live-258.jpg'
import image4 from '@/assets/images/banner/Club-Live-81.jpg'
import image5 from '@/assets/images/banner/Club-Live-261.jpg'
import image6 from '@/assets/images/banner/Club-Live-194.jpg'

const imageUrls = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6
]

const isLoading = ref(true)
const activeImageIndex = ref(0)
const image = ref(imageUrls[activeImageIndex.value])

// const shouldUseCarousel = window.innerWidth > 768
const shouldUseCarousel = true
let intervalId

onMounted(() => {
  isLoading.value = false

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

#banner {
  -moz-align-items: center;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  padding: 6em 0 3em 0;
  background-attachment: fixed;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: 0 !important;
  cursor: default;
  height: 80vh;
  margin-bottom: -3.25em;
  max-height: 32em;
  min-height: 22em;
  position: relative;
  top: -3.25em;
}

#banner:after {
  -moz-transition: opacity 0.5s ease;
  -webkit-transition: opacity 0.5s ease;
  -ms-transition: opacity 0.5s ease;
  transition: opacity 0.5s ease;
  -moz-transition-delay: 0.35s;
  -webkit-transition-delay: 0.35s;
  -ms-transition-delay: 0.35s;
  transition-delay: 0.35s;
  -moz-pointer-events: none;
  -webkit-pointer-events: none;
  -ms-pointer-events: none;
  pointer-events: none;
  background-color: #242943;
  content: '';
  display: block;
  height: 100%;
  left: 0;
  opacity: 0.25;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
}

#banner h1 {
  font-size: 3.25em;
  text-transform: uppercase;
}

#banner .inner {
  -moz-transition:
    opacity 1.5s ease,
    -moz-transform 0.5s ease-out,
    -moz-filter 0.5s ease,
    -webkit-filter 0.5s ease;
  -webkit-transition:
    opacity 1.5s ease,
    -webkit-transform 0.5s ease-out,
    -webkit-filter 0.5s ease,
    -webkit-filter 0.5s ease;
  -ms-transition:
    opacity 1.5s ease,
    -ms-transform 0.5s ease-out,
    -ms-filter 0.5s ease,
    -webkit-filter 0.5s ease;
  transition:
    opacity 1.5s ease,
    transform 0.5s ease-out,
    filter 0.5s ease,
    -webkit-filter 0.5s ease;
  padding: 0 !important;
  position: relative;
  z-index: 2;
}

#banner .inner header {
  width: auto;
}

#banner .inner header > :first-child {
  width: auto;
}

#banner .inner header > :first-child:after {
  max-width: 100%;
}

#banner .inner .content {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-align-items: center;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  margin: 0 0 1em 0;
}

#banner .inner .content > * {
  margin-left: 1.5em;
  margin-bottom: 0;
}

#banner .inner .content > :first-child {
  margin-left: 0;
}

#banner .inner .content p {
  font-size: 0.7em;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
}

#banner.major {
  height: 100vh;
  min-height: 30em;
  max-height: 50em;
}

#banner.major:after {
  opacity: 0;
}

#banner.major.alt {
  opacity: 0.75;
}

#banner.style1:after {
  background-color: #6fc3df;
}

#banner.style2:after {
  background-color: #6fc3df;
}

#banner.style3:after {
  background-color: #ec8d81;
}

#banner.style4:after {
  background-color: #e7b788;
}

#banner.style5:after {
  background-color: #8ea9e8;
}

#banner.style6:after {
  background-color: #87c5a4;
}

#banner.is-loading:after {
  opacity: 1;
}

#banner.is-loading .inner {
  -moz-filter: blur(0.125em);
  -webkit-filter: blur(0.125em);
  -ms-filter: blur(0.125em);
  filter: blur(0.125em);
  -moz-transform: translateX(-0.5em);
  -webkit-transform: translateX(-0.5em);
  -ms-transform: translateX(-0.5em);
  transform: translateX(-0.5em);
  opacity: 0;
}

@media screen and (max-width: 840px) {
  #banner {
    padding: 5em 0 2em 0;
    margin-bottom: -2.75em;
    max-height: none;
    min-height: 0;
    top: -2.75em;
  }

  #banner h1 {
    font-size: 2em;
  }

  #banner .inner .content {
    display: block;
  }

  #banner .inner .content > * {
    margin-left: 0;
    margin-bottom: 1em;
  }

  #banner.major {
    min-height: 0;
    max-height: none;
    background-attachment: scroll;
  }
}

@media screen and (max-width: 760px) {
  #banner {
    padding: 6em 0 3em 0;
  }

  #banner .inner .content p br {
    display: none;
  }

  #banner.major {
    padding: 8em 0 5em 0;
  }
}

.actions {
  flex-grow: 1;
}
</style>
