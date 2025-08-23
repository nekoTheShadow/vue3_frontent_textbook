<script setup lang="ts">
import {ref} from "vue";

const imgAtributes = ref({
  src:"/images/logo.svg",
  alt:"Vueのロゴ",
  width:75,
  height:75
});
</script>

<template>
  <p><img v-bind="imgAtributes"></img></p>
  <p><img v-bind="imgAtributes" title="ロゴです！"></img></p>
  <p><img v-bind="imgAtributes" alt="ロゴです！"></img></p>
</template>

<style scoped></style>
