<template>
  <div id="main">
    <section id="one">
      <div class="inner pa">
        <header class="major">
          <h1>Band</h1>
        </header>
        <p class="justify-on-desktop">
          Als unsere Band im Jahr 2017 gegründet wurde, spielten wir Songs, die wir aus dem Radio und aus den Clubs
          kannten – mit einer handvoll Leuten in einem kleinen Proberaum in Karlsruhe-Rheinhafen. Aber wir waren uns
          schnell einig, wohin unsere musikalische Reise gehen sollte. Denn wir merkten, dass viele unserer Freunde in
          <b>Clubs</b> gingen und dort tanzten und zu <b>DJ-Musik</b> feierten. Aber nur wenige feierten noch
          handgemachte Livemusik von Bands. Das wollten wir ändern.
        </p>
        <blockquote>
          Unsere Vision: Wir wollen wieder junge Menschen für Livemusik begeistern. Deshalb spielen wir Clubmusik live.
        </blockquote>
        <p class="justify-on-desktop">
          Und das zieht an. 2018 feierten wir Bühnenpremiere und sind seit dem
          <b>überall in Baden-Württemberg</b> unterwegs. Wir haben sowohl direkt in Karlsruhe, als auch überregional wie
          z.B. in Pforzheim, Bad Wildbad, Rastatt, Freudenstadt und sogar in Rheinfelden
          <b>an der Schweizer Grenze</b> gespielt. Egal ob öffentliche Veranstaltung oder private Feier, wir haben immer
          Bock mit euch Party zu machen.
        </p>
        <blockquote>
          Es erfüllt uns einfach mit Freude, wenn alle T-Shirts verschwitzt und alle Frisuren zerstört sind.
        </blockquote>
        <p class="justify-on-desktop">
          Es zeigt sich auch, dass wir mit unserem ausgefallenen Musikstil <b>sehr talentierte Musiker</b> anziehen:
          Einige unserer Musiker kommen ursprünglich aus <b>Heidelberg, Trier, Köln, München oder Oldenburg</b>.
          Mittlerweile haben wir für einige Instrumente Ersatzleute in petto, die ggf. bei Krankheit oder
          Terminkollision einspringen können.
        </p>
        <p>
          Spielst auch du ein Instrument und hast Interesse bei uns einzusteigen? Dann schreibe uns gerne eine E-Mail an
          <a href="mailto:contact@clublive.band">contact@clublive.band</a>.
        </p>
      </div>
    </section>

    <section>
      <div class="inner pa">
        <h2>Besetzung</h2>
        <p class="justify-on-desktop">
          Club Live spielt mit einer siebenköpfigen Live-Besetzung. Schlagzeug, E-Bass, E-Gitarre, Keyboards, Saxophon
          und Trompete. Immer dabei sind unsere Frontfrau Tiffany und unser Frontmann Jules, der auch die E-Gitarre
          spielt. Über die Jahre sind wir mit immer mehr Musikern zu einer großen Club Live Family herangewachsen. Hier
          stellen wir euch ein paar Mitglieder unserer Club Live Family vor.
        </p>
        <div class="grid">
          <Musician
            v-for="musician in musicians"
            :key="musician.name"
            :image-src="musician.imageSrc"
            :name="musician.name"
            :instrument="musician.instrument"
          />
        </div>
      </div>
    </section>

    <Tiles :articles="articles" />
  </div>
</template>

<script setup lang="ts">
import Tiles from '@/views/home/Tiles.vue'
import Musician from '@/views/band/Musician.vue'
import { tiles, seo } from '@/utils'
import { useHead, useSeoMeta } from '@unhead/vue'

const articles = [tiles['music'], tiles['downloads']]
const musicians = [
  {
    imageSrc: 'images/band/tiffany/tiffany.webp',
    name: 'Tiffany',
    instrument: 'Gesang',
  },
  {
    imageSrc: 'images/band/jules/jules.webp',
    name: 'Jules',
    instrument: 'Gesang / Gitarre',
  },
  {
    imageSrc: 'images/band/felix/felix.webp',
    name: 'Felix',
    instrument: 'Keyboard',
  },
  {
    imageSrc: 'images/band/lasse/lasse.webp',
    name: 'Lasse',
    instrument: 'Saxophon',
  },
  {
    imageSrc: 'images/band/moritz/moritz.webp',
    name: 'Moritz',
    instrument: 'Saxophon',
  },
  {
    imageSrc: 'images/band/boerni/boerni.webp',
    name: 'Börni',
    instrument: 'Trompete',
  },
  {
    imageSrc: 'images/band/tobi/tobi.webp',
    name: 'Tobi',
    instrument: 'Bass',
  },
  {
    imageSrc: 'images/band/heike/heike.webp',
    name: 'Heike',
    instrument: 'Bass',
  },
  {
    imageSrc: 'images/band/chris/chris.webp',
    name: 'Chris',
    instrument: 'Drums / DJ',
  },
  {
    imageSrc: 'images/band/andre/andre.webp',
    name: 'André',
    instrument: 'Drums',
  },
]

useSeoMeta({
  ogTitle: seo.band.title,
  ogDescription: seo.band.description,
  description: seo.band.description,
})
useHead({
  title: seo.band.title,
})
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5em;
}

@media screen and (min-width: 460px) {
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
</style>
