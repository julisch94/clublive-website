<template>
  <div ref="resultArea" class="result" :class="{ shake: failure, 'slide-in-from-left': success }">
    <div v-if="success">
      <span class="icon alt fa-check" />
      <span>Vielen Dank! Deine Nachricht wurde übermittelt. Wir melden uns baldmöglichst zurück.</span>
    </div>
    <div v-if="failure">
      <span class="icon alt fa-exclamation" />
      <span>
        Oh. Da ist etwas schief gegangen. Kannst du uns bitte stattdessen eine E-Mail an
        <a href="mailto:contact@clublive.band">contact@clublive.band</a>
        schicken?
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import { onMounted, defineProps } from 'vue'
import { ref } from 'vue'

const props = defineProps<{
  success?: boolean
  failure?: boolean
}>()

const resultArea: Ref<HTMLDivElement | null> = ref(null)

onMounted(() => {
  console.log('mounted', props.success, props.failure)

  resultArea.value?.scrollIntoView()
})
</script>

<style scoped>
.result {
  margin-top: 1em;
}

.result > div {
  display: flex;
  align-items: center;
  gap: 15px;
}

.slide-in-from-left {
  animation: slide-in-from-left 0.3s ease-out forwards;
  transform: translateX(-10px);
  opacity: 0;
}

@keyframes slide-in-from-left {
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
