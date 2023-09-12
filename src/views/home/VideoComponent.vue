<template>
  <div class="video">
    <video controls>
      <source src="/videos/irish-pub.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
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

.video video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
