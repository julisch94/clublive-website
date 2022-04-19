<template>
  <div>
    <Banner />

    <div ref="main" id="main">
      <section id="start">
        <div class="inner">
          <div class="-2u 8u 12u$(small)">
            <h3>Clubmusik live performt!</h3>
            <p class="info-text">
              Wer sich fragt, ob die heutige Radiomusik überhaupt noch live
              gespielt werden kann, der kommt bei ClubLive ganz auf seine
              Kosten. Alle Farben, Clean Bandit, Martin Solveig, Felix Jaehn
              uvm. werden handgemacht interpretiert. Dabei zeigt ClubLive, dass
              nicht nur DJs mit aktuellen Hits für ordentlich Party sorgen
              können. Vom Club bis zur Open Air Show geht bei ClubLive
              garantiert keiner ohne verschwitztes Shirt und zerstörte Frisur
              nach Hause.
            </p>
          </div>
        </div>
      </section>

      <Tiles :articles="articles" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Banner from "@/components/Banner.vue";
import Tiles from "@/components/Tiles.vue";
import tiles from "@/util/tiles";

export default defineComponent({
  name: "Home",
  components: {
    Banner,
    Tiles,
  },
  data() {
    return {
      articles: [
        tiles["music"],
        tiles["band"],
        tiles["shows"],
        tiles["downloads"],
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    startOfMain() {
      const element = (this.$refs.main as Element).getBoundingClientRect();
      return element.y;
    },
  },
  methods: {
    handleScroll(): void {
      const isMainInView = window.scrollY > this.startOfMain;
      this.$emit("is-main-in-view", isMainInView);
    },
  },
});
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

#start {
  padding-top: 66px !important;
}

@media screen and (max-width: 760px) {
  #start {
    padding-top: 44px !important;
  }
}
</style>
