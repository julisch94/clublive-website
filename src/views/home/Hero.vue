<template>
  <div class="hero-section">
    <div class="video-overlay"></div>
    <video ref="videoRef" :src="videoSrc" autoplay loop playsinline :muted="isMuted"></video>
    <div class="hero-content">
      <h1 class="hero-title">{{ title }}</h1>
      <p class="hero-subtitle">{{ subtitle }}</p>
    </div>
    <button class="hero-sound-toggle" @click="toggleMute">
      <i class='icon alt' :class="[isMuted ? 'fa-volume-off' : 'fa-volume-up']"></i>
    </button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    videoSrc: {
      type: String,
      required: true,
    },
  },
  setup() {
    const isMuted = ref(true)
    const videoRef = ref<HTMLVideoElement | null>(null)

    function toggleMute() {
      if (videoRef.value) {
        videoRef.value.muted = !isMuted.value
        isMuted.value = !isMuted.value
      }
    }

    onMounted(() => {
      if (videoRef.value) {
        videoRef.value.addEventListener('click', toggleMute)
      }
    })

    return {
      isMuted,
      videoRef,
      toggleMute,
    }
  },
})
</script>

<style scoped>
.hero-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
}

.hero-title {
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.hero-subtitle {
  font-size: 2rem;
  margin-bottom: 4rem;
}

.hero-sound-toggle {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
}

.hero-sound-toggle:hover {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
}
</style>
