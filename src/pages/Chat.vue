<template>
  <div class="space">
    <div class="chat" v-for="n of 6" :key="`chat-${n}`">
      <img class="chat__icon" src="../assets/img/dummy-icon.png" alt="chat icon">
      <p class="chat__text">
        部員の皆様<br>
        参加いただき、ありがとうございます。この先は現在、開発中です。下記アンケートにお答えいただくと、トライアル版開始時に優先的にご招待いたします。<br>
        https://tayori.com/form/44dd912aa78148fea8a5b933b4cfa5a14f34e544
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { db } from '../main'

const route = useRoute()

// const state = reactive({
//   title: '',
//   image: '',
// })

// onBeforeMount(() => {
//   const id = route.params.id
//   console.log(id)
//   db.collection('clubs').doc(id).get().then(snapshot => {
//     state.title = snapshot.data().title
//     state.image = snapshot.data().image
//   }).catch((err) => {
//     console.log(err)
//   })
// })
</script>

<style lang="stylus" scoped>
.space
  background-color #F1F6FB
  padding 72px 0

.chat
  width 100%
  margin 16px auto
  padding 24px
  max-width 960px
  display flex
  background-color white
  border-radius 8px

  &__icon
    width 64px
    height 64px
    margin-right 12px
    border-radius 100px

  &__text
    font-size 14px
</style>
