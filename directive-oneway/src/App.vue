<script setup lang="ts">
import {ref} from "vue";

const inputNameBind = ref("しんちゃん");
const inputNameOn = ref("ななし");
const onInputName = (event: Event) => {
  const element = event.target as HTMLInputElement;
  inputNameOn.value = element.value;
}
</script>

<template>
  <section>
    <input type="text" v-bind:value="inputNameBind"></input>
  </section>
  <br></br>
  <section>
    <input type="text" v-on:input="onInputName"></input>
    <p>{{ inputNameOn }}</p>
  </section>
</template>

<style scoped></style>
