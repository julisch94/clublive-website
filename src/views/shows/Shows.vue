<template>
  <div id="main" class="alt">
    <section>
      <div class="inner pa">
        <header class="major">
          <h1>Shows</h1>
        </header>
        <ShowList />
        <p>
          Never miss a beat! Schau hier regelmäßig rein, um zu sehen, wann wir wieder in deine Nähe kommen. Komm rum und
          feier mit uns zusammen Clubmusik! Festivals, Stadtfeste, Vereins-Events, private Feiern und vieles mehr. Um
          keine Show von uns zu verpassen, folge uns bei Instagram:
          <a href="https://instagram.com/clublive.band">instagram.com/clublive.band</a>
        </p>
        <p>
          Noch auf der Suche nach dem passenden Act für deine Veranstaltung? Egal ob Hochzeit, Firmenfeier,
          Weihnachtsfeier, Geburtstagsfeier, Abschlussfeier, Gartenparty – für den Live-Party-Boost bist du hier genau
          richtig. Schreib uns eine unverbindliche Anfrage über unser <a href="#contact">Kontaktformular</a> und lass
          uns deine Party zum Beben bringen!
        </p>
      </div>
    </section>

    <section id="gallery">
      <ImageGallery :images="['green', 'jules', 'tobi', 'andre-side']" />
    </section>

    <section data-test-id="references">
      <div class="inner pa align-center">
        <h2>Referenzen</h2>
        <p>Hier hat Club Live schon den Laden zerlegt.</p>
        <vue-word-cloud
          style="height: 50vh; width: 100%; max-width: 1200px; margin: 0 auto; color:"
          :words="pastShows"
          color="var(--color-fg)"
          font-family="Montserrat"
          :spacing="1"
        />
      </div>
    </section>

    <section id="gallery">
      <ImageGallery :images="['crowd-red', 'felix', 'tiffany-erasmus', 'blaeser']" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { seo } from '@/utils'
import { useHead, useSeoMeta } from '@unhead/vue'
import ShowList from '@/components/ShowList.vue'
import VueWordCloud from 'vuewordcloud'
import { pastShows } from '@/data/pastShows'
import ImageGallery from '@/components/ImageGallery.vue'

useSeoMeta({
  ogTitle: seo.shows.title,
  ogDescription: seo.shows.description,
  description: seo.shows.description,
})
useHead({
  title: seo.shows.title,
})
</script>

<style scoped></style>
