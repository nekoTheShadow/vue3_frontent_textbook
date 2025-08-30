<script setup lang="ts">
import { computed, ref } from 'vue'
import OneMember from './components/OneMember.vue'

interface Member {
  id: number
  name: string
  email: string
  points: number
  note?: string
}

const members = ref(
  new Map<number, Member>([
    [
      33456,
      {
        id: 33456,
        name: '田中太郎',
        email: 'bow@example.com',
        points: 35,
        note: '初回入会特典あり',
      },
    ],
    [47783, { id: 47783, name: '鈴木次郎', email: 'mue@example.com', points: 53 }],
  ]),
)
const totalPoints = computed(() => {
  let total = 0
  for (const member of members.value.values()) {
    total += member.points
  }
  return total
})
</script>

<template>
  <section>
    <h1>会員リスト</h1>
    <p>全会員の保有ポイントの合計：{{ totalPoints }}</p>
    <OneMember
      v-for="[id, member] in members"
      v-bind:key="id"
      v-bind:id="id"
      v-bind:name="member.name"
      v-bind:email="member.email"
      v-bind:points="member.points"
      v-bind:note="member.note"
    ></OneMember>
  </section>
</template>
