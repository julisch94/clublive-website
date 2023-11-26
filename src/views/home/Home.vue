<template>
  <div>
    <Banner />

    <div id="main" ref="main">
      <section id="start" class="scroll-target">
        <div class="inner pa">
          <div class="-2u 8u 12u$(small)">
            <h2>Clubmusik live performt!</h2>

            <div class="grid-container">
              <div class="grid-item">
                <div class="video-container">
                  <video controls loop preload="none" poster="/images/video-posters/sommer-23.jpg">
                    <source src="https://clublive.blob.core.windows.net/movies/sommer-23.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div class="grid-item">
                <p class="info-text">
                  {{ pressText }}
                </p>
                <div class="cta">
                  <p>Das ist genau, was du für deine Veranstaltung suchst?</p>
                  <ul class="actions">
                    <li>
                      <a href="#contact" class="button next">Schreibe uns</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery">
        <ImageGallery />
      </section>

      <section>
        <div class="inner pa">
          <header class="major" style="margin-bottom: 4em">
            <h2>Anstehende Shows</h2>
          </header>
          <ShowList excerpt />
          <div>
            <ul class="actions">
              <li>
                <a href="/shows" class="button next">Mehr Infos</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Tiles :articles="articles" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useHead, useSeoMeta } from '@unhead/vue'

import Banner from '@/views/home/Banner.vue'
import Tiles from '@/views/home/Tiles.vue'
import { tiles, seo } from '@/utils'
import ShowList from '@/components/ShowList.vue'
import { pressText } from '@/data/pressText'
import ImageGallery from '@/components/ImageGallery.vue'

const main = ref(null)
const emit = defineEmits(['is-main-in-view'])

const articles = [tiles['music'], tiles['band']]

const startOfMain = computed(() => {
  if (main.value) {
    const element = (main.value as Element).getBoundingClientRect()
    return element.y
  }
  return 0
})

const handleScroll = (): void => {
  const isMainInView = window.scrollY > startOfMain.value
  emit('is-main-in-view', isMainInView)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

useSeoMeta({
  ogTitle: seo.home.title,
  ogDescription: seo.home.description,
  description: seo.home.description,
})
useHead({
  title: seo.home.title,
})
</script>

<style>
.info-text {
  text-align: justify;
}

@media screen and (max-width: 760px) {
  .info-text {
    text-align: inherit;
  }
}

@media screen and (max-width: 760px) {
  #start {
    padding-top: 44px !important;
  }
}

div.cta {
  margin-top: 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.cta > :first-child {
  margin-right: 1em;
}

.cta li {
  margin-right: 0;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 2em;
}

@media (max-width: 1200px) {
  .grid-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 600px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}

.video-container {
  position: relative;
  width: 100%;
  padding-top: 177.77%; /* 16/9 aspect ratio (16 divided by 9) */
  margin-bottom: 1em;
}

.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
