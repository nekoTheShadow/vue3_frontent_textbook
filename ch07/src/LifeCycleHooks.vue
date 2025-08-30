<script setup lang="ts">
import {
  computed,
  onBeforeMount,
  onBeforeUpdate,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onUpdated,
  ref,
} from 'vue'

const height = ref(Math.round(Math.random() * 10))
const width = ref(Math.round(Math.random() * 10))
const area = computed(() => height.value * width.value)

const change = () => {
  height.value = Math.round(Math.random() * 10)
  width.value = Math.round(Math.random() * 10)
}
onBeforeMount(() => console.log(`beforeMount called: ${height.value} * ${width.value}`))
onMounted(() => console.log(`mounted called: ${height.value} * ${width.value}`))
onBeforeUpdate(() => console.log(`beforeUpdate called: ${height.value} * ${width.value}`))
onUpdated(() => console.log(`update called: ${height.value} * ${width.value}`))
onRenderTracked((event) => {
  console.log(`renderTracked called: ${height.value} * ${width.value}`)
  console.log(event)
})
onRenderTriggered((event) => {
  console.log(`renderTriggered called: ${height.value} * ${width.value}`)
  console.log(event)
})
</script>

<template>
  <p>縦が{{ height }}、横が{{ width }}の長方形の面積は{{ area }}</p>
  <button v-on:click="change">値を変更</button>
</template>

<style scoped></style>
