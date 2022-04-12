<template>
  <footer id="footer">
    <div class="inner">
      <Social />

      <ul class="copyright">
        <li>
          Bilder von
          <a href="https://www.romanbischoff.com/">Roman Bischoff</a>,
          <a href="https://www.tkammies.com/">Timothée Kammies</a> und
          <a href="https://ybfotografie.com/">Yannick Bodemer</a>.
        </li>
      </ul>
      <ul class="copyright">
        <li>&copy; {{ currentYear }} ClubLive</li>
        <li>
          Design: <a href="https://html5up.net" target="_blank">HTML5 UP</a>
        </li>
        <li>
          Vue.js integration:
          <a href="https://julianschmidt.codes/">Julian Schmidt</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Social from "@/components/Social.vue";

export default defineComponent({
  name: "Footer",
  components: {
    Social,
  },
  computed: {
    currentYear(): number {
      return new Date().getFullYear();
    },
  },
});
</script>

<style>
#footer .copyright {
  font-size: 0.8em;
  list-style: none;
  padding-left: 0;
}

#footer .copyright li {
  border-left: solid 1px white;
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

@media screen and (max-width: 760px) {
  #footer .copyright li {
    display: block;
    border-left: 0;
    margin-left: 0;
    padding-left: 0;
    line-height: inherit;
  }
}
</style>
