<template>
  <div id='main'>
    <section id='one'>
      <div class='inner pa'>
        <header class='major'>
          <h1>Band</h1>
        </header>
        <p>
          Wer sich fragt, ob die heutige Radiomusik überhaupt noch live gespielt werden kann, der kommt bei ClubLive
          ganz auf seine Kosten. Von Parov Stelar über Clean Bandit, bis hin zu Robin Schulz und Felix Jaehn werden alle
          Songs handgemacht interpretiert. Dabei zeigt ClubLive, dass nicht nur DJs mit aktuellen Hits für ordentlich
          Party sorgen können. 2018 feierte ClubLive Bühnenpremiere und ist seit dem im Großraum Karlsruhe unterwegs.
          Vom Club bis zur Open Air Show geht bei ClubLive garantiert keiner ohne verschwitztes Shirt und zerstörte
          Frisur nach Hause.
        </p>
      </div>
    </section>

    <section>
      <div class='inner pa grid'>
        <Musician
          v-for='musician in musicians'
          :key='musician.name'
          :image-src='musician.imageSrc'
          :name='musician.name'
          :instrument='musician.instrument'
        />
      </div>
    </section>

    <Tiles :articles='articles' />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import Tiles from '@/components/Tiles.vue'
import tiles from '@/util/tiles'
import Musician from '@/components/Musician.vue'

export default defineComponent({
  name: 'Band',
  components: { Tiles, Musician },
  data() {
    return {
      articles: [tiles['music'], tiles['shows']],
      musicians: [
        {
          imageSrc: 'images/band/tiffany/tiffany.jpg',
          name: 'Tiffany',
          instrument: 'Gesang',
        },
        {
          imageSrc: 'images/band/jules/jules.jpg',
          name: 'Jules',
          instrument: 'Gesang / Gitarre',
        },
        {
          imageSrc: 'images/band/felix/felix.jpg',
          name: 'Felix',
          instrument: 'Keyboard',
        },
        {
          imageSrc: 'images/band/lasse/lasse.jpg',
          name: 'Lasse',
          instrument: 'Saxophon',
        },
        {
          imageSrc: 'images/band/moritz/moritz.jpg',
          name: 'Moritz',
          instrument: 'Saxophon',
        },
        {
          imageSrc: 'images/band/boerni/boerni.jpg',
          name: 'Börni',
          instrument: 'Trompete',
        },
        {
          imageSrc: 'images/band/bass/tobi.jpg',
          name: 'Tobi',
          instrument: 'Bass',
        },
        {
          imageSrc: 'images/band/chris/chris.jpg',
          name: 'Chris',
          instrument: 'Drums / DJ',
        },
      ],
    }
  },
})
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5em;
}

@media screen and (min-width: 640px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-width: 960px) {
  .grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media screen and (min-width: 1280px) {
  .grid {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

.grid > * {
  max-width: 600px;
}
</style>
