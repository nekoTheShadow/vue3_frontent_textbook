<script setup lang="ts">
import { computed } from 'vue'
import { useCounterStore } from './stores/counter'

const counterStore = useCounterStore()
const count = computed(() => counterStore.counter)
const doubleCount = computed(() => counterStore.doubleCount)
const onIncrementClick = () => counterStore.incrementCount()
</script>

<template>
  <p>現在のポイント：{{ count }}</p>
  <p>現在のポイントさらに倍：{{ doubleCount }}</p>
  <button v-on:click="onIncrementClick">加算</button>
</template>

<style scoped></style>
