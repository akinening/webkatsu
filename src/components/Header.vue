<template>
  <header class="header">
    <router-link to="/">
      <img class="header__logo" src="../assets/img/web.svg" alt="logo">
    </router-link>
  </header>
</template>

<script setup>

</script>

<style lang="stylus" scoped>
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
</style>
