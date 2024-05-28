<template>
  <div v-for="item in word">
    <span>item</span>
  </div>
  <AppHeader />
  <div class="game-container">
    <AppGamePerson />
    <AppWrongLetters />
    <AppPlayingField :word="word" :latter="latter" />
  </div>

  <AppPopup v-if="false" />

  <!-- Notification -->
  <div class="notification-container show">
    <p>Вы уже вводили этот символ</p>
  </div>
</template>
<script setup lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppGamePerson from './components/AppGamePerson.vue'
import AppWrongLetters from './components/AppWrongLetters.vue'
import AppPlayingField from './components/AppPlayingField.vue'
import AppPopup from './components/AppPopup.vue'

const word = ref('арина')
const latter = ref('а')

onMounted(() => {
  console.log('примонтирован!', word.value)
})
</script>
