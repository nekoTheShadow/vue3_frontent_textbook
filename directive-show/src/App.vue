<script setup lang="ts">
import { computed, ref } from 'vue';

const number = ref(80);
const showOrNot = computed(() => Math.round(Math.random() * 100) >= 50);
</script>

<template>
  <section>
    v-ifを利用
    <p v-if="showOrNot">条件に合致したので表示</p>
  </section>
  <section>
    v-showを利用
    <p v-show="showOrNot">条件に合致したので表示</p>
  </section>
</template>

<style scoped></style>
