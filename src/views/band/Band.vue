<template>
  <div id="main">
    <section id="one">
      <div class="inner pa">
        <header class="major">
          <h1>Band</h1>
        </header>
        <p>
          Als unsere Band im Jahr 2017 gegründet wurde, probten wir mit einer handvoll Leuten in einem kleinen Proberaum
          in Karlsruhe-Rheinhafen. Wir spielten Songs, die wir aus dem Radio kannten. Aber wir waren uns schnell einig
          wohin unsere musikalische Reise gehen sollte. Viele unserer Freunde feierten in <b>Clubs zu DJ-Musik</b>, aber
          wenige feierten noch handgemachte Livemusik so richtig. Das wollten wir ändern.
        </p>
        <blockquote>
          Unsere Vision: Wir wollen wieder junge Menschen für Livemusik begeistern. Deshalb spielen wir Clubmusik live.
        </blockquote>
        <p>
          Und das zieht an. 2018 feierten wir Bühnenpremiere und sind seit dem
          <b>überall in Baden-Württemberg</b> unterwegs. Wir haben sowohl in Karlsruhe selbst, als auch überregional wie
          z.B. in Pforzheim, Vaihingen a.d. Enz und sogar in Rheinfelden <b>an der Schweizer Grenze</b> gespielt. Egal
          ob öffentliche Veranstaltung oder private Feier, wir haben immer Bock Party zu machen.
        </p>
        <blockquote>
          Es erfüllt uns einfach mit Freude, wenn alle T-Shirts verschwitzt und alle Friseuren zerstört sind.
        </blockquote>
        <p>
          Es zeigt sich auch, dass wir mit unserem ausgefallenen Musikstil sehr talentierte Musiker anziehen: Einige
          unserer Musiker kommen ursprünglich aus <b>Heidelberg, Trier, Köln und Oldenburg</b>. Mittlerweile haben wir
          für einige Instrumente auch Ersatzleute in petto, die ggf. bei Krankheit oder Terminkollision einspringen
          können.
        </p>
        <p>
          Spielst auch du ein Instrument und hast Interesse bei uns einzusteigen? Dann schreib uns gerne eine E-Mail an
          <a href="mailto:contact@clublive.band">contact@clublive.band</a>.
        </p>
      </div>
    </section>

    <section>
      <div class="inner pa grid">
        <Musician
          v-for="musician in musicians"
          :key="musician.name"
          :image-src="musician.imageSrc"
          :name="musician.name"
          :instrument="musician.instrument"
        />
      </div>
    </section>

    <Tiles :articles="articles" />
  </div>
</template>

<script setup lang="ts">
import Tiles from '@/views/home/Tiles.vue'
import Musician from '@/views/band/Musician.vue'
import { tiles } from '@/util/tiles'
import { seo } from '@/util/seo'
import { useSeoMeta } from '@unhead/vue'

const articles = [tiles['music'], tiles['shows']]
const musicians = [
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
]

useSeoMeta({
  ogTitle: seo.band.title,
  ogDescription: seo.band.description,
  description: seo.band.description,
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
