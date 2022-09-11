<template>
  <div id="main" class="alt">
    <section id="musik">
      <div class="inner pa">
        <header class="major">
          <h1>Musik</h1>
        </header>
        <p align="justify">
          Unsere Playlist besteht aus einer sorgfältigen Auswahl an aktuellen Chart- und Club-Hits. Es kommen zudem
          ständig neue Songs dazu. Unsere aktuelle Setlist enthält Songs von Alle Farben, Felix Jaehn, Jess Glynne,
          Avicii, LMFAO, Marteria, Flo Rida, DJ Snake, Stromae, Macklemore, Zara Larsson, Calvin Harris und vielen mehr.
        </p>
        <p>Hier sind Aufnahmen aus dem Proberaum:</p>
        <div style="margin-bottom: 2em">
          <DemoComponent />
        </div>
        <p>Weitere Aufnahmen und Videos gibt es auf unseren Social-Media-Kanälen:</p>
        <Social />
      </div>
    </section>

    <Tiles :articles="articles" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Social from '@/components/Social.vue'
import Tiles from '@/views/home/Tiles.vue'
import tiles from '@/util/tiles'
import DemoComponent from '@/views/music/DemoComponent.vue'

export default defineComponent({
  name: 'Music',
  components: { Social, Tiles, DemoComponent },
  data() {
    return {
      articles: [tiles['band'], tiles['shows']],
    }
  },
})
</script>
