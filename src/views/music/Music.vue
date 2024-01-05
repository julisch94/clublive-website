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
          <div class="video-container">
            <video controls preload="none" poster="/images/video-posters/irish-pub.webp">
              <source src="https://clublive.blob.core.windows.net/movies/irish-pub.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
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
import { defineComponent } from 'vue'
import Social from '@/components/Social.vue'
import Tiles from '@/views/home/Tiles.vue'
import { seo, tiles } from '@/utils'
import DemoComponent from '@/views/music/DemoComponent.vue'
import { useHead, useSeoMeta } from '@unhead/vue'

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

.demo-grid > .video-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16/9 aspect ratio (9 divided by 16) */
}

.video-container > video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
}

@media screen and (max-width: 760px) {
  .demo-grid {
    grid-template-columns: 1fr;
  }
}
</style>
