<script setup lang="ts">
// https://gihyo.jp/book/2022/978-4-297-13072-5/support

import {ref} from "vue";

const now = new Date();
const nowStr = now.toLocaleTimeString();
let timeStr = nowStr;
const timeStrRef = ref(nowStr);

function changeTime(): void {
  const newTime = new Date();
  const newTimeStr = newTime.toLocaleTimeString();
  timeStr = newTimeStr;
  timeStrRef.value = newTimeStr;
}

setInterval(changeTime, 1000);
</script>

<template>
  <p>現在時刻：{{ timeStr }}</p>
  <p>現在時刻（ref）：{{ timeStrRef }}</p>
</template>

