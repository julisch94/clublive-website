<template>
  <header id="header" :class="{'alt': isTransparent}">
    <a href="/" class="logo">
      <strong>ClubLive</strong>
      <span>Club-Hits and Charts</span>
    </a>
    <nav @click="toggleMenu()">
      <a href="#">Menu</a>
    </nav>
  </header>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Header",
  computed: {
    isTransparent() {
      return this.$route.path === "/";
    }
  },
  methods: {
    toggleMenu() {
      this.$emit("toggle-menu");
    }
  }
})
</script>
