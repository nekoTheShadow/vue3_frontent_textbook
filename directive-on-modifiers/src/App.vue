<script setup lang="ts">
import { ref } from 'vue';


const msg = ref("まだです");
const onEnterKey = () => msg.value = "エンターキーが押下されました";
const onRightButtonClick = () => msg.value = "ボタンが右クリックされました";
const onShiftClick = () => msg.value = "シフトを押しながらクリックされました";
</script>

<template>
  <p>{{ msg }}</p>
  <input type="text" v-on:keydown.enter="onEnterKey"></input>
  <br></br>
  <button v-on:click.right="onRightButtonClick">右クリック</button>
  <br></br>
  <button v-on:click.shift="onShiftClick">シフトを押しながらクリック</button>
</template>

<style scoped></style>
