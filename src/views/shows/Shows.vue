<template>
  <section id="banner"></section>

  <div id="main" class="alt">
    <section>
      <div class="inner pa">
        <header class="major">
          <h1>Shows</h1>
        </header>
        <p>
          Schaue hier regelmäßig vorbei um zu sehen, wann wir wieder in deine Nähe kommen. Komme zu unseren Konzerten
          und feiere mit uns zusammen Clubmusik! Wir spielen auf Festivals, Stadtfesten, Vereinsfesten, privaten Feiern
          und vielem mehr. Um keine Show von uns zu verpassen, folge uns bei Instagram:
          <a href="https://instagram.com/clublive.band">https://instagram.com/clublive.band</a>
        </p>
        <p>
          Du suchst noch nach einer Band für deine private Feier? Egal ob Hochzeit, Firmenfeier, Weihnachtsfeier,
          Geburtstagsfeier, Abschlussfeier, Gartenparty – Wenn du Livemusik für junge Menschen suchst, bist du bei uns
          genau richtig. Schreib uns eine unverbindliche Anfrage über unser <a href="#contact">Kontaktformular</a>.
        </p>
      </div>
    </section>

    <section>
      <div class="inner pa">
        <ShowList />

        <p>
          Um keinen Auftritt von uns zu verpassen, folge uns bei Instagram:
          <a href="https://instagram.com/clublive.band">https://instagram.com/clublive.band</a>
        </p>
      </div>
    </section>

    <section v-if="displayPastShows">
      <div class="inner pa">
        <h3>Vergangene Shows</h3>
        <ul>
          <PastShow v-for="show in sortedPastShows" :key="show.date" :show="show" />
          <li>...</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { pastShows } from '@/data/pastShows'
import { seo } from '@/utils'
import PastShow from '@/views/shows/PastShow.vue'
import { PastShowModel } from '@/model/pastShow.model'
import dayjs from 'dayjs'
import { useHead, useSeoMeta } from '@unhead/vue'
import ShowList from '@/components/ShowList.vue'

const displayPastShows = false // disabled for now because it only contains 4 venues

const sortedPastShows = computed(() => {
  const s = JSON.parse(JSON.stringify(pastShows))
  return s.sort(sortByDateDesc)
})

const sortByDateDesc = (showA: PastShowModel, showB: PastShowModel) => {
  return dayjs(showA.date).isBefore(showB.date) ? 1 : -1
}

useSeoMeta({
  ogTitle: seo.shows.title,
  ogDescription: seo.shows.description,
  description: seo.shows.description,
})
useHead({
  title: seo.shows.title,
})
</script>

<style scoped>
#banner {
  min-height: 300px;
  height: 30vw;
  background-image: url('../../assets/images/shows.jpg');
  background-size: cover;
  background-position: top;
}
</style>
