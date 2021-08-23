<template>
  <ClubMenu />

  <div class="space">
    <form class="form" @submit.prevent="postChat">
      <textarea class="form__input" v-model="state.text" placeholder="チャットを入力" required></textarea>
      <input class="form__submit" type="submit" value="送信">
    </form>

    <div class="chat" v-for="(chat, num) in state.chats.slice().reverse()" :key="`chat-${num}`">
      <img class="chat__icon" src="../assets/img/dummy-icon.png" alt="chat icon">
      <p class="chat__text">{{chat}}</p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import ClubMenu from '../components/ClubMenu.vue'

const state = reactive({
  text: '',
  chats: [
    '部員の皆様',
    '参加いただき、ありがとうございます。この先は現在、開発中です。下記アンケートにお答えいただくと、トライアル版開始時に優先的にご招待いたします。',
    'https://tayori.com/form/44dd912aa78148fea8a5b933b4cfa5a14f34e544'
  ]
})

const postChat = () => {
  state.chats.push(state.text)
  state.text = ''
}

</script>

<style lang="stylus" scoped>
.space
  background-color #F1F6FB
  padding 72px 0

.form
  position relative
  margin 16px auto
  padding 16px 20px 64px
  width 100%
  max-width 960px
  background-color white
  border-radius 8px

  &__input
    display block
    width 100%
    padding 8px
    font-size 16px

  &__submit
    position absolute
    right 20px
    bottom 12px
    padding 8px 32px
    font-size 16px
    font-weight bold
    text-align center
    color white
    background-color #333
    border-radius 100px

    &:hover
      background-color #666

.chat
  width 100%
  margin 16px auto
  padding 24px
  max-width 960px
  display flex
  background-color white
  border-radius 8px

  @media (max-width: 768px)
    margin 16px

  &__icon
    width 64px
    height 64px
    margin-right 12px
    border-radius 100px

  &__text
    font-size 14px
    word-break break-all

</style>
