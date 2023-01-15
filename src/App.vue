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

      <ContactForm />
      <Footer />
    </div>
  </div>

  <CookieConsent />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import ContactForm from '@/components/ContactForm.vue'
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
  background-color: #242943;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1em;
  padding: 1em;
  position: sticky;
  bottom: 0;
}
</style>
