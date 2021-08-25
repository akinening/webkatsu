<template>
  <Header />

  <router-view></router-view>

  <footer class="footer">
    <router-link :to="{ name: 'index' }">
      <img class="footer__logo" src="./assets/img/zenb-white.svg" alt="logo">
    </router-link>
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
import Header from './components/Header.vue'
</script>

<style lang="stylus">
@import 'assets/css/reset.css'

#app
  font-family 'Hiragino Kaku Gothic ProN', Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #333

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
