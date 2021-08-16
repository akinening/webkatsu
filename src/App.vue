<template>
  <header class="header">
    <img class="header__logo" src="./assets/img/web.svg" alt="logo">
  </header>

  <section class="hero">
    <img class="hero__logo" src="./assets/img/web.svg" alt="logo">
    <p class="hero__sub">学生・社会人のためのオンライン部活サービス</p>
    <div class="action">
      <img class="action__btn" src="./assets/img/btn_create.png" alt="部活をつくる" @click="toggleModal">
      <img class="action__btn" src="./assets/img/btn_enter.png" alt="部活に入る" @click="toggleModal">
    </div>
  </section>

  <transition name="modal" v-show="state.isOpen">
    <div class="overlay" @click.self="toggleModal">
      <div class="card">
        <img class="card__image" src="./assets/img/modal.png" alt="modal">
        <p class="card__text">
          この先は現在、開発中です。<br>
          事前アンケートにお答えいただくと<br>
          トライアル版開始時に、優先的にご招待いたします。
        </p>
        <a class="card__btn" href="https://tayori.com/form/44dd912aa78148fea8a5b933b4cfa5a14f34e544">アンケートに答える</a>
      </div>
    </div>
  </transition>

  <section class="feature">
    <img class="feature__image" src="./assets/img/friend.svg" alt="friend">
    <div class="feature__text">
      <h1 class="title">学生・社会人の皆さん、ようこそ！</h1>
      <p class="description">
        「We部」は、部活やサークルを<br>
        Web上で気軽に立ち上げられるサービスです。<br>
        <br>
        オフ会を開きたい！<br>
        ゲームでフレンドを募集したい！<br>
        クリエイターの仲間がほしい！<br>
        などなど・・・<br>
        ゆるっと繋がりたい方におすすめです。
      </p>
    </div>
  </section>

  <section class="club">
    <h1 class="c-title">部活動</h1>
    <ul class="myclubs">
      <li class="myclub" v-for="(club, num) in state.clubs" :key="`club-${num}`">
        <img class="myclub__image" src="./assets/img/ogp.png" :alt="club.title">
        <p class="myclub__title">{{club.title}}</p>
      </li>
    </ul>
    <div class="club__btn" @click="toggleModal">すべての部活動</div>
  </section>

  <section class="category">
    <h1 class="c-title">人気のジャンル</h1>
    <img class="category__image" src="./assets/img/ogp_gray.png" alt="">
  </section>

  <footer class="footer">
    <img class="footer__logo" src="./assets/img/web-white.svg" alt="logo">
    <p class="footer__sub">学生・社会人のための部活サービス</p>
    <ul class="menu">
      <li class="menu__list">利用規約</li>
      <li class="menu__list">プライバシーポリシー</li>
      <li class="menu__list">
        <a href="https://twitter.com/webukatsu" target="_blank">Twitter</a>
      </li>
    </ul>
  </footer>
</template>

<script setup>
// import HelloWorld from './components/HelloWorld.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md

import { reactive } from 'vue'

const state = reactive({
  isOpen: false,
  clubs: [
    { title: '寿司を食べる会' },
    { title: '海の家オフ' },
    { title: '英会話サークル EngVillage' },
    { title: '漫研Online' },
    { title: 'ポケカ相手募集' },
    { title: '兵庫でバスケしませんか' },
    { title: 'Swiftもくもく会' },
    { title: '【神田】飲み仲間募集中' }
  ]
})
const toggleModal = () => {
  state.isOpen = !state.isOpen
}

</script>

<style lang="stylus">
@import 'assets/css/reset.css'
#app
  font-family 'Hiragino Kaku Gothic ProN', Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #333

.c-title
  font-size 28px
  font-weight bold
  margin-bottom 44px

.header
  position fixed
  top 0
  left 0
  width 100%
  height 48px
  text-align center
  background-color white
  box-shadow 0px 0px 1px 0px rgba(0, 0, 0, 0.75)

  &__logo
    height 36px
    margin 6px 0
    opacity 20%

.hero
  width 100%
  height 545px
  margin-top 48px
  text-align center
  background #F3F6FF url(assets/img/hero.png) no-repeat center center
  background-size cover

  &__logo
    width 240px
    margin-top 60px
    opacity 80%
  
  &__sub
    font-size 20px
    font-weight bold

.action
  margin-top 160px

  &__btn
    margin 0 20px
    box-shadow 0px 8px 8px 0px rgba(0, 0, 0, 0.25)
    border-radius 100px
    cursor pointer
    transition box-shadow 0.2s

    &:hover
      transition box-shadow 0.2s
      box-shadow none

.overlay
  display flex
  align-items center
  justify-content center
  position fixed
  z-index 200
  top 0
  left 0
  width 100%
  height 100%
  background rgba(0, 0, 0, 0.25)

.card
  text-align center
  width 100%
  max-width 640px
  margin 20px
  background-color white
  border-radius 1000px
  font-weight bold
  overflow hidden

  &__image
    width 100%
  
  &__text
    margin 32px
  
  &__btn
    margin-bottom 32px
    padding 16px 48px
    display inline-block
    font-size 16px
    color white
    background-color #333
    border-radius 100px

    &:hover
      background-color #666

.modal-enter-active, .modal-leave-active
  transition: opacity .2s

.modal-enter-from, .modal-leave-to
  opacity 0

.feature
  display flex
  justify-content center
  margin-top 60px

  &__image
    width 40%
  
  &__text
    margin 32px 0 0 20px

    & > .title
      font-size 28px
      font-weight bold
      margin-bottom 20px
    
    & > .description
      font-size 14px

.club
.category
  width 100%
  max-width 1080px
  margin 80px auto
  text-align center

  &__image
    width 33%
  
  &__btn
    margin-top 48px
    padding 16px 48px
    display inline-block
    font-size 16px
    font-weight bold
    color white
    background-color #333
    border-radius 100px

    &:hover
      background-color #666

.myclubs
  display flex
  flex-wrap wrap
  justify-content space-between

.myclub
  width calc(20% - 16px)
  min-width 240px
  margin 0 8px

  &__image
    width 100%
    
  &__title
    margin-bottom 20px
    font-size 16px
    font-weight bold

.footer
  width 100%
  height 270px
  background-color #333

  &__logo
    height 48px
    margin 60px 0 0 120px

  &__sub
    margin-left 120px
    font-size 12px
    font-weight bold
    color white

.menu
  display flex
  margin 40px 0 0 120px

  &__list
    color #aaa
    margin-right 40px
    font-size 14px
</style>
