<template>
  <Header />
  <router-view></router-view>
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
</style>
