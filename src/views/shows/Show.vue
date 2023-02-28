<template>
  <div class="container">
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ShowModel } from '@/model/show.model'
import dayjs from '@/plugins/dayjs'

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
    hasFurtherInformation(): boolean {
      return !!this.show.description || !!this.show.website || !!this.show.mapsLink
    },
  },
})
</script>

<style scoped>
.title {
  font-size: 1.6em;
  line-height: 1.6em;
  margin-bottom: 0;
}

.container {
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
