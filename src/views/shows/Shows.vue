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
          Geburtstagsfeier, Abschlussfeier, Gartenparty – Wenn du Livemusik für eine mega Party suchst, bist du bei uns
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

    <section>
      <div class="inner pa">
        <h3>Referenzen</h3>
        <vue-word-cloud
          style="height: 50vh; width: 100%; max-width: 800px; margin: 0 auto"
          :words="[
            ['Karlsruhe', 8],
            ['Pforzheim', 6],
            ['Vaihingen a.d. Enz', 4],
            ['Bad Wildbad', 4],
            ['Freudenstadt', 4],
            ['Ettlingen', 4],
            ['Rheinfelden bei Lörrach', 3],
            ['Schluttenbach', 3],
            ['Durlach', 3],
            ['KIT Campus', 3],
            ['Dorfschänke, Karlsruhe', 2],
            ['The Irish Pub, Pforzheim', 2],
            ['Erasmus Sommerfest', 2],
          ]"
          color="White"
          font-family="Montserrat"
          :spacing="spacing"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { seo } from '@/utils'
import { useHead, useSeoMeta } from '@unhead/vue'
import ShowList from '@/components/ShowList.vue'
import VueWordCloud from 'vuewordcloud'

const spacing = ref(0.7)

// const moveWordcloudAround = () => {
//   if (spacing.value === 0.6) {
//     spacing.value = 0.7
//   } else if (spacing.value === 0.7) {
//     spacing.value = 0.8
//   } else if (spacing.value == 0.8) {
//     spacing.value = 0.6
//   }
// }

// onMounted(() => {
//   setInterval(() => {
//     moveWordcloudAround()
//   }, 4000)
// })

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
