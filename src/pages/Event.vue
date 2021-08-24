<template>
  <ClubMenu />

  <div class="space">
    <div class="event" v-for="(event, num) in state.events" :key="`event-${num}`">
      <img class="event__image" :src="event.image" :alt="event.title">
      <div class="event__info">
        <p class="date">{{event.date}}</p>
        <p class="title">{{event.title}}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import ClubMenu from '../components/ClubMenu.vue'

const state = reactive({
  events: [
    {
      date: '2021/09/29(金)',
      title: '東京ボードゲーム会 @八王子',
      image: 'https://cdn.pixabay.com/photo/2015/05/23/08/02/playing-cards-780325_1280.jpg'
    },
    {
      date: '2021/09/22(金)',
      title: '第12回 Zoom人狼',
      image: 'https://cdn.pixabay.com/photo/2015/05/23/08/02/playing-cards-780325_1280.jpg'
    },
    {
      date: '2021/09/15(金)',
      title: '【ボカロ限定】カラオケオフ会 in 秋葉原',
      image: 'https://cdn.pixabay.com/photo/2015/05/23/08/02/playing-cards-780325_1280.jpg'
    },
  ]
})
</script>

<style lang="stylus" scoped>
.space
  background-color #F1F6FB
  padding 88px 0

.event
  position relative
  margin 16px auto
  padding 16px
  width 100%
  max-width 960px
  background-color white
  border-radius 8px

  &__image
    position absolute
    top 16px
    left 16px
    width 216px
    height 144px
    border-radius 4px
  
  &__info
    display block
    margin-left 232px
    height 144px
</style>
