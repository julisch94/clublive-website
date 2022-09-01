<template>
  <div>
    <h2>
      <span>{{ prettyDate }}&nbsp;//&nbsp;{{ show.place }}</span>
    </h2>
    <p v-if='show.description'>{{ show.description }}</p>
    <p v-if='show.website'>
      <span class='icon fa-globe'>&nbsp;</span>
      <a :href='show.website' target='_blank'>{{ show.website }}</a>
    </p>
    <p v-if='show.mapsLink'>
      <span class='icon fa-map-marker'>&nbsp;</span>
      <a :href='show.mapsLink' target='_blank'>Routenplaner</a>
    </p>
    <hr>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { ShowModel } from '@/model/show.model'
import dayjs from '../plugins/dayjs'

export default defineComponent({
  name: 'Show',
  props: {
    show: {
      type: Object as () => ShowModel,
      required: true,
    },
  },
  computed: {
    prettyDate(): string {
      return dayjs(this.show.date).format('dd DD.MM.YYYY')
    },
  },
})

</script>
