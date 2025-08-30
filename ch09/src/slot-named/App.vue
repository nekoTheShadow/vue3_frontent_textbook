<script setup lang="ts">
import { ref } from 'vue'
import OneSection from './components/OneSection.vue'

const taro = ref('田中太郎')
const taroProblems = ref(['電話が通じません', '留守です'])
const jiro = ref('鈴木次郎')
</script>

<template>
  <section>
    <h2>Slotの利用</h2>
    <OneSection v-bind:name="taro">
      <template v-slot:default>
        <p>問題発生</p>
      </template>
      <template v-slot:detail>
        <ul>
          <li v-for="problem in taroProblems" v-bind:key="problem">{{ problem }}</li>
        </ul>
      </template>
    </OneSection>
    <OneSection v-bind:name="jiro"></OneSection>
  </section>
</template>
