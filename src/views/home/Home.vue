<template>
  <div>
    <Banner />

    <div id="main" ref="main">
      <section id="start" class="scroll-target">
        <div class="inner pa">
          <div class="-2u 8u 12u$(small)">
            <h2>Wir spielen Clubmusik live!</h2>

            <VideoComponent />

            <p class="info-text">
              Wer sich fragt, ob moderne, hoch-produzierte Musik überhaupt noch live gespielt werden kann, der kommt bei
              ClubLive ganz auf seine Kosten. Avicii, Felix Jaehn, Calvin Harris, Dua Lipa uvm. werden handgemacht
              interpretiert. Dabei zeigt ClubLive, dass nicht nur DJs mit aktuellen Hits für ordentlich Party sorgen
              können. Vom Club bis zur Open Air Show geht bei ClubLive garantiert keiner ohne verschwitztes Shirt und
              zerstörte Frisur nach Hause.
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
      </section>

      <Tiles :articles="articles" />

      <section id="social">
        <div class="inner pa">
          <section>
            <div id="wall"></div>
          </section>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Banner from '@/views/home/Banner.vue'
import Tiles from '@/views/home/Tiles.vue'
import tiles from '@/util/tiles'
import VideoComponent from '@/views/home/VideoComponent.vue'

const main = ref(null)
const emit = defineEmits(['is-main-in-view'])

const articles = [tiles['music'], tiles['band'], tiles['shows'], tiles['downloads']]

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

  // add Walls.io
  const walls = document.createElement('script')
  walls.async = true
  walls.setAttribute('src', 'https://walls.io/js/wallsio-widget-1.2.js')
  walls.setAttribute('data-wallurl', 'https://my.walls.io/x5e7f?nobackground=1&amp;show_header=0')
  walls.setAttribute('data-width', '100%')
  walls.setAttribute('data-autoheight', '1')
  walls.setAttribute('data-height', '800')
  walls.setAttribute('data-lazyload', '1')
  document.getElementById('wall')?.appendChild(walls)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
article.music {
  background-image: url('../../assets/images/music.jpg');
}

article.band {
  background-image: url('../../assets/images/band.jpg');
}

article.shows {
  background-image: url('../../assets/images/shows.jpg');
}

article.downloads {
  background-image: url('../../assets/images/downloads.jpg');
}

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
  margin-top: 3em;
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
</style>
