<template>
  <article class="show" data-testid="show">
    <p class="title">{{ prettyDate }}&nbsp;//&nbsp;{{ show.place }}</p>
    <div v-if="hasFurtherInformation" class="info-container">
      <span v-if="show.description" class="icon fa-info" style="justify-self: center">&nbsp;</span>
      <span v-if="show.description">{{ show.description }}</span>
      <span v-if="show.website" class="icon fa-globe" style="justify-self: center">&nbsp;</span>
      <span v-if="show.website">
        <a :href="show.website" target="_blank">{{ show.website }}</a>
      </span>
      <span v-if="show.mapsLink" class="icon fa-map-marker" style="justify-self: center">&nbsp;</span>
      <span v-if="show.mapsLink"><a :href="show.mapsLink" target="_blank">Google Maps Link</a></span>
    </div>
    <hr />
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ShowModel } from '@/model/show.model'
import dayjs from '@/plugins/dayjs'

const props = defineProps({
  show: {
    type: Object as () => ShowModel,
    required: true,
  },
})

const prettyDate = computed(() => {
  return dayjs(props.show.date).format('dd DD.MM.YYYY')
})

const hasFurtherInformation = computed(() => {
  return !!props.show.description || !!props.show.website || !!props.show.mapsLink
})
</script>

<style scoped>
.title {
  font-size: 1.6em;
  line-height: 1.2em;
  margin-bottom: 0;
}

.show {
  margin-bottom: 1.5em;
  margin-top: 1.5em;
}

.info-container {
  padding-top: 1em;
  display: grid;
  grid-template-columns: 2em auto;
  row-gap: 1em;
}
</style>
