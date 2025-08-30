<script setup lang="ts">
import { ref } from 'vue'
import OneInfo from './components/OneInfo.vue'

interface Weather {
  id: number
  title: string
  content: string
}

const weathers = ref(
  new Map<number, Weather>([
    [1, { id: 1, title: '今日の天気', content: '今日は一日中晴でしょう' }],
    [2, { id: 2, title: '明日の天気', content: '明日は一日中雨でしょう' }],
    [3, { id: 3, title: '明後日の天気', content: '明後日は一日中雪でしょう' }],
  ]),
)
</script>

<template>
  <h1>Props基礎</h1>
  <section>
    <h2>ループでコンポーネントを生成</h2>
    <OneInfo
      v-for="[id, weather] in weathers"
      v-bind:key="id"
      v-bind:title="weather.title"
      v-bind:content="weather.content"
    ></OneInfo>
  </section>
</template>

<style lang="css" scoped>
section {
  border: blue;
  margin: 10px;
}
</style>
