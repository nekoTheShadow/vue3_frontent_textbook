<script setup lang="ts">
import { ref, watch } from 'vue'

interface Cocktail {
  id: number
  name: string
  price: number
}

function getCoctailInfo(cocktailNo: number): string {
  const coctails = new Map<number, Cocktail>()
  coctails.set(1, { id: 1, name: 'ホワイトレディ', price: 1200 })
  coctails.set(2, { id: 2, name: 'ブルーハワイ', price: 1200 })
  coctails.set(3, { id: 3, name: 'ニューヨーク', price: 1200 })
  coctails.set(4, { id: 4, name: 'マティーニ', price: 1200 })
  const cocktail = coctails.get(cocktailNo)
  if (cocktail == undefined) {
    return '該当するカクテルはありません。'
  } else {
    return `該当するカクテルは${cocktail.name}で、価格は${cocktail.price}です。`
  }
}

const cocktailNo = ref(1)
const priceMsg = ref('')
watch(cocktailNo, (newVal: number, oldVal: number) => {
  const oldMsg = getCoctailInfo(oldVal)
  const newMsg = getCoctailInfo(newVal)
  priceMsg.value = `前のカクテル：${oldMsg} 現在のカクテル：${newMsg}`
})

setInterval(() => (cocktailNo.value = Math.round(Math.random() * 3) + 1), 1000)
</script>

<template>
  <p>現在のカクテル番号：{{ cocktailNo }}</p>
  <p>{{ priceMsg }}</p>
</template>

<style scoped></style>
