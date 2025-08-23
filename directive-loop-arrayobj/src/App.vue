<script setup lang="ts">
import { ref } from 'vue';

const cocktailDataListInit = [
  {id: 2345, name:"ホワイトレディ", price:1200},
  {id: 4412, name:"ブルーハワイ", price:1500},
  {id: 6792, name:"ニューヨーク", price:1100},
  {id: 8429, name:"マティーニ", price:1200},
];
const cocktailDataList = ref(cocktailDataListInit);
</script>

<template>
  <ul>
    <li v-for="cocktailItem in cocktailDataList" v-bind:key="cocktailItem.id">{{ cocktailItem.name }}の値段は{{ cocktailItem.price }}円</li>
  </ul>
</template>

<style scoped></style>
