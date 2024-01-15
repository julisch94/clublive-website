<template>
  <div id="main" class="alt">
    <section id="musik">
      <div class="inner pa">
        <header class="major">
          <h1>Musik</h1>
        </header>
        <p class="justify-on-desktop">
          Unsere Playlist besteht aus einer sorgfältigen Auswahl an aktuellen Chart- und Club-Hits. Es kommen zudem
          ständig neue Songs dazu. Unsere aktuelle Setlist enthält Songs von Alle Farben, Felix Jaehn, Jess Glynne,
          Avicii, LMFAO, Marteria, Flo Rida, DJ Snake, Stromae, Macklemore, Zara Larsson, Calvin Harris und vielen mehr.
        </p>
        <p>Hier kommen bald noch mehr Aufnahmen!</p>
        <div class="demo-grid">
          <VideoComponent
            src="https://clublive.blob.core.windows.net/movies/irish-pub.mp4"
            poster="/images/video-posters/irish-pub.webp"
            mode="landscape"
          />
          <DemoComponent />
        </div>
        <p>Weitere Aufnahmen und Videos gibt es auf unseren Social-Media-Kanälen:</p>
        <Social />
      </div>
    </section>

    <Tiles :articles="articles" />
  </div>
</template>

<script setup lang="ts">
import Social from '@/components/Social.vue'
import Tiles from '@/views/home/Tiles.vue'
import { seo, tiles } from '@/utils'
import DemoComponent from '@/views/music/DemoComponent.vue'
import { useHead, useSeoMeta } from '@unhead/vue'
import VideoComponent from '@/components/VideoComponent.vue'

const articles = [tiles['band'], tiles['downloads']]

useSeoMeta({
  ogTitle: seo.music.title,
})
useHead({
  title: seo.music.title,
})
</script>

<style scoped>
.demo-grid {
  margin-bottom: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
}

@media screen and (max-width: 760px) {
  .demo-grid {
    grid-template-columns: 1fr;
  }
}
</style>
