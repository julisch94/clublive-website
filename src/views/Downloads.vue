<template>
  <div id="main" class="alt">
    <section>
      <div class="inner pa">
        <header class="major">
          <h1>Downloads</h1>
        </header>

        <div class="row">
          <div class="6u 12u$(small)">
            <h3>Pressetext von "Club Live"</h3>
            <p class="justify-on-desktop">
              {{ pressText }}
            </p>
          </div>
          <div class="6u$ 12u$(small)">
            <h3>Veranstalterinfos zum Download</h3>
            <ul class="actions vertical">
              <li>
                <a
                  class="button special icon fa-external-link"
                  target="_blank"
                  href="https://drive.google.com/drive/folders/1rSo5bLnIZp2R50qY-brF9zLecKOgb-uP"
                  >Alle Infos zusammen</a
                >
              </li>
              <li>
                <a
                  class="button icon fa-external-link"
                  target="_blank"
                  href="https://drive.google.com/drive/folders/1OnHRZTm-iKL7_YgguWI1u8pKzfS-hOph"
                  >Nur Logo</a
                >
              </li>
              <li>
                <a
                  class="button icon fa-external-link"
                  target="_blank"
                  href="https://drive.google.com/drive/folders/1Nv02zZGwDcdZCYV3G1A4EMBz1LfCFqQ4"
                  >Nur Pressebilder</a
                >
              </li>
              <li>
                <a
                  class="button icon fa-external-link"
                  target="_blank"
                  href="https://drive.google.com/file/d/1btQ41IQZeaxZEp6xZzbJu93tpTPejDHy/view?usp=drive_link"
                  >Nur Technical Rider</a
                >
              </li>
            </ul>
            <p>Du hast Fragen?<br />Schreibe uns gerne eine E-Mail an<br />contact@clublive.band</p>
          </div>
        </div>
      </div>
    </section>

    <hr />
  </div>
</template>

<script setup lang="ts">
import { pressText } from '@/data/pressText'
import { seo } from '@/utils'
import { useHead, useSeoMeta } from '@unhead/vue'

useSeoMeta({
  ogTitle: seo.downloads.title,
})
useHead({
  title: seo.downloads.title,
})
</script>
