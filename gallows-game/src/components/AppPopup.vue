<template>
  <div class="popup-container">
    <div class="popup">
      <h2 v-if="result === 'win'">Поздравляю, вы победили! 😃</h2>
      <h2 v-else>Вы проиграли. 😕</h2>
      <h3>...имя: {{ word }}</h3>
      <button>Сыграть еще раз</button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  result: 'win' | 'lose'
  word: string
}

const gameStatus = ref<Props | null>

defineProps<Props>()
</script>
