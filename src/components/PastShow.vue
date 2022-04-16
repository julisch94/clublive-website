<template>
  <li>{{ displayDate }}<br />{{ show.text }}</li>
</template>

<script lang="ts">
import dayjs from "dayjs";
import { defineComponent, PropType } from "vue";

interface Show {
  date: string;
  text: string;
}

export default defineComponent({
  name: "PastShow",
  props: {
    show: {
      type: Object as PropType<Show>,
      required: true,
    },
  },
  computed: {
    displayDate(): string {
      return dayjs(this.show?.date).format("MMMM YYYY");
    },
  },
});
</script>
