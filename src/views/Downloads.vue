<template>
  <div id="main" class="alt">
    <section>
      <div class="inner pa">
        <header class="major">
          <h1>Downloads</h1>
        </header>

        <div class="row">
          <div class="6u 12u$(small)">
            <h3>Pressetext von ClubLive</h3>
            <p style="text-align: justify">
              ClubLive – Clubmusik live performt.<br />
              {{ pressText }}
            </p>
          </div>
          <div class="6u$ 12u$(small)">
            <h3>Links zu den Downloads</h3>
            <ul class="actions vertical">
              <li>
                <a class="button" href="https://drive.google.com/drive/folders/1rSo5bLnIZp2R50qY-brF9zLecKOgb-uP"
                  >Veranstalter-Infos</a
                >
              </li>
              <li>
                <a
                  class="button special"
                  href="https://drive.google.com/drive/folders/1OnHRZTm-iKL7_YgguWI1u8pKzfS-hOph"
                  >Logo</a
                >
              </li>
              <li>
                <a
                  class="button special"
                  href="https://drive.google.com/drive/folders/1Nv02zZGwDcdZCYV3G1A4EMBz1LfCFqQ4"
                  >Pressebilder</a
                >
              </li>
              <li>
                <a class="button special" href="https://drive.google.com/file/d/1IOWMwVUNzpsegFWs5QILlviElQXgoITu/view"
                  >Technical Rider</a
                >
              </li>
            </ul>
            <p>Nichts passendes dabei?<br />Schreibe uns gerne eine E-Mail.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { pressText } from '@/data/pressText'
</script>
