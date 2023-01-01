<template>
  <section id="banner"></section>

  <div id="main" class="alt">
    <section>
      <div class="inner pa">
        <header class="major">
          <h1>Shows</h1>
        </header>
        <p>
          Schaue hier regelmäßig vorbei um zu sehen, wann wir wieder in deine Nähe kommen. Komme zu unseren Konzerten
          und feiere mit uns zusammen Clubmusik! Wir spielen auf Festivals, Stadtfesten, Vereinsfesten, privaten Feiern
          und vielem mehr. Um keine Show von uns zu verpassen, folge uns bei Instagram:
          <a href="https://instagram.com/clublive.band">https://instagram.com/clublive.band</a>
        </p>
        <p>
          Du suchst noch nach einer Band für deine private Feier? Egal ob Hochzeit, Firmenfeier, Weihnachtsfeier,
          Geburtstagsfeier, Abschlussfeier, Gartenparty, ... völlig egal.
        </p>
        <blockquote>Wenn du Livemusik für junge Menschen suchst, bist du bei uns genau richtig.</blockquote>
        <p>
          Nutze für deine Anfrage am besten das <a href="#contact">Kontaktformular</a> unten oder schreibe uns eine
          E-Mail an <a href="mailto:contact@clublive.band?subject=Booking%20/%20Anfrage">contact@clublive.band</a>.
        </p>
      </div>
    </section>

    <section>
      <div class="inner pa">
        <div v-if="hasFutureShows">
          <Show v-for="show of futureShows" :key="show.date" :show="show" />
          <p>Weitere Auftritte werden regelmäßig bekannt gegeben.</p>
        </div>

        <div v-else>
          <h3 id="noShows">Bald werden wir wieder durchstarten! #corona</h3>
          <p>Sobald neue Auftritte anstehen, erscheinen sie hier.</p>
        </div>
      </div>
    </section>

    <section v-if="displayPastShows">
      <div class="inner pa">
        <h3>Vergangene Shows</h3>
        <ul>
          <PastShow v-for="show in sortedPastShows" :key="show.date" :show="show" />
          <li>...</li>
        </ul>
      </div>
    </section>

    <Tiles :articles="articles" />
  </div>
</template>

<script setup lang="ts">
import { computed, ComputedRef } from 'vue'
import { shows } from '@/data/shows'
import { pastShows } from '@/data/pastShows'
import { seo, tiles } from '@/utils'
import Show from '@/views/shows/Show.vue'
import { ShowModel } from '@/model/show.model'
import PastShow from '@/views/shows/PastShow.vue'
import { PastShowModel } from '@/model/pastShow.model'
import Tiles from '@/views/home/Tiles.vue'
import dayjs from 'dayjs'
import { useSeoMeta } from '@unhead/vue'

const displayPastShows = false // disabled for now because it only contains 4 venues
const articles = [tiles['music'], tiles['band']]

const futureShows: ComputedRef<ShowModel[]> = computed(() =>
  shows.filter(show => !dayjs().isAfter(show.date)).sort(sortByDateAsc)
)
const hasFutureShows = computed(() => futureShows.value.length > 0)
const sortedPastShows = computed(() => {
  const s = JSON.parse(JSON.stringify(pastShows))
  return s.sort(sortByDateDesc)
})

const sortByDateAsc = (showA: ShowModel, showB: ShowModel) => {
  return dayjs(showA.date).isAfter(showB.date) ? 1 : -1
}
const sortByDateDesc = (showA: PastShowModel, showB: PastShowModel) => {
  return dayjs(showA.date).isBefore(showB.date) ? 1 : -1
}

useSeoMeta({
  ogTitle: seo.shows.title,
  ogDescription: seo.shows.description,
  description: seo.shows.description,
})
</script>

<style scoped>
#banner {
  min-height: 300px;
  height: 30vw;
  background-image: url('../../assets/images/shows.jpg');
  background-size: cover;
  background-position: center;
}

.header {
  width: max-content;
  margin-bottom: 4em;
}

h1.underlined {
  width: calc(100% + 0.5em);
}

h1.underlined:after {
  content: '';
  background-color: #fff;
  display: block;
  height: 2px;
  margin: 0.325em 0 0.5em 0;
  width: 100%;
}
</style>
