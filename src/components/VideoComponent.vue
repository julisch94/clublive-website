<script setup lang="ts">
import { ref } from 'vue'

withDefaults(
  defineProps<{
    poster?: string
    src: string
    mode?: 'portrait' | 'landscape'
  }>(),
  {
    mode: 'portrait',
  }
)

const video = ref<HTMLVideoElement>()

const handleClick = async (e: Event) => {
  e.preventDefault()

  if (video.value?.paused) {
    video.value?.play()
    video.value.requestFullscreen()
  } else {
    video.value?.pause()
  }
}
</script>

<template>
  <!-- <div v-if="showFullscreen" @click="hideFullscreen" class="fullscreen-overlay">Test</div> -->
  <div class="video-container" :class="{ portrait: mode === 'portrait', landscape: mode === 'landscape' }">
    <video ref="video" @click.once="handleClick" controls loop preload="none" :poster="poster">
      <source :src="src" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<style scoped>
/* .fullscreen-overlay {
  position: fixed;
  z-index: 20;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: var(--color-accent-8);
} */

.video-container {
  position: relative;
  width: 100%;
  margin-bottom: 1em;
}

.landscape {
  padding-top: 56.25%; /* 16/9 aspect ratio (9 divided by 16) */
}

.portrait {
  padding-top: 177.77%; /* 16/9 aspect ratio (16 divided by 9) */
}

.video-container > video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
}
</style>
