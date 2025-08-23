<script setup lang="ts">
import { computed, ref } from 'vue';

interface Cocktail {
  id: number, 
  name: string,
  price: number
}

const cocktailDataListInit: Cocktail[] = [
  {id: 2345, name: "ホワイトレディ", price: 1200},
  {id: 4412, name: "ブルーハワイ", price: 1500},
  {id: 6792, name: "ニューヨーク", price: 1100},
  {id: 8429, name: "マティーニ", price: 1200}
]
const cocktailDataList = ref(cocktailDataListInit);
const cocktail1500 = computed(() => cocktailDataList.value.filter((cocktailItem) => cocktailItem.price == 1500));
</script>

<template>
  <section>
    すべてのカクテルリスト
    <ul>
      <li v-for="cocktailItem in cocktailDataList" v-bind:key="cocktailItem.id">{{ cocktailItem.name }}の値段は{{ cocktailItem.price }}円</li>
    </ul>
  </section>

  <section>
    値段が1500円のカクテルリスト
    <ul>
      <li v-for="cocktailItem in cocktail1500" v-bind:key="cocktailItem.id">{{ cocktailItem.name }}の値段は{{ cocktailItem.price }}円</li>
    </ul>
  </section>
</template>

<style scoped></style>

