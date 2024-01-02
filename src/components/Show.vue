<script setup lang="ts">
import { computed } from 'vue'
import { ShowModel } from '@/model/show.model'
import dayjs from '@/plugins/dayjs'

const props = defineProps({
  show: {
    type: Object as () => ShowModel,
    required: true,
  },
  short: {
    type: Boolean,
    default: false,
  },
})

const prettyDate = computed(() => {
  return dayjs(props.show.date).format('dd DD.MM.YYYY')
})

const displayDetails = computed(() => {
  return !props.short && hasFurtherInformation.value
})

const hasFurtherInformation = computed(() => {
  return !!props.show.description || !!props.show.website || !!props.show.mapsLink
})
</script>

<template>
  <article class="show" data-testid="show">
    <p class="title m-0">{{ prettyDate }}&nbsp;//&nbsp;{{ show.place }}</p>
    <p v-if="displayDetails" class="subtitle m-0">
      <span class="icon fa-info-circle" style="justify-self: center">&nbsp;</span>
      <span>{{ show.description }}</span>
      <span v-if="show.mapsLink">,&nbsp;<a :href="show.mapsLink">Google Maps Link</a> </span>
      <span v-if="show.website">
        ,&nbsp;Website: <a :href="show.website">{{ show.website }}</a>
      </span>
    </p>
  </article>
</template>

<style scoped>
.m-0 {
  margin: 0;
}

.title {
  line-height: 1.2em;
}

.subtitle {
  margin-top: 0.2em;
  font-size: 0.75em;
}
</style>
