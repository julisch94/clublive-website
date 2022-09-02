<template>
  <li>{{ displayDate }}<br />{{ show.text }}</li>
</template>

<script lang="ts">
import dayjs from 'dayjs'
import { defineComponent, PropType } from 'vue'
import { PastShowModel } from '@/model/pastShow.model'

export default defineComponent({
  name: 'PastShow',
  props: {
    show: {
      type: Object as PropType<PastShowModel>,
      required: true,
    },
  },
  computed: {
    displayDate(): string {
      return dayjs(this.show?.date).format('MMMM YYYY')
    },
  },
})
</script>
