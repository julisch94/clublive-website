<template>
  <div id="banner" class="hero" :class="{ 'is-loading': state.isLoading }">
    <div class="banner-bg"></div>
    <video
      v-if="!isMobile"
      id="hero-video"
      preload="auto"
      autoplay
      :muted="state.isMuted"
      loop
      poster="assets/images/banner/banner_1400.jpg"
    >
      <source src="/video/ClubLive-web.mp4" type="video/mp4" />
    </video>
    <div class="inner">
      <header class="major">
        <h1>ClubLive</h1>
      </header>
      <div class="content">
        <p>Live Band aus Karlsruhe.</p>
        <ul class="actions">
          <li>
            <a href="#start" class="button next">Jetzt reinhören</a>
          </li>
        </ul>
        <Social />
      </div>
    </div>
    <button class="mute-toggle" @click="toggleMute">
      <i class="icon alt" :class="[state.isMuted ? 'fa-volume-off' : 'fa-volume-up']"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { useIsMobile } from '@/utils/is-mobile'

const { isMobile } = useIsMobile()

const state = reactive({ isLoading: true, isMuted: true })

const toggleMute = () => {
  state.isMuted = !state.isMuted
}

onMounted(() => {
  setTimeout(() => {
    state.isLoading = false
  }, 500)
})
</script>

<style scoped>
.banner-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
  background: url('/src/assets/images/banner/banner_1400.jpg') center center no-repeat;
  background-size: cover;
  filter: brightness(0.7);
  pointer-events: none;
}

#banner video {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
  pointer-events: none;
  filter: brightness(0.7);
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
  height: 100vh;
  margin-bottom: -3.25em;
  min-height: 30em;
  position: relative;
  top: -3.25em;
}

.mute-toggle {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 1.25rem;
  box-shadow: none;
}

#banner h1 {
  font-size: 3.25em;
  text-transform: uppercase;
}

#banner .inner {
  -moz-transition: opacity 1.5s ease, -moz-transform 0.5s ease-out, -moz-filter 0.5s ease, -webkit-filter 0.5s ease;
  -webkit-transition: opacity 1.5s ease, -webkit-transform 0.5s ease-out, -webkit-filter 0.5s ease,
    -webkit-filter 0.5s ease;
  -ms-transition: opacity 1.5s ease, -ms-transform 0.5s ease-out, -ms-filter 0.5s ease, -webkit-filter 0.5s ease;
  transition: opacity 1.5s ease, transform 0.5s ease-out, filter 0.5s ease, -webkit-filter 0.5s ease;
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

#banner .inner .content p {
  font-size: 0.7em;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
}

.is-loading:after {
  opacity: 1;
}

.is-loading .inner {
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
    top: -2.75em;
  }

  #banner h1 {
    font-size: 2em;
  }

  #banner .inner .content {
    display: block;
  }

  #banner .inner .content > * {
    margin-left: 0;
    margin-bottom: 1em;
  }
}

@media screen and (max-width: 760px) {
  #banner {
    padding: 8em 0 5em 0;
  }

  #banner .inner .content p br {
    display: none;
  }
}

.actions {
  flex-grow: 1;
}
</style>
