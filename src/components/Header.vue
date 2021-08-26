<template>
  <header class="header">
    <router-link :to="{ name: 'index' }">
      <img class="header__logo" src="../assets/img/zenb.svg" alt="logo">
    </router-link>
    <div @click="signIn">サインイン</div>
  </header>
</template>

<script setup>
import firebase from "firebase/app"
import "firebase/auth"
import { onMounted } from 'vue'

const provider = new firebase.auth.GoogleAuthProvider()
const signIn = () => {
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result.user)
    }).catch((error) => {
      console.log('認証エラー', error)
    })
}

const authListener = firebase.auth().onAuthStateChanged(function(user) {
  console.log(user +'でログイン中です')
})

onMounted(() => {
    authListener()
})
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
