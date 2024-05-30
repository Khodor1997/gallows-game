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

  <AppPopup v-if="isWin || isLose" :result="popup" :word='word' />

  <!-- Notification -->
  <div class="notification-container show">
    <p>Вы уже вводили этот символ</p>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppGamePerson from './components/AppGamePerson.vue'
import AppWrongLetters from './components/AppWrongLetters.vue'
import AppPlayingField from './components/AppPlayingField.vue'
import AppPopup from './components/AppPopup.vue'

const word = ref('арина')
const letters = ref<string[]>([])
const correctLetters = computed(() => letters.value.filter(x => word.value.includes(x)))
const wrongLetters = computed(() => letters.value.filter(x => !word.value.includes(x)))

const isWin = computed(() => [...word.value].every((x) => correctLetters.value.includes(x)))
const isLose = computed(() => wrongLetters.value.length >= 6)
const popup:any = ref(null)

watch(correctLetters, () => {
  if (isWin.value) {
    popup.value = 'win'
  }
})

watch(wrongLetters, () => {
  if (isLose.value) {
    popup.value = 'lose'
  }
})


window.addEventListener('keydown', ({ key }) => {
  if (/[а-яА-ЯёЁ]/.test(key)) {
    letters.value.push(key.toLowerCase())
  }
})
</script>
