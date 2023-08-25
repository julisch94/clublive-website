<template>
  <header id="header" class="reveal" :class="{ alt: isTransparent }">
    <a href="/" class="logo">
      <div class="logo-container">
        <div class="clublive-logo">
          <img src="/images/logo-horizontal-gradient.svg" alt="ClubLive Logo" />
        </div>
        <span class="logo-text">Club-Hits and Charts</span>
      </div>
    </a>

    <nav id="menu-desktop">
      <a class="hamburger" href="#" @click.prevent="toggleMenu()">Menu</a>
    </nav>
    <nav id="menu-mobile">
      <a class="hamburger" href="#" @click.prevent="toggleMenu()" />
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
  props: {
    isTransparent: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleMenu() {
      this.$emit('toggle-menu')
    },
  },
})
</script>

<style scoped>
.clublive-logo {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 0.3rem;
  padding: 0.4rem;
  -moz-transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
  -webkit-transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
  -ms-transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
  transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo-text {
  margin-left: 1rem;
}

.clublive-logo img {
  max-width: 100%;
  max-height: 100%;
  height: 1.5rem;
}

a.logo:hover .clublive-logo,
a.logo:active .clublive-logo {
  background-color: #9bf1ff;
}

a.logo:hover .clublive-logo img,
a.logo:active .clublive-logo img {
  content: url('/images/logo-horizontal-black.svg');
}

#header {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  background-color: #2a2f4a;
  box-shadow: 0 0 0.25em 0 rgba(0, 0, 0, 0.15);
  cursor: default;
  font-weight: 700;
  height: 3.25em;
  left: 0;
  letter-spacing: 0.25em;
  line-height: 3.25em;
  margin: 0;
  position: fixed;
  text-transform: uppercase;
  top: 0;
  width: 100%;
  z-index: 10000;
}

#header .logo {
  border: 0;
  display: inline-block;
  align-items: center;
  font-size: 0.8em;
  height: inherit;
  line-height: inherit;
  padding: 0 1.5em;
}

#header .logo strong {
  -moz-transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
  -webkit-transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
  -ms-transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
  transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
  background-color: #fff;
  color: #242943;
  display: inline-block;
  line-height: 1.65em;
  margin-right: 0.325em;
  padding: 0 0.125em 0 0.375em;
}

#header nav {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-justify-content: -moz-flex-end;
  -webkit-justify-content: -webkit-flex-end;
  -ms-justify-content: -ms-flex-end;
  justify-content: flex-end;
  -moz-flex-grow: 1;
  -webkit-flex-grow: 1;
  -ms-flex-grow: 1;
  flex-grow: 1;
  height: inherit;
  line-height: inherit;
}

#header nav a.hamburger {
  border: 0;
  display: block;
  font-size: 0.8em;
  height: inherit;
  line-height: inherit;
  padding: 0 0.75em;
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
  -moz-transition: opacity 0.2s ease-in-out;
  -webkit-transition: opacity 0.2s ease-in-out;
  -ms-transition: opacity 0.2s ease-in-out;
  transition: opacity 0.2s ease-in-out;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='32' viewBox='0 0 24 32' preserveAspectRatio='none'%3E%3Cstyle%3Eline %7B stroke-width: 2px%3B stroke: %239bf1ff%3B %7D%3C/style%3E%3Cline x1='0' y1='11' x2='24' y2='11' /%3E%3Cline x1='0' y1='21' x2='24' y2='21' /%3E%3Cline x1='0' y1='16' x2='24' y2='16' /%3E%3C/svg%3E");
  opacity: 0;
  z-index: 1;
}

#header nav a.hamburger[href='#']:hover:after,
#header nav a.hamburger[href='#']:active:after {
  opacity: 1;
}

#header nav a.hamburger[href='#']:last-child {
  padding-right: 3.875em !important;
}

#header nav a.hamburger[href='#']:last-child:before,
#header nav a.hamburger[href='#']:last-child:after {
  right: 2em;
}

#header.reveal {
  -moz-animation: reveal-header 0.35s ease;
  -webkit-animation: reveal-header 0.35s ease;
  -ms-animation: reveal-header 0.35s ease;
  animation: reveal-header 0.35s ease;
}

#header.alt {
  -moz-transition: opacity 0.5s ease;
  -webkit-transition: opacity 0.5s ease;
  -ms-transition: opacity 0.5s ease;
  transition: opacity 0.5s ease;
  -moz-transition-delay: 0.75s;
  -webkit-transition-delay: 0.75s;
  -ms-transition-delay: 0.75s;
  transition-delay: 0.75s;
  -moz-animation: none;
  -webkit-animation: none;
  -ms-animation: none;
  animation: none;
  background-color: transparent;
  box-shadow: none;
  position: absolute;
}

#header.alt.style1 .logo strong {
  color: #6fc3df;
}

#header.alt.style2 .logo strong {
  color: #8d82c4;
}

#header.alt.style3 .logo strong {
  color: #ec8d81;
}

#header.alt.style4 .logo strong {
  color: #e7b788;
}

#header.alt.style5 .logo strong {
  color: #8ea9e8;
}

#header.alt.style6 .logo strong {
  color: #87c5a4;
}

body.is-loading #header.alt {
  opacity: 0;
}

@media screen and (max-width: 840px) {
  #header {
    height: 2.75em;
    line-height: 2.75em;
  }

  #header .logo {
    padding: 0 1em;
  }

  #header nav a.hamburger {
    padding: 0 0.5em;
  }

  #header nav a.hamburger:last-child {
    padding-right: 1em;
  }
}

@media screen and (max-width: 760px) {
  #header .logo span {
    display: none;
  }
}

@media screen and (min-width: 760px) {
  #menu-mobile {
    display: none !important;
  }
}

@media screen and (max-width: 760px) {
  #menu-desktop {
    display: none !important;
  }
}
</style>
