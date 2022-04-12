<template>
  <header id="header" class="reveal" :class="{'alt': isTransparent}">
    <a href="/" class="logo">
      <strong>ClubLive</strong>
      <span>Club-Hits and Charts</span>
    </a>
    <nav>
      <a href="#" @click.prevent="toggleMenu()">Menu</a>
    </nav>
  </header>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Header",
  props: {
    isTransparent: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleMenu() {
      this.$emit("toggle-menu");
    }
  }
})
</script>
