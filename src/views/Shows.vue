<template>
  <section class="style2" id="banner">
    <div class="inner">
      <header class="major">
        <h1>Shows</h1>
      </header>
    </div>
  </section>

  <div class="alt" id="main">
    <section id="one">
      <div class="inner">

        <div v-if="hasFutureShows">
          <Show v-for="show of futureShows" :key="show.date" :show="show"/>
          <hr/>
          <p>Weitere Auftritte werden regelmäßig bekannt gegeben.</p>
        </div>

        <div v-else>
          <h3 id="noShows">Bald werden wir wieder durchstarten! #corona</h3>
          <p>Diese Seite wird regelmäßig von uns aktualisiert.</p>
        </div>
      </div>

    </section>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Show from "../components/Show.vue";
import {ShowModel} from "@/model/show.model";
import dayjs from "dayjs";

export default defineComponent({
  name: "Shows",
  components: {
    Show
  },
  data() {
    return {
      shows: [
        {
          date: "2020/07/18",
          place: "Sommerfest Erasmus Karlsruhe",
          description: "Eintritt frei. Open Air im Forum des KIT Campus.",
          website: "https://karlsruhe.esn-germany.de/",
          mapsLink: "https://goo.gl/maps/GbzK9vumR5MufVzy7"
        },
      ]
    }
  },
  computed: {
    futureShows(): ShowModel[] {
      return this.shows.filter(show => !dayjs().isAfter(show.date));
    },
    hasFutureShows(): boolean {
      return this.futureShows.length > 0;
    }
  }
})

</script>

<style scoped>
#banner {
  background-image: url("../assets/images/shows.jpg");
}
</style>
