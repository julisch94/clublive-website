<template>
  <div v-if="hasFutureShows">
    <Show v-for="show of futureShows" :key="show.date" :show="show" />
  </div>

  <div v-else id="noShows">
    <p>In naher Zukunft sind keine öffentlichen Auftritte geplant.</p>
    <p>Wir werden aber schon bald neue Termine bekannt geben!</p>
  </div>

  <p>
    Um keinen Auftritt von uns zu verpassen, folge uns bei Instagram:
    <a href="https://instagram.com/clublive.band">https://instagram.com/clublive.band</a>
  </p>
</template>

<script setup lang="ts">
import Show from '@/views/shows/Show.vue'
import { computed, ComputedRef } from 'vue'
import { ShowModel } from '@/model/show.model'
import { shows } from '@/data/shows'
import dayjs from 'dayjs'

const futureShows: ComputedRef<ShowModel[]> = computed(() =>
  shows.filter(show => !dayjs().isAfter(show.date)).sort(sortByDateAsc)
)

const hasFutureShows = computed(() => futureShows.value.length > 0)

const sortByDateAsc = (showA: ShowModel, showB: ShowModel) => {
  return dayjs(showA.date).isAfter(showB.date) ? 1 : -1
}
</script>
