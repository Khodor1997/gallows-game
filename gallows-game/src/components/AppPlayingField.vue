<template>
  <div class="word">
    <span v-for="(item, index) in word" :key="index" class="letter">
      {{ correctLetters.includes(item) ? item : '' }}</span
    >
  </div>
</template>

<script setup lang="ts">

interface Props {
  word: string
  correctLetters: string[]
}

defineProps<Props>()
</script>
