<template>
  <div>
    <Banner />

    <div ref="main" id="main">
      <section id="start">
        <div class="inner">
          <div class="-2u 8u 12u$(small)">
            <h3>Clubmusik live performt!</h3>
            <p style="text-align: justify">
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

      <section class="tiles">
        <article v-for="item in articles" :key="item.name" :class="item.class">
          <header class="major">
            <h2>
              <a :href="item.route" class="link">{{ item.name }}</a>
            </h2>
          </header>
          <a :href="item.route" class="link primary"></a>
        </article>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Banner from "@/components/Banner.vue";

export default defineComponent({
  name: "Home",
  components: {
    Banner,
  },
  data() {
    return {
      articles: [
        {
          name: "Musik",
          route: "/music",
          class: "music",
        },
        {
          name: "Band",
          route: "/band",
          class: "band",
        },
        {
          name: "Shows",
          route: "/shows",
          class: "shows",
        },
        {
          name: "Downloads",
          route: "/downloads",
          class: "downloads",
        },
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

#start {
  padding-top: 66px !important;
}

@media screen and (max-width: 760px) {
  #start {
    padding-top: 44px !important;
  }
}
</style>
