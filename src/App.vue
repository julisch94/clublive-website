<template>
  <div id="overlay" :class="{ 'is-menu-visible': isMenuVisible }">
    <Header :is-transparent="showTransparentNavbar" @toggle-menu="toggleMenu" />

    <nav id="menu">
      <div class="inner">
        <ul class="links">
          <li v-for="item in menuRoutes" :key="item.name">
            <router-link :to="item.route" @click.capture="toggleMenu()">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
      <a href="#" class="close" @click.prevent="toggleMenu()" />
    </nav>

    <div id="wrapper">
      <router-view @is-main-in-view="onMainInView($event)" />

      <TheContact />
      <Footer />
    </div>
  </div>

  <CookieConsent />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import TheContact from '@/components/TheContact.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import CookieConsent from '@/components/CookieConsent.vue'
import { menuRoutes } from '@/router'

const route = useRoute()

const isMenuVisible = ref(false)
const isMainInView = ref(false)

const showTransparentNavbar = computed(() => {
  // transparent navbar only on root page
  return route.path === '/' && !isMainInView.value
})

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value
}

const onMainInView = (isInView: boolean) => {
  isMainInView.value = isInView
}
</script>

<style>
@import './assets/css/main.css';

#cookie-consent {
  background-color: var(--color-accent-1);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1em;
  padding: 1em;
  position: sticky;
  bottom: 0;
}

#menu {
  transition:
    transform 0.35s ease,
    opacity 0.35s ease,
    visibility 0.35s;
  align-items: center;
  display: flex;
  justify-content: center;
  pointer-events: none;
  background: linear-gradient(to top right, var(--color-accent-1), #6300ff);
  backdrop-filter: blur(10px);
  box-shadow: none;
  height: 100%;
  left: 0;
  opacity: 0;
  overflow: hidden;
  padding: 3em 2em;
  position: fixed;
  top: 0;
  visibility: hidden;
  width: 100%;
  z-index: 30;
}

#menu .inner {
  transition:
    transform 0.35s ease-out,
    opacity 0.35s ease,
    visibility 0.35s;
  transform: rotateX(20deg);
  max-width: 100%;
  max-height: 100vh;
  opacity: 0;
  overflow: auto;
  text-align: center;
  visibility: hidden;
  width: 18em;
}

#menu .inner > :first-child {
  margin-top: 1em;
}

#menu .inner > :last-child {
  margin-bottom: 1.5em;
}

#menu ul {
  margin: 0 0 0.5em 0;
}

#menu ul.links {
  list-style: none;
  padding: 0;
}

#menu ul.links > li {
  padding: 0;
}

#menu ul.links > li > a:not(.button) {
  border: 0;
  border-top: solid 1px rgba(212, 212, 255, 0.1);
  display: block;
  font-size: 0.8em;
  font-weight: 700;
  letter-spacing: 0.25em;
  line-height: 4em;
  text-decoration: none;
  text-transform: uppercase;
}

#menu ul.links > li > .button {
  display: block;
  margin: 0.5em 0 0 0;
}

#menu ul.links > li:first-child > a:not(.button) {
  border-top: 0 !important;
}

#menu .close {
  -moz-transition: color 0.2s ease-in-out;
  -webkit-transition: color 0.2s ease-in-out;
  -ms-transition: color 0.2s ease-in-out;
  transition: color 0.2s ease-in-out;
  -webkit-tap-highlight-color: transparent;
  border: 0;
  cursor: pointer;
  display: block;
  height: 4em;
  line-height: 4em;
  overflow: hidden;
  padding-right: 1.25em;
  position: absolute;
  right: 0;
  text-align: right;
  text-indent: 8em;
  top: 0;
  vertical-align: middle;
  white-space: nowrap;
  width: 8em;
}

#menu .close:before,
#menu .close:after {
  -moz-transition: opacity 0.2s ease-in-out;
  -webkit-transition: opacity 0.2s ease-in-out;
  -ms-transition: opacity 0.2s ease-in-out;
  transition: opacity 0.2s ease-in-out;
  background-position: center;
  background-repeat: no-repeat;
  content: '';
  display: block;
  height: 4em;
  position: absolute;
  right: 0;
  top: 0;
  width: 4em;
}

#menu .close:before {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='20px' height='20px' viewBox='0 0 20 20' zoomAndPan='disable'%3E%3Cstyle%3Eline %7B stroke: %23fff%3B stroke-width: 2%3B %7D%3C/style%3E%3Cline x1='0' y1='0' x2='20' y2='20' /%3E%3Cline x1='20' y1='0' x2='0' y2='20' /%3E%3C/svg%3E");
}

#menu .close:after {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='20px' height='20px' viewBox='0 0 20 20' zoomAndPan='disable'%3E%3Cstyle%3Eline %7B stroke: %239bf1ff%3B stroke-width: 2%3B %7D%3C/style%3E%3Cline x1='0' y1='0' x2='20' y2='20' /%3E%3Cline x1='20' y1='0' x2='0' y2='20' /%3E%3C/svg%3E");
  opacity: 0;
}

#menu .close:hover:after,
#menu .close:active:after {
  opacity: 1;
}
</style>
