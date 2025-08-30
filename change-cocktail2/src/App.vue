<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ChangeCocktail2',
  setup() {
    const coctails = new Map<number, Cocktail>()
    coctails.set(1, { id: 1, name: 'ホワイトレディ', price: 1200 })
    coctails.set(2, { id: 2, name: 'ブルーハワイ', price: 1200 })
    coctails.set(3, { id: 3, name: 'ニューヨーク', price: 1200 })
    coctails.set(4, { id: 4, name: 'マティーニ', price: 1200 })

    const cocktailNo = ref(1)
    const priceMsg = computed(() => {
      const cocktail = coctails.get(cocktailNo.value)
      if (cocktail == undefined) {
        return '該当するカクテルはありません。'
      } else {
        return `該当するカクテルは${cocktail.name}で、価格は${cocktail.price}です。`
      }
    })

    setInterval(() => (cocktailNo.value = Math.round(Math.random() * 3) + 1), 1000)

    return { cocktailNo, priceMsg }
  },
})


interface Cocktail {
  id: number
  name: string
  price: number
}
</script>

<template>
  <p>現在のカクテル番号：{{ cocktailNo }}</p>
  <p>{{ priceMsg }}</p>
</template>

<style scoped></style>
