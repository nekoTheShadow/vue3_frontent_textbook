<script setup lang="ts">
import { ref } from 'vue';

const whiteLadyInit = {
  id: 2345,
  name: "ホワイトレディ",
  price: 1200,
  recipe: "ジン30ml+コワントロー15ml+レモン果汁15ml"
}
const whiteLady = ref(whiteLadyInit);
const changeWhiteLadyPrice = () => whiteLady.value.price = 1500;
</script>

<template>
  <dl>
    <template v-for="(value, key) in whiteLady" v-bind="key">
      <dt>{{ key }}</dt>
      <dl>{{ value }}</dl>
    </template>
  </dl>
  <p>価格を1500円に<button v-on:click="changeWhiteLadyPrice">変更</button></p>
</template>

<style scoped></style>
