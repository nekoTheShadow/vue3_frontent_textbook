<script setup lang="ts">
import { inject } from 'vue'
import type { Member } from '@/interface'
import { RouterLink } from 'vue-router'

const memberList = inject('memberList') as Map<number, Member>
</script>

<template>
  <h1>会員管理</h1>
  <nav>
    <ul>
      <li>
        <RouterLink v-bind:to="{ name: 'AppTop' }">TOP</RouterLink>
      </li>
      <li>会員リスト</li>
    </ul>
  </nav>
  <section>
    <h2>会員リスト</h2>
    <p>新規追加は<RouterLink v-bind:to="{ name: 'MemberAdd' }">こちら</RouterLink>から</p>
    <ul>
      <li v-for="[id, member] in memberList" v-bind:key="id">
        <RouterLink v-bind:to="{ name: 'MemberDetail', params: { id: id } }">
          IDが{{ id }}の{{ member.name }}さん
        </RouterLink>
      </li>
    </ul>
  </section>
</template>
