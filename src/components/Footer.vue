<template>
  <footer id="footer">
    <div class="inner">
      <ul class="icons">
        <li>
          <a
            href="https://facebook.com/ClubLive.Band"
            class="icon alt fa-facebook"
          >
            <span class="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/clublive.band"
            class="icon alt fa-instagram"
          >
            <span class="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCpnhZgIseF5XWs5icvU4nuQ"
            class="icon alt fa-youtube"
          >
            <span class="label">YouTube</span>
          </a>
        </li>
      </ul>
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
import { Vue } from "vue-class-component";

export default class Footer extends Vue {
  get currentYear(): number {
    return new Date().getFullYear();
  }
}
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
