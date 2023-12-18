<template>
  <footer id="footer">
    <div class="inner pa">
      <Social />

      <ul class="copyright">
        <li>
          Alle Bilder sind von
          <a href="https://www.romanbischoff.com/">Roman Bischoff</a>,
          <a href="https://www.tkammies.com/">Timothée Kammies</a> und
          <a href="https://ybfotografie.com/">Yannick Bodemer</a>.
        </li>
      </ul>

      <div class="copyright-row">
        <ul class="copyright">
          <li>&copy; 2017 - {{ currentYear }} Club Live</li>
          <li>
            Webentwicklung:
            <a href="https://julianschmidt.codes/">Julian Schmidt</a>
          </li>
        </ul>
        <ul class="copyright">
          <li>
            E-Mail:
            <a href="mailto:contact@clublive.band">contact@clublive.band</a>
          </li>
          <li><a href="/downloads">Downloads</a></li>
          <li><a href="/datenschutzerklaerung">Datenschutzerklärung</a></li>
          <li><a href="/impressum">Impressum</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Social from '@/components/Social.vue'

const currentYear = computed(() => {
  return new Date().getFullYear()
})
</script>

<style>
#footer {
  background: linear-gradient(to top right, #6300FF, var(--color-accent-1));
}

#footer .copyright {
  font-size: 0.8em;
  list-style: none;
  padding-left: 0;
}

#footer .copyright li {
  border-left: solid 1px var(--color-fg);
  display: inline-block;
  line-height: 1;
  margin-left: 1em;
  padding-left: 1em;
}

#footer .copyright li:first-child {
  border-left: 0;
  margin-left: 0;
  padding-left: 0;
}

#footer .copyright li {
  display: block;
  border-left: 0;
  margin-left: 0;
  padding-left: 0;
  line-height: inherit;
}

.copyright-row {
  display: flex;
  justify-content: space-between;
}

.copyright-row ul:last-of-type {
  text-align: right;
}

@media screen and (max-width: 840px) {
  .copyright-row {
    flex-direction: column-reverse;
  }

  .copyright-row ul:last-of-type {
    text-align: unset;
  }
}
</style>
