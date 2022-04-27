<template>
  <div id="overlay" :class="{ 'is-menu-visible': isMenuVisible }">
    <Header @toggle-menu="toggleMenu" :is-transparent="showTransparentNavbar" />

    <nav id="menu">
      <div class="inner">
        <ul class="links">
          <li v-for="item in routes" :key="item.name">
            <router-link @click.capture="toggleMenu()" :to="item.route">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
      <a href="#" @click.prevent="toggleMenu()" class="close"></a>
    </nav>

    <div id="wrapper">
      <router-view @is-main-in-view="onMainInView($event)" />

      <Contact />
      <Footer />
    </div>
  </div>

  <CookieConsent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import CookieConsent from "@/components/CookieConsent.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    Contact,
    Footer,
    CookieConsent,
  },
  data() {
    return {
      routes: [
        {
          name: "Home",
          route: "/",
        },
        {
          name: "Musik",
          route: "/music",
        },
        {
          name: "Band",
          route: "/band",
        },
        {
          name: "Shows",
          route: "/shows",
        },
        {
          name: "Downloads",
          route: "/downloads",
        },
        {
          name: "Datenschutzerklärung",
          route: "/datenschutzerklaerung",
        },
        {
          name: "Impressum",
          route: "/impressum",
        },
      ],
      isMenuVisible: false,
      isMainInView: false,
    };
  },
  computed: {
    showTransparentNavbar(): boolean {
      return this.$route.path === "/" && !this.isMainInView;
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
    },
    onMainInView(isInView: boolean) {
      this.isMainInView = isInView;
    },
  },
});
</script>

<style>
@import "./assets/css/main.css";

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
