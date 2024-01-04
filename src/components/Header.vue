<script lang="ts" setup>
import { menuRoutes } from '@/router'
import { computed } from 'vue'

defineProps<{
  isTransparent: boolean
}>()

const emit = defineEmits(['toggle-menu'])

const toggleMenu = () => {
  emit('toggle-menu')
}

const menuRoutesDesktop = computed(() => {
  return menuRoutes.filter(route => route.name !== 'Home')
})
</script>

<template>
  <header id="header" class="reveal" :class="{ alt: isTransparent }">
    <a href="/" class="logo">
      <strong>Club Live</strong>
      <span>Club-Hits and Charts</span>
    </a>
    <nav id="menu-desktop" class="navigation-bar">
      <ul>
        <li v-for="item in menuRoutesDesktop" :key="item.name">
          <router-link :to="item.route">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </nav>
    <nav id="menu-mobile">
      <a class="hamburger" href="#" @click.prevent="toggleMenu()" />
    </nav>
  </header>
</template>

<style scoped>
* {
  --hover-color: var(--color-accent-4);
}

#header {
  display: flex;
  background: linear-gradient(to top right, var(--color-accent-1), #6300ff);
  box-shadow: 0 0 0.25em 0 rgba(0, 0, 0, 0.15);
  padding: 0 1.5em;
  font-weight: 700;
  font-size: 0.8em;
  height: 75px;
  left: 0;
  letter-spacing: 0.25em;
  line-height: 75px;
  margin: 0;
  position: fixed;
  text-transform: uppercase;
  top: 0;
  width: 100%;
  z-index: 10000;
}

/* logo */

a {
  border: 0;
}

a:hover {
  color: var(--hover-color);
}

#header .logo strong {
  transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
  background-color: var(--color-fg);
  color: var(--color-bg);
  display: inline-block;
  line-height: 1.65em;
  margin-right: 1em;
  padding: 0 0.125em 0 0.375em;
}

#header .logo:hover strong,
#header .logo:active strong {
  background-color: var(--hover-color);
}

/* nav bar desktop */

nav {
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
}

.navigation-bar {
  display: flex;
}

.navigation-bar ul {
  list-style: none;
  display: flex;
  gap: 1em;
  margin: 0;
  padding: 0;
}

.navigation-bar li {
  padding: 0;
}

.navigation-bar ul li a {
  padding: 0 0.5em;
  display: block;
}

/* nav bar mobile  */

#header nav a.hamburger {
  border: 0;
  display: block;
  font-size: 0.8em;
  height: inherit;
  line-height: inherit;
  position: relative;
  vertical-align: middle;
}

#header nav a.hamburger:last-child {
  padding-right: 1.5em;
}

#header nav a.hamburger[href='#'] {
  padding-right: 3.325em !important;
}

#header nav a.hamburger[href='#']:before,
#header nav a.hamburger[href='#']:after {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='32' viewBox='0 0 24 32' preserveAspectRatio='none'%3E%3Cstyle%3Eline %7B stroke-width: 2px%3B stroke: %23fff%3B %7D%3C/style%3E%3Cline x1='0' y1='11' x2='24' y2='11' /%3E%3Cline x1='0' y1='21' x2='24' y2='21' /%3E%3Cline x1='0' y1='16' x2='24' y2='16' /%3E%3C/svg%3E");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 24px 32px;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  right: 1.5em;
  top: 0;
  vertical-align: middle;
  width: 24px;
}

#header nav a.hamburger[href='#']:after {
  transition: opacity 0.2s ease-in-out;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='32' viewBox='0 0 24 32' preserveAspectRatio='none'%3E%3Cstyle%3Eline %7B stroke-width: 2px%3B stroke: %239bf1ff%3B %7D%3C/style%3E%3Cline x1='0' y1='11' x2='24' y2='11' /%3E%3Cline x1='0' y1='21' x2='24' y2='21' /%3E%3Cline x1='0' y1='16' x2='24' y2='16' /%3E%3C/svg%3E");
  opacity: 0;
  z-index: 1;
}

#header nav a.hamburger[href='#']:hover:after,
#header nav a.hamburger[href='#']:active:after {
  opacity: 1;
}

#header.reveal {
  animation: reveal-header 0.35s ease;
}

#header.alt {
  transition: opacity 0.5s ease;
  transition-delay: 0.75s;
  animation: none;
  background: transparent;
  box-shadow: none;
  position: absolute;
}

body.is-loading #header.alt {
  opacity: 0;
}

@media screen and (max-width: 840px) {
  #header {
    height: 50px;
    line-height: 50px;
  }

  #header .logo span {
    display: none;
  }

  #header nav a.hamburger:last-child {
    padding-right: 1em;
  }
}

@media screen and (min-width: 840px) {
  #menu-mobile {
    display: none !important;
  }
}

@media screen and (max-width: 840px) {
  #menu-desktop {
    display: none !important;
  }
}
</style>
