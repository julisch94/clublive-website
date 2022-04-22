<template>
  <section class="style2" id="banner">
    <div class="inner pa">
      <header class="major">
        <h1>Shows</h1>
      </header>
    </div>
  </section>

  <div class="alt" id="main">
    <section id="one">
      <div class="inner pa">
        <div v-if="hasFutureShows">
          <Show v-for="show of futureShows" :key="show.date" :show="show" />
          <hr />
          <p>Weitere Auftritte werden regelmäßig bekannt gegeben.</p>
        </div>

        <div v-else>
          <h3 id="noShows">Bald werden wir wieder durchstarten! #corona</h3>
          <p>Sobald neue Auftritte anstehen, erscheinen sie hier.</p>
        </div>
      </div>
    </section>

    <section>
      <div class="inner pa">
        <h3>Vergangene Shows</h3>
        <ul>
          <PastShow
            v-for="show in sortedPastShows"
            :key="show.date"
            :show="show"
          />
          <li>...</li>
        </ul>
      </div>
    </section>

    <Tiles :articles="articles" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import dayjs from "dayjs";

import Show from "@/components/Show.vue";
import { ShowModel } from "@/model/show.model";
import PastShow from "@/components/PastShow.vue";
import { PastShowModel } from "@/model/pastShow.model";
import Tiles from "@/components/Tiles.vue";
import tiles from "@/util/tiles";

export default defineComponent({
  name: "Shows",
  components: {
    Show,
    PastShow,
    Tiles,
  },
  data() {
    return {
      shows: [
        {
          date: "2020/07/18",
          place: "Sommerfest Erasmus Karlsruhe",
          description: "Eintritt frei. Open Air im Forum des KIT Campus.",
          website: "https://karlsruhe.esn-germany.de/",
          mapsLink: "https://goo.gl/maps/GbzK9vumR5MufVzy7",
        },
      ],
      pastShows: [
        {
          date: "2018/03/09",
          text: "Dorfschänke Karlsruhe",
        },
        {
          date: "2018/07/04",
          text: "Erasmus Sommerfest, KIT Campus, Karlsruhe",
        },
        {
          date: "2018/10/19",
          text: "Dorfschänke Karlsruhe",
        },
        {
          date: "2019/04/26",
          text: "Dorfschänke Karlsruhe",
        },
        {
          date: "2019/05/11",
          text: "Irish Pub Pforzheim",
        },
        {
          date: "2019/07/18",
          text: "Erasmus Sommerfest, KIT Campus, Karlsruhe",
        },
        {
          date: "2019/07/19",
          text: "Private Veranstaltung, Rheinfelden bei Lörrach",
        },
        {
          date: "2019/11/09",
          text: "Irish Pub Pforzheim",
        },
        {
          date: "2022/04/02",
          text: "Irish Pub Pforzheim",
        },
      ],
      articles: [tiles["music"], tiles["band"]],
    };
  },
  computed: {
    futureShows(): ShowModel[] {
      return this.shows.filter((show) => !dayjs().isAfter(show.date));
    },
    hasFutureShows(): boolean {
      return this.futureShows.length > 0;
    },
    sortedPastShows(): PastShowModel[] {
      const s = JSON.parse(JSON.stringify(this.pastShows));
      return s.sort((first: PastShowModel, second: PastShowModel) => {
        return dayjs(first.date).isBefore(dayjs(second.date)) ? 1 : -1;
      });
    },
  },
});
</script>

<style scoped>
#banner {
  background-image: url("../assets/images/shows.jpg");
  background-size: cover;
  background-position: center;
}
</style>
