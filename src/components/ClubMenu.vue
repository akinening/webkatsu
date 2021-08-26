<template>
  <div class="nav">
    <ul class="menu">
      <li class="menu__tab">
        <router-link class="tab" :to="{ name: 'club', params: { id: route.params.id }}">
          <img class="tab__icon" src="../assets/img/top.svg" alt="">
          <p class="tab__label">トップ</p>
        </router-link>
      </li>
      <li class="menu__tab">
        <router-link :to="{ name: 'chat', params: { id: route.params.id }}">
          <img class="tab__icon" src="../assets/img/chat.svg" alt="">
          <p class="tab__label">タイムライン</p>
        </router-link>
      </li>
      <li class="menu__tab">
        <router-link :to="{ name: 'event', params: { id: route.params.id }}">
          <img class="tab__icon" src="../assets/img/event.svg" alt="">
          <p class="tab__label">イベント</p>
        </router-link>
      </li>
      <li class="menu__tab">
        <router-link :to="{ name: 'wiki', params: { id: route.params.id }}">
          <img class="tab__icon" src="../assets/img/wiki.svg" alt="">
          <p class="tab__label">Wiki</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style lang="stylus" scoped>
.nav
  z-index 100
  position fixed
  top 48px
  left 0
  width 100%
  height 64px
  text-align center
  background-color white
  box-shadow 0px 0px 1px 0px rgba(0, 0, 0, 0.75)

  @media (max-width: 768px)
    top auto
    bottom 0

.menu
  display block
  margin 0 auto
  width 100%
  max-width 960px

  &__tab
    display inline-block
    padding 8px

    @media (max-width: 768px)
      width 25%

.tab
  &__icon
    width 24px
    height 24px

  &__label
    font-size 11px

    @media (max-width: 768px)
      font-size 10px
</style>
