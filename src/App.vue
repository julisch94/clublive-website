<template>
  <div id="overlay" :class="{'is-menu-visible': isMenuVisible}">
    <header id="header" class="alt">
      <a href="/" class="logo">
        <strong>ClubLive</strong>
        <span>Club-Hits and Charts</span>
      </a>
      <nav @click="toggleMenu()">
        <a href="#menu">Menu</a>
      </nav>
    </header>

    <nav id="menu">
      <div class="inner">
        <ul class="links">
          <li v-for="item in routes" :key="item.name">
            <router-link @click.capture="toggleMenu()" :to="item.route">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>
      <a @click="toggleMenu" class="close">
        "Close"
      </a>
    </nav>

    <div id="wrapper">
      <router-view/>

      <Contact/>
      <Footer/>
    </div>
  </div>
</template>

<script lang="ts">

import {Options, Vue} from "vue-class-component";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";

@Options({
  components: {
    Contact,
    Footer
  }
})
export default class App extends Vue {

  routes = [
    {
      name: "Home",
      route: "/"
    },
    {
      name: "Musik",
      route: "/music"
    },
    {
      name: "Band",
      route: "/band"
    },
    {
      name: "Shows",
      route: "/shows"
    },
    {
      name: "Downloads",
      route: "/downloads"
    },
    {
      name: "Datenschutzerklärung",
      route: "/datenschutzerklaerung"
    },
    {
      name: "Impressum",
      route: "/impressum"
    }
  ]

  isMenuVisible = false;

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

}

</script>

<style>
@import "./assets/css/main.css";
</style>
