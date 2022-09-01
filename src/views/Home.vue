<template>
  <div>
    <Banner />

    <div ref='main' id='main'>
      <section id='start' class='scroll-target'>
        <div class='inner pa'>
          <div class='-2u 8u 12u$(small)'>
            <h2>Wir spielen Clubmusik live!</h2>
            <p class='info-text'>
              Wer sich fragt, ob die heutige Radiomusik überhaupt noch live
              gespielt werden kann, der kommt bei ClubLive ganz auf seine
              Kosten. Alle Farben, Clean Bandit, Martin Solveig, Felix Jaehn
              uvm. werden handgemacht interpretiert. Dabei zeigt ClubLive, dass
              nicht nur DJs mit aktuellen Hits für ordentlich Party sorgen
              können. Vom Club bis zur Open Air Show geht bei ClubLive
              garantiert keiner ohne verschwitztes Shirt und zerstörte Frisur
              nach Hause.
            </p>
            <div class='cta'>
              <p>Das ist genau, was du für deine Veranstaltung suchst?</p>
              <ul class='actions'>
                <li>
                  <a href='#contact' class='button next'>Schreibe uns</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class='inner pa'>
          <div class='-2u 8u 12u$(small)'>
            <h2>Hörbeispiele</h2>
            <iframe
              width='100%'
              height='450'
              scrolling='no'
              frameborder='no'
              allow='autoplay'
              src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1430026750&color=%239bf1ff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
            ></iframe>
          </div>
        </div>
      </section>

      <Tiles :articles='articles' />
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import Banner from '@/components/Banner.vue'
import Tiles from '@/components/Tiles.vue'
import tiles from '@/util/tiles'

export default defineComponent({
  name: 'Home',
  components: {
    Banner,
    Tiles,
  },
  data() {
    return {
      articles: [
        tiles['music'],
        tiles['band'],
        tiles['shows'],
        tiles['downloads'],
      ],
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  computed: {
    startOfMain() {
      const element = (this.$refs.main as Element).getBoundingClientRect()
      return element.y
    },
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
  background-image: url("../assets/images/music.jpg");
}

article.band {
  background-image: url("../assets/images/band.jpg");
}

article.shows {
  background-image: url("../assets/images/shows.jpg");
}

article.downloads {
  background-image: url("../assets/images/downloads.jpg");
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
