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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Banner from '@/views/home/Banner.vue'
import Tiles from '@/views/home/Tiles.vue'
import tiles from '@/util/tiles'
import VideoComponent from '@/views/home/VideoComponent.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Banner,
    Tiles,
    VideoComponent,
  },
  data() {
    return {
      articles: [tiles['music'], tiles['band'], tiles['shows'], tiles['downloads']],
    }
  },
  computed: {
    startOfMain() {
      const element = (this.$refs.main as Element).getBoundingClientRect()
      return element.y
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(): void {
      const isMainInView = window.scrollY > this.startOfMain
      this.$emit('is-main-in-view', isMainInView)
    },
  },
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