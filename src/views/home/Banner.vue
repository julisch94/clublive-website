<template>
  <section id="banner" class="major" :class="{ 'is-loading': isLoading }">
    <div class="inner">
      <header class="major">
        <div class="clublive-logo">
          <img src="/images/logo-horizontal-white.svg" alt="ClubLive Logo" />
        </div>
      </header>
      <div class="content">
        <h1>Live-Band aus Karlsruhe</h1>
        <ul class="actions">
          <li>
            <a href="#start" class="button next">Jetzt reinhören</a>
          </li>
        </ul>
        <Social />
      </div>
    </div>
    <div class="carousel">
      <CarouselContainer />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CarouselContainer from '@/components/CarouselContainer.vue'
import Social from '@/components/Social.vue'

const isLoading = ref(true)

onMounted(() => {
  isLoading.value = false
})
</script>

<style scoped>
.clublive-logo img {
  height: 1em;
}

.clublive-logo {
  font-size: 3.25em;
}

.carousel {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

#banner {
  -moz-align-items: center;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  padding: 6em 0 3em 0;
  border-bottom: 0 !important;
  cursor: default;
  height: 80vh;
  margin-bottom: -3.25em;
  max-height: 32em;
  min-height: 22em;
  position: relative;
  top: -3.25em;
}

#banner:after {
  -moz-transition: opacity 0.5s ease;
  -webkit-transition: opacity 0.5s ease;
  -ms-transition: opacity 0.5s ease;
  transition: opacity 0.5s ease;
  -moz-transition-delay: 0.35s;
  -webkit-transition-delay: 0.35s;
  -ms-transition-delay: 0.35s;
  transition-delay: 0.35s;
  -moz-pointer-events: none;
  -webkit-pointer-events: none;
  -ms-pointer-events: none;
  pointer-events: none;
  background-color: #242943;
  content: '';
  display: block;
  height: 100%;
  left: 0;
  opacity: 0.25;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
}

#banner .inner {
  -moz-transition:
    opacity 1.5s ease,
    -moz-transform 0.5s ease-out,
    -moz-filter 0.5s ease,
    -webkit-filter 0.5s ease;
  -webkit-transition:
    opacity 1.5s ease,
    -webkit-transform 0.5s ease-out,
    -webkit-filter 0.5s ease,
    -webkit-filter 0.5s ease;
  -ms-transition:
    opacity 1.5s ease,
    -ms-transform 0.5s ease-out,
    -ms-filter 0.5s ease,
    -webkit-filter 0.5s ease;
  transition:
    opacity 1.5s ease,
    transform 0.5s ease-out,
    filter 0.5s ease,
    -webkit-filter 0.5s ease;
  padding: 0 !important;
  position: relative;
  z-index: 2;
}

#banner .inner header {
  width: auto;
}

#banner .inner header > :first-child {
  width: auto;
}

#banner .inner header > :first-child:after {
  max-width: 100%;
}

#banner .inner .content {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-align-items: center;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  margin: 0 0 1em 0;
}

#banner .inner .content > * {
  margin-left: 1.5em;
  margin-bottom: 0;
}

#banner .inner .content > :first-child {
  margin-left: 0;
}

#banner .inner .content h1 {
  font-size: 0.7em;
  font-weight: 700;
  font-family: inherit;
  letter-spacing: 0.25em;
  text-transform: uppercase;
}

#banner.major {
  height: 100vh;
  min-height: 30em;
  max-height: 50em;
}

#banner.major:after {
  opacity: 0;
}

#banner.major.alt {
  opacity: 0.75;
}

#banner.is-loading:after {
  opacity: 1;
}

#banner.is-loading .inner {
  -moz-filter: blur(0.125em);
  -webkit-filter: blur(0.125em);
  -ms-filter: blur(0.125em);
  filter: blur(0.125em);
  -moz-transform: translateX(-0.5em);
  -webkit-transform: translateX(-0.5em);
  -ms-transform: translateX(-0.5em);
  transform: translateX(-0.5em);
  opacity: 0;
}

@media screen and (max-width: 840px) {
  #banner {
    padding: 5em 0 2em 0;
    margin-bottom: -2.75em;
    max-height: none;
    min-height: 0;
    top: -2.75em;
  }

  .clublive-logo {
    font-size: 2em;
  }

  #banner .inner .content {
    display: block;
  }

  #banner .inner .content > * {
    margin-left: 0;
    margin-bottom: 1em;
  }

  #banner.major {
    min-height: 0;
    max-height: none;
    background-attachment: scroll;
  }
}

@media screen and (max-width: 760px) {
  #banner {
    padding: 6em 0 3em 0;
  }

  #banner .inner .content p br {
    display: none;
  }

  #banner.major {
    padding: 8em 0 5em 0;
  }
}

.actions {
  flex-grow: 1;
}
</style>
