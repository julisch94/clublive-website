<template>
  <div class="video">
    <iframe
      src="https://www.youtube.com/embed/V5-zxR4yRFo?rel=0&amp;autoplay=1&mute=1"
      title="ClubLive YouTube"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VideoComponent',
})
</script>

<style scoped>
.video {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 0;
  height: 0;
  overflow: hidden;
  margin-bottom: 1em;
}

.video iframe,
.video object,
.video embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
