<script setup lang="ts">
import { computed, provide, reactive, ref } from 'vue'
import OneMember from './components/OneMember.vue'
import type { Member } from './interface'
import BaseSection from './components/BaseSection.vue'

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
provide('members', reactive(members))
</script>

<template>
  <BaseSection></BaseSection>
</template>
