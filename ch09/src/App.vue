<script setup lang="ts">
import SlotBasic from './slot-basic/App.vue'
import SlotFallback from './slot-fallback/App.vue'
import SlotDatascope from './slot-datascope/App.vue'
import SlotDynamic from './slot-dynamic/App.vue'
import SlotNamed from './slot-named/App.vue'
</script>

<template>
  <SlotBasic></SlotBasic>
  <SlotFallback></SlotFallback>
  <SlotDatascope></SlotDatascope>
  <SlotDynamic></SlotDynamic>
  <SlotNamed></SlotNamed>
</template>

<style scoped></style>
