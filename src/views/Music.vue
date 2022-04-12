<template>
  <div class="alt" id="main">
    <section id="one">
      <div class="inner">
        <header class="major">
          <h2>Musik</h2>
        </header>
        <p align="justify">
          Unsere Playlist besteht aus einer sorgfältigen Auswahl an aktuellen
          Chart- und Club-Hits. Es kommen zudem ständig neue Songs dazu. Unsere
          aktuelle Setlist enthält Songs von Alle Farben, Felix Jaehn, Jess
          Glynne, Avicii, LMFAO, Marteria, Flo Rida, DJ Snake, Stromae,
          Macklemore, Zara Larsson, Calvin Harris und vielen mehr.
        </p>
        <p>Hier sind einige Youtube-Videos unserer Auftritte:</p>
        <div class="row">
          <div class="6u 12u$(medium)">
            <div class="video-container">
              <iframe
                src="https://www.youtube.com/embed/klPMadnQVL8"
                frameborder="0"
                allowfullscreen
              >
              </iframe>
            </div>
            <p></p>
          </div>
          <div class="6u 12u$(medium)">
            <div class="video-container">
              <iframe
                src="https://www.youtube.com/embed/w8EGcCSjuJQ"
                frameborder="0"
                allowfullscreen
              >
              </iframe>
            </div>
            <p></p>
          </div>
        </div>
        <div class="row">
          <div class="6u 12u$(medium)">
            <div class="video-container">
              <iframe
                src="https://www.youtube.com/embed/q8VdEr7DpQ4"
                frameborder="0"
                allowfullscreen
              >
              </iframe>
            </div>
            <p></p>
          </div>
          <div class="6u 12u$(medium)">
            <div class="video-container">
              <iframe
                src="https://www.youtube.com/embed/JAw3hM3quzc"
                frameborder="0"
                allowfullscreen
              >
              </iframe>
            </div>
            <p></p>
          </div>
        </div>
        <p>Weitere Videos gibt es auf unseren Social-Media-Kanälen:</p>
        <Social />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Social from "@/components/Social.vue";

export default defineComponent({
  name: "Music",
  data() {
    return {
      name: "Music",
    };
  },
  components: { Social },
});
</script>
