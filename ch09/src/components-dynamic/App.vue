<script setup lang="ts">
import { ref } from 'vue'
import Input from './components/Input.vue'
import Radio from './components/Radio.vue'
import Select from './components/Select.vue'

const currentComp = ref(Input)
const currentCompName = ref('Input')

const compList = [Input, Radio, Select]
const compNameList = ['Input', 'Radio', 'Select']
let currentCompIndex = 0
const switchComp = () => {
  currentCompIndex++
  if (currentCompIndex >= 3) {
    currentCompIndex = 0
  }
  currentComp.value = compList[currentCompIndex]
  currentCompName.value = compNameList[currentCompIndex]
}
</script>

<template>
  <p>コンポーネント名：{{ currentCompName }}</p>
  <KeepAlive>
    <component v-bind:is="currentComp"></component>
  </KeepAlive>
  <button v-on:click="switchComp">切り替え</button>
</template>
