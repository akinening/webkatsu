<template>
  <header class="header">
    <img class="header__logo" src="./assets/img/web.svg" alt="logo">
  </header>

  <section class="hero">
    <img class="hero__logo" src="./assets/img/web.svg" alt="logo">
    <p class="hero__sub">学生・社会人のための部活サービス</p>
  </section>

  <!-- <HelloWorld msg="We部 予定地" /> -->
</template>

<script setup>
// import HelloWorld from './components/HelloWorld.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
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
</style>
