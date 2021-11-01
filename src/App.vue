<template>
  <div id="overlay" :class="{'is-menu-visible': isMenuVisible}">
    <header id="header" class="reveal alt is-menu-visible">
      <a href="/" class="logo">
        <strong>ClubLive</strong>
        <span>Club-Hits and Charts</span>
      </a>
      <nav @click="toggleMenu()">
        <a href="#">Menu</a>
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
    </div>
  </div>
</template>

<script lang="ts">

import {Vue} from "vue-class-component";

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
