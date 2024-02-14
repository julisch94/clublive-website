<script setup lang="ts">
import Show from '@/components/Show.vue'
import { computed, ComputedRef } from 'vue'
import { ShowModel } from '@/model/show.model'
import { shows } from '@/data/shows'
import dayjs from 'dayjs'

const props = defineProps({
  excerpt: { type: Boolean, default: false },
})

const numberOfShowsWhenExcerpt = 5

const futureShows: ComputedRef<ShowModel[]> = computed(() => {
  return shows.filter(show => !dayjs().isAfter(show.date, 'day')).sort(sortByDateAsc)
})

const visibleShows = computed(() => {
  if (props.excerpt) {
    return futureShows.value.slice(0, numberOfShowsWhenExcerpt)
  }
  return futureShows.value
})

const hasVisibleShows = computed(() => visibleShows.value.length > 0)

const sortByDateAsc = (showA: ShowModel, showB: ShowModel) => {
  return dayjs(showA.date).isAfter(showB.date) ? 1 : -1
}
</script>

<template>
  <div v-if="hasVisibleShows" class="show-list">
    <Show v-for="show of visibleShows" :key="show.date" :show="show" :short="excerpt" />
  </div>

  <div v-else id="noShows">
    <p>Wow! Wie krass waren bitte die vergangenen Shows?!</p>
    <p>Und bald schon werden wir hier wieder neue Termine bekannt geben können. Es werden immer mehr!</p>
  </div>
</template>

<style scoped>
.show-list {
  --gap: 1em;
  display: flex;
  flex-direction: column;
  padding-bottom: var(--gap);
}

.show-list > * {
  padding-bottom: var(--gap);
  padding-top: var(--gap);
}

.show-list > *:not(:last-child) {
  border-bottom: 1px solid white;
}
</style>
