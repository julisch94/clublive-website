<template>
  <footer id="footer">
    <div class="inner">
      <ul class="icons">
        <li>
          <a href="https://facebook.com/ClubLive.Band" class="icon alt fa-facebook">
            <span class="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://instagram.com/clublive.band" class="icon alt fa-instagram">
            <span class="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCpnhZgIseF5XWs5icvU4nuQ" class="icon alt fa-youtube">
            <span class="label">YouTube</span>
          </a>
        </li>
      </ul>
      <ul class="copyright">
        <li>&copy; Bilder von <a href="https://www.instagram.com/romanbischoff.photography/">Roman Bischoff</a> und <a
            href="https://www.instagram.com/yannick_bodemer_fotografie/">Yannick Bodemer</a></li>
      </ul>
      <ul class="copyright">
        <li>&copy; {{ currentYear }} ClubLive</li>
        <li>Design: <a href="https://html5up.net" target="_blank">HTML5 UP</a></li>
        <li>Vue.js integration: <a href="https://github.com/julisch94">Julian Schmidt</a></li>
      </ul>
    </div>
  </footer>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class Footer extends Vue {

  get currentYear(): number {
    return new Date().getFullYear();
  }

}
</script>

