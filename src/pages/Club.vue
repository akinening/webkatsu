<template>
  <ClubMenu />

  <div class="club">
    <img v-if="state.image" class="image" :src="state.image" :alt="state.title">
    <img v-else class="image" src="../assets/img/ogp.png" :alt="state.title">
    <div class="info">
      <h1 class="info__title">{{state.title}}</h1>
      <p class="info__member">代表: ゲスト</p>
      <a class="btn btn--enter" href="https://tayori.com/form/44dd912aa78148fea8a5b933b4cfa5a14f34e544">入部する</a>
    </div>
  </div>

  <div class="desc">
    <p class="desc__text" v-if="state.description">{{ state.description }}</p>
    <div class="desc__nothing" v-else>
      <img src="../assets/img/404cat.svg" alt="no data">
      <p>まだ活動内容がありません</p>
    </div>

    <div class="links">
      <a class="links__btn" href="http://twitter.com/share?url=https://bosyu.club/&text=Zenb">ツイートする</a>
      <a class="links__btn" :href="'https://social-plugins.line.me/lineit/share?url=https://bosyu.club' + $route.path">LINEでシェア</a>
    </div>
  </div>
</template>

<script setup>
import { reactive, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { db } from '../main'
import ClubMenu from '../components/ClubMenu.vue'

const state = reactive({
  title: '',
  image: '',
  description: '',
  id: ''
})

const route = useRoute()
state.id = route.params.id

onBeforeMount(() => {
  db.collection('clubs').doc(state.id).get().then(snapshot => {
    state.title = snapshot.data().title
    state.image = snapshot.data().image
    state.description = snapshot.data().description
  }).catch((err) => {
    console.log(err)
  })
})
</script>

<style lang="stylus" scoped>
.club
  margin 132px auto 0
  max-width 960px

  @media (max-width: 768px)
    margin-top 48px

.image
  display block
  width 100%
  height 480px  
  border-radius 8px
  background-color #F3F6FF
  object-fit cover

  @media (max-width: 768px)
    height 240px
    border-radius 0

.info
  position relative
  margin 20px 0

  &__title
    font-size 32px
    font-weight bold

  &__member
    color #999

.desc
  width 100%
  padding 20px 0
  background-color #F1F6FB

  &__text
  &__nothing
    display block
    margin 0 auto
    padding 24px
    max-width 960px
    background-color white
    border-radius 8px

  &__text
    white-space pre-wrap

  &__nothing
    text-align center

    & > img
      display inline-block
      max-width 480px
      margin -24px 0
    
    & > p
      font-weight bold

.links
  display block
  margin 16px auto 0
  padding 24px
  max-width 960px
  background-color white
  border-radius 8px

  &__btn
    margin-right 16px
    padding 16px 24px
    display inline-block
    font-size 16px
    font-weight bold
    color white
    background-color #333
    border-radius 8px

    &:hover
      background-color #666

.btn
  margin 32px 0
  padding 16px 48px
  display inline-block
  font-size 16px
  font-weight bold
  color white
  background-color #333
  border-radius 100px

  &:hover
    background-color #666
  
  &--enter
    position absolute
    bottom 0
    right 0
    margin 0

    @media (max-width: 768px)
      margin-right 20px
</style>
