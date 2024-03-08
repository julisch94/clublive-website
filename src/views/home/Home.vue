<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useHead, useSeoMeta } from '@unhead/vue'

import Banner from '@/views/home/Banner.vue'
import { seo } from '@/utils'
import ShowList from '@/components/ShowList.vue'
import ImageGallery from '@/components/ImageGallery.vue'
import VideoComponent from '@/components/VideoComponent.vue'

const main = ref(null)
const emit = defineEmits(['is-main-in-view'])

const allArtistsText = computed(() => {
  const artists = [
    'Avicii',
    'Cardi B',
    'Peter Fox',
    'Flo Rida',
    'Ski Aggu',
    'Apache 207',
    'Taio Cruz',
    'Macklemore',
    'Rihanna',
    'Marteria',
    'Deichkind',
    'Die Atzen',
    'Nina Chuba',
    'LMFAO',
    'Stromae',
    'Fergie',
    'Felix Jaehn',
    'Calvin Harris',
    'HBz mit Kulthits wie Freed from Desire',
    'Destination Calabria',
    'Pepas',
  ]
  const result = `${artists.join(', ')} uvm.`
  return result
})

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

<template>
  <div>
    <Banner />

    <div id="main" ref="main">
      <section id="start" class="scroll-target">
        <div class="inner pa">
          <div class="-2u 8u 12u$(small)">
            <div>
              <h2>Wir spielen Clubmusik live!</h2>
              <p>
                Club Live ist deine Live-Band für mitreißende Clubmusik, die von Avicii bis zu den neuesten Hits von
                Apache 207 und Ski Aggu reicht – wir bringen die energiegeladene Atmosphäre des Clubs direkt auf die
                Bühne und garantieren unvergessliche Partynächte.
              </p>
            </div>
            <div class="grid-container" style="margin-top: 4em">
              <div class="grid-item">
                <VideoComponent
                  src="https://clublive.blob.core.windows.net/movies/sommer-23.mp4"
                  poster="/images/video-posters/sommer-23.webp"
                />
              </div>
              <div class="grid-item">
                <p>
                  {{ allArtistsText }}
                </p>
                <div class="cta">
                  <p>Genau das, was du für dein Event brauchst!</p>
                  <ul class="actions">
                    <li>
                      <a href="#contact" class="button next special">Schreibe uns</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery">
        <ImageGallery :images="['tiffany-erasmus', 'crowd-red', 'felix', 'blaeser']" />
      </section>

      <section>
        <div class="inner pa">
          <div class="-2u 8u 12u$(small)">
            <header class="major" style="margin-bottom: 4em">
              <h2>Anstehende Shows</h2>
            </header>
            <ShowList excerpt />
            <div style="margin-top: 2em; margin-bottom: 2em">
              <ul class="actions">
                <li>
                  <a href="/shows" class="button next special">Mehr Shows</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery">
        <ImageGallery :images="['jules', 'tobi', 'andre-side', 'green']" />
      </section>
    </div>
  </div>
</template>

<style scoped>
.motto {
  background: linear-gradient(to top right, var(--color-accent-1), var(--color-accent-2));
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
</style>
