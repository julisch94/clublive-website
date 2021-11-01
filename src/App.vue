<template>
  <div id="overlay" :class="{'is-menu-visible': isMenuVisible}">
    <header id="header" class="reveal alt is-menu-visible">
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
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/music">Musik</router-link></li>
          <li><router-link to="/band">Band</router-link></li>
          <li><router-link to="/shows">Shows</router-link></li>
          <li><router-link to="/downloads">Downloads</router-link></li>
          <li><router-link to="/datenschutzerklaerung">Datenschutzerklärung</router-link></li>
          <li><router-link to="/impressum">Impressum</router-link></li>
        </ul>
      </div>
      <a @click="toggleMenu" class="close">
        "Close"
      </a>
    </nav>
  </div>

  <router-view/>
</template>

<script lang="ts">

import {Vue} from "vue-class-component";

export default class App extends Vue {

  isMenuVisible = false;

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

}

</script>

<style>
@import "./assets/css/main.css";
</style>
