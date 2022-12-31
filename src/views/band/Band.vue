<template>
  <div id="main">
    <section id="one">
      <div class="inner pa">
        <header class="major">
          <h1>Band</h1>
        </header>
        <p>
          Als unsere Band im Jahr 2017 gegründet wurde, spielten wir Songs, die wir aus dem Radio und aus den Clubs
          kannten – mit einer handvoll Leuten in einem kleinen Proberaum in Karlsruhe-Rheinhafen. Aber wir waren uns
          schnell einig, wohin unsere musikalische Reise gehen sollte. Denn wir merkten, dass viele unserer Freunde in
          <b>Clubs</b> gingen und dort tanzten und zu <b>DJ-Musik</b> feierten. Aber nur wenige feierten noch
          handgemachte Livemusik von Bands. Das wollten wir ändern.
        </p>
        <blockquote>
          Unsere Vision: Wir wollen wieder junge Menschen für Livemusik begeistern. Deshalb spielen wir Clubmusik live.
        </blockquote>
        <p>
          Und das zieht an. 2018 feierten wir Bühnenpremiere und sind seit dem
          <b>überall in Baden-Württemberg</b> unterwegs. Wir haben sowohl direkt in Karlsruhe, als auch überregional wie
          z.B. in Pforzheim, Vaihingen a.d. Enz und sogar in Rheinfelden <b>an der Schweizer Grenze</b> gespielt. Egal
          ob öffentliche Veranstaltung oder private Feier, wir haben immer Bock mit euch Party zu machen.
        </p>
        <blockquote>
          Es erfüllt uns einfach mit Freude, wenn alle T-Shirts verschwitzt und alle Friseuren zerstört sind.
        </blockquote>
        <p>
          Es zeigt sich auch, dass wir mit unserem ausgefallenen Musikstil <b>sehr talentierte Musiker</b> anziehen:
          Einige unserer Musiker kommen ursprünglich aus <b>Heidelberg, Trier, Köln oder Oldenburg</b>. Mittlerweile
          haben wir für einige Instrumente Ersatzleute in petto, die ggf. bei Krankheit oder Terminkollision einspringen
          können.
        </p>
        <p>
          Spielst auch du ein Instrument und hast Interesse bei uns einzusteigen? Dann schreibe uns gerne eine E-Mail an
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
import { tiles, seo } from '@/utils'
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
