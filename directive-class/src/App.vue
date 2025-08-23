<script setup lang="ts">
import { computed, ref } from 'vue';

const msg = ref("こんちには！世界");
const isTextColorRed = ref(true);
const isBgColorBlue = ref(false);
const styles = ref({
  isTextColorRed: false,
  bgColorBlue: true
});
const computedStyles = computed(() => {
  const randText = Math.round(Math.random());
  let textColorFlg = randText == 1;

  const randBg = Math.round(Math.random());
  let bgColorFlg = randBg == 1;

  return {textColorRed: textColorFlg, bgColorBlue: bgColorFlg};
});
</script>

<template>
  <p v-bind:class="{textColorRed: true, bgColorBlue: true}">{{ msg }}</p>
  <p v-bind:class="{textColorRed: isTextColorRed, bgColorBlue: isBgColorBlue}">{{ msg }}</p>
  <p v-bind:class="{textColorPink: true}">{{ msg }}</p>
  <p v-bind:class="{'text-color-pink': true}">{{ msg }}</p>
  <p class="textSize24" v-bind:class="{textColorRed: isTextColorRed, bgColorBlue: isBgColorBlue}">{{ msg }}</p>
  <p class="textSize24" v-bind:class="styles">{{ msg }}</p>
  <p v-bind:class="computedStyles">{{ msg }}</p>
</template>

<style>
.textColorRed {
  color: red;
}
.text-color-pink {
  color: pink;
}
.bgColorBlue {
  background-color: blue;
}
.textSize24 {
  font-size: 24px;
}
</style>

<style scoped></style>
