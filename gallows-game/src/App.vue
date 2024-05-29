<template>
  <AppHeader />
  <div class="game-container">
    <div>{{ letters }}</div>
    <div> {{ wrongLetters }}</div>
    <div> {{ correctLetters }} </div>
    <AppGamePerson :wrong-letters="wrongLetters"/>
    <AppWrongLetters :wrong-letters="wrongLetters" />
    <AppPlayingField :word="word" :correct-letters="correctLetters" />
  </div>

  <AppPopup v-if="endGame" />

  <!-- Notification -->
  <div class="notification-container show">
    <p>Вы уже вводили этот символ</p>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppGamePerson from './components/AppGamePerson.vue'
import AppWrongLetters from './components/AppWrongLetters.vue'
import AppPlayingField from './components/AppPlayingField.vue'
import AppPopup from './components/AppPopup.vue'

const word = ref('арина')
const letters = ref<string[]>([])
const correctLetters = computed(() => letters.value.filter(x => word.value.includes(x)))
const wrongLetters = computed(() => letters.value.filter(x => !word.value.includes(x)))
const endGame = computed(() => {
  console.log(word.value, '111111111')
  console.log(correctLetters.value, '22222222')

  if (wrongLetters.value.length >= 6) {
    return 'lose'
  } if (word.value === correctLetters.value.join('')) {
    return 'win'
  }
})


window.addEventListener('keydown', ({ key }) => {
  if (/[а-яА-ЯёЁ]/.test(key)) {
    letters.value.push(key.toLowerCase())
  }
})
</script>
