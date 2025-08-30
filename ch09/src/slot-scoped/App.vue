<script setup lang="ts">
import OneSection from './components/OneSection.vue'
</script>

<template>
  <section>
    <OneSection>
      <template v-slot:default="slotProps">
        <dl>名前</dl>
        <dd>{{ slotProps.memberInfo.name }}</dd>
        <dl>状況</dl>
        <dd>{{ slotProps.memberInfo.state }}</dd>
      </template>
    </OneSection>
  </section>
</template>
