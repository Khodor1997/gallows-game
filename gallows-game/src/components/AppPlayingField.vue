<template>
  <div class="word">
    <span v-for="(item, index) in word" :key="index" class="letter">
      {{ item.includes(latter) ? latter : '' }}</span
    >
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue'

interface Props {
  word: string
  latter: string
}

defineProps<Props>()
</script>
