<script setup lang="ts">
import { ref } from 'vue';

interface Cocktail {
  id: number,
  name: string,
  price: number
}

const cocktailDataListInit = new Map<number, Cocktail>();
cocktailDataListInit.set(2345, {id:2345, name:"ホワイトレディ", price:1200});
cocktailDataListInit.set(4412, {id:4412, name:"ブルーハワイ", price:1500});
cocktailDataListInit.set(6792, {id:6792, name:"ニューヨーク", price:1100});
cocktailDataListInit.set(8429, {id:8429, name:"マティーニ", price:1200});
const cocktailDataList = ref(cocktailDataListInit);
</script>

<template>
  <ul>
    <li v-for="[id, cocktailItem] in cocktailDataList" v-bind:key="id">
      {{ cocktailItem.name }}の値段は{{ cocktailItem.price }}円
    </li>
  </ul>
</template>

<style scoped></style>
