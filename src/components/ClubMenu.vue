<template>
  <div class="header">
    <ul class="menu">
      <li class="menu__tab">
        <router-link :to="{ name: 'club', params: { id: route.params.id }}">部活動</router-link>
      </li>
      <li class="menu__tab">メンバー</li>
      <li class="menu__tab">イベント</li>
      <li class="menu__tab">
        <router-link :to="{ name: 'chat', params: { id: route.params.id }}">チャット</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style lang="stylus" scoped>
.header
  z-index 100
  position fixed
  top 48px
  left 0
  width 100%
  height 40px
  text-align center
  background-color white
  box-shadow 0px 0px 1px 0px rgba(0, 0, 0, 0.75)

.menu
  display block
  margin 0 auto
  font-weight bold
  color #999

  &__tab
    display inline-block
    margin 8px 36px
  
    &:hover
      color #333
</style>
