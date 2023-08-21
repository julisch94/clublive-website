<template>
  <AudioPlayer
    :option="{
      src: '/music/m-little-party-2.mp3',
      title: 'A Little Party Never Killed Nobody',
    }"
  />
  <AudioPlayer
    :option="{
      src: '/music/m-dance-monkey-1.mp3',
      title: 'Dance Monkey',
    }"
  />
  <AudioPlayer
    :option="{
      src: '/music/m-party-rock-anthem.mp3',
      title: 'Party Rock Anthem',
    }"
  />
  <AudioPlayer
    :option="{
      src: '/music/m-wildberry-lillet-2.mp3',
      title: 'Wildberry Lillet',
    }"
  />
</template>

<script setup lang="ts">
import AudioPlayer from 'vue3-audio-player'
import 'vue3-audio-player/dist/style.css'

// const list = {
  // title: 'secret base~君がくれたもの~',
  // artist: 'Silent Siren',
  // src: 'public/music/m-little-party-2.mp3',
  // pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg',
// }
</script>

<style scoped></style>
