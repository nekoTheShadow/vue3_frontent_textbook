<script setup lang="ts">
import { computed, inject } from 'vue'
import type { Member } from '../interface'

const members = inject('members') as Map<number, Member>
const totalPoints = computed(() => {
  let total = 0
  for (const member of members.values()) {
    total += member.points
  }
  return total
})
</script>

<template>
  <section>
    <h1>会員リスト</h1>
    <p>全会員の保有ポイントの合計：{{ totalPoints }}</p>
    <OneMember v-for="id in members.keys()" v-bind:key="id" v-bind:id="id"></OneMember>
  </section>
</template>
