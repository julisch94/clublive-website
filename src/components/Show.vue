<template>
  <div future-date="20190426">
    <h2>
      <span>{{ this.show.date }}&nbsp;//&nbsp;{{ this.show.place }}</span>
    </h2>
    <p v-if="this.show.description">{{ this.show.description }}</p>
    <p v-if="this.show.website">
      <span class="icon fa-globe">&nbsp;</span>
      <a :href="this.show.website" target="_blank">{{ this.show.website }}</a>
    </p>
    <p v-if="this.show.mapsLink">
      <span class="icon fa-map-marker">&nbsp;</span>
      <a :href="this.show.mapsLink" target="_blank">Routenplaner</a>
    </p>
    <hr/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {ShowModel} from "@/model/show.model.ts";

export default defineComponent({
  name: "Show",
  props: {
    show: {
      type: () => ShowModel,
      required: true
    },
  },
});

</script>
