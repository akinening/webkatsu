<template>
  <header class="header">
    <img class="header__logo" src="./assets/img/web.svg" alt="logo">
  </header>

  <section class="hero">
    <img class="hero__logo" src="./assets/img/web.svg" alt="logo">
    <p class="hero__sub">学生・社会人のための部活サービス</p>
    <div class="action">
      <img class="action__btn" src="./assets/img/btn_create.png" alt="部活をつくる" @click="toggleModal">
      <img class="action__btn" src="./assets/img/btn_enter.png" alt="部活に入る" @click="toggleModal">
    </div>
  </section>

  <transition name="modal" appear v-if="state.isOpen">
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
</template>

<script setup>
// import HelloWorld from './components/HelloWorld.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md

import { reactive } from 'vue'

const state = reactive({ isOpen: false })
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

.header
  position fixed
  top 0
  left 0
  width 100%
  height 48px
  text-align center
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

.modal-enter-active, .modal-leave-active
  transition: opacity .25s

.modal-enter, .modal-leave-to
  opacity 0
</style>
