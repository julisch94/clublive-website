<template>
  <section id="banner" class="style2">
    <div class="inner pa">
      <header class="major">
        <h1>Shows</h1>
      </header>
    </div>
  </section>

  <div id="main" class="alt">
    <section id="one">
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
import { tiles } from '@/utils'
import Show from '@/views/shows/Show.vue'
import { ShowModel } from '@/model/show.model'
import PastShow from '@/views/shows/PastShow.vue'
import { PastShowModel } from '@/model/pastShow.model'
import Tiles from '@/views/home/Tiles.vue'
import dayjs from 'dayjs'

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
</script>

<style scoped>
#banner {
  background-image: url('../../assets/images/shows.jpg');
  background-size: cover;
  background-position: center;
}
</style>
