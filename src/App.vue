<template>
  <header class="header">
    <a href="/">
      <img class="header__logo" src="./assets/img/web.svg" alt="logo">
    </a>
  </header>

  <router-view></router-view>

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
</script>

<style lang="stylus">
@import 'assets/css/reset.css'
#app
  font-family 'Hiragino Kaku Gothic ProN', Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #333

.header
  z-index 100
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
</style>
