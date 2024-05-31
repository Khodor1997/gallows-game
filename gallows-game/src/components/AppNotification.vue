<template>
  <div v-if="isVisible" class="notification-container show">
    <p>Вы уже вводили этот символ</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isVisible = ref(false)

const open = () => {
  isVisible.value = true
}
const close = () => {
  isVisible.value = false
}
defineExpose({
  open,
  close
})
</script>
