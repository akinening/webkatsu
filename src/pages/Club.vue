<template>
  <section class="hero">
    <img class="hero__image" :src="state.image" :alt="state.title">
  </section>

  <div class="message">
    <p class="message__text">
      この先は現在、開発中です。<br>
      事前アンケートにお答えいただくと<br>
      トライアル版開始時に、優先的にご招待いたします。
    </p>
    <a class="message__btn" href="https://tayori.com/form/44dd912aa78148fea8a5b933b4cfa5a14f34e544">アンケートに答える</a>
  </div>
</template>

<script setup>
import { reactive, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { db } from '../main'

const route = useRoute()

const state = reactive({
  title: '',
  image: '',
})

onBeforeMount(() => {
  const id = route.params.id
  console.log(id)
  db.collection('clubs').doc(id).get().then(snapshot => {
    state.title = snapshot.data().title
    state.image = snapshot.data().image
  }).catch((err) => {
    console.log(err)
  })
})
</script>

<style lang="stylus" scoped>
.hero
  margin-top 64px

  &__image
    display block
    width 100%
    height 360px    
    max-width 640px
    margin 0 auto
    border-radius 8px
    background-color #F3F6FF
    object-fit cover

.message
  text-align center
  width 100%
  margin 0 auto
  max-width 640px
  font-weight bold
  
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
</style>
