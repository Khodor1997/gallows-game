<template>
  <AppHeader />
  <div class="game-container">
    <AppGamePerson :wrong-letters="wrongLetters" />
    <AppWrongLetters :wrong-letters="wrongLetters" />
    <AppPlayingField :word="word" :correct-letters="correctLetters" />
    <AppNotification ref="notification" />
  </div>

  <AppPopup :word="word" @restart="restart" ref="popup" />
</template>
<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppGamePerson from './components/AppGamePerson.vue'
import AppWrongLetters from './components/AppWrongLetters.vue'
import AppPlayingField from './components/AppPlayingField.vue'
import AppPopup from './components/AppPopup.vue'
import AppNotification from './components/AppNotification.vue'
import { getRandomName } from './api/getRandomName'

const word = ref('арина')
const getRandomWord = async () => {
  try {
    const name = await getRandomName()
    word.value = name.toLowerCase()
  } catch (err) {
    console.log(err)
    word.value = ''
  }
}

getRandomWord()

const letters = ref<string[]>([])
const correctLetters = computed(() => letters.value.filter((x) => word.value.includes(x)))
const wrongLetters = computed(() => letters.value.filter((x) => !word.value.includes(x)))

const isWin = computed(() => [...word.value].every((x) => correctLetters.value.includes(x)))
const isLose = computed(() => wrongLetters.value.length >= 6)
const notification = ref<InstanceType<typeof AppNotification> | null>(null)
const popup = ref<InstanceType<typeof AppPopup> | null>(null)
// const popup: any = ref(null)

watch(correctLetters, () => {
  if (isWin.value) {
    popup.value?.open('win')
  }
})

watch(wrongLetters, () => {
  if (isLose.value) {
    popup.value?.open('lose')
  }
})

window.addEventListener('keydown', ({ key }) => {
  if (isLose.value || isWin.value) {
    return
  }
  if (letters.value.includes(key)) {
    notification.value?.open()
    setTimeout(() => {
      notification.value?.close()
    }, 2000)
  }

  if (/[а-яА-ЯёЁ]/.test(key)) {
    letters.value.push(key.toLowerCase())
  }
})

const restart = async () => {
  await getRandomWord()
  letters.value = []
  popup.value?.close()
}
</script>
