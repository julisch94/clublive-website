<template>
  <div class="container">
    <div class="grid">
      <div class="left">
        <p class="title">
          <span>{{ formattedDate }}</span>
          <span class="separator">&nbsp;//&nbsp;</span>
          <span class="place">{{ formattedPlace }}</span>
        </p>
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
      </div>
      <div v-if="hasImage" class="right">
        <img :src="show.imageSrc" :alt="show.place" />
      </div>
    </div>
    <hr />
  </div>
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

const formattedDate = computed(() => dayjs(props.show.date).format('dd DD.MM.YYYY'))
const formattedPlace = computed(() => {
  // we protect white spaces in parts like:
  // Private~Veranstaltung, Bad~Wildbad
  return props.show?.place
    .split(', ')
    .map(part => part.replaceAll(' ', '\u00a0'))
    .join(', ')
})
const hasFurtherInformation = computed(() => !!props.show.description || !!props.show.website || !!props.show.mapsLink)
const hasImage = computed(() => !!props.show.imageSrc)
</script>

<style scoped>
.title {
  font-size: 1.2em;
  line-height: 1.2em;
  margin-bottom: 0;
}

@media screen and (max-width: 760px) {
  .title .place {
    display: block;
  }

  .title .separator {
    display: none;
  }
}

.container {
  margin-bottom: 1.5em;
  margin-top: 1.5em;
}

.grid {
  display: grid;
  grid-template-columns: 1fr auto;
}

@media screen and (max-width: 760px) {
  .grid .right {
    width: 10vw;
  }
}

.info-container {
  padding-top: 1em;
  display: grid;
  grid-template-columns: 2em auto;
  row-gap: 1em;
}
</style>
