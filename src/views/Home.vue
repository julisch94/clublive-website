<template>
  <div>
    <section id="banner" class="major" style="background-position: center 0px;">
      <div class="inner">
        <header class="major">
          <h1>This is ClubLive</h1>
        </header>
        <div class="content">
          <p>Live Band aus Karlsruhe.</p>
          <ul class="actions">
            <li>
              <a href="#start" class="button next">Let's go</a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <div id="main">
      <section>
        <div id="start" class="inner">
          <div class="-2u 8u 12u$(small)">
            <h3>Clubmusik live performt!</h3>
            <p style="text-align: justify">
              Wer sich fragt, ob die heutige Radiomusik überhaupt noch live gespielt werden kann,
              der kommt bei ClubLive ganz auf seine Kosten. Alle Farben, Clean Bandit, Martin Solveig,
              Felix Jaehn uvm. werden handgemacht interpretiert. Dabei zeigt ClubLive, dass nicht nur DJs
              mit aktuellen Hits für ordentlich Party sorgen können. Vom Club bis zur Open Air Show geht bei
              ClubLive garantiert keiner ohne verschwitztes Shirt und zerstörte Frisur nach Hause.
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
import {Vue} from 'vue-class-component';

export default class Home extends Vue {

  articles = [
    {
      name: "Musik",
      route: "/music",
      class: "music"
    },
    {
      name: "Band",
      route: "/band",
      class: "band"
    },
    {
      name: "Shows",
      route: "/shows",
      class: "shows"
    },
    {
      name: "Downloads",
      route: "/downloads",
      class: "downloads"
    }
  ]

}
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
</style>
