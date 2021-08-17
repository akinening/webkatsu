<template>
  <section class="club">
    <h1 class="c-title">部活動</h1>
    <ul class="myclubs">
      <li class="myclub" v-for="(club, num) in state.clubs.slice().reverse()" :key="`club-${num}`">
        <router-link :to="'/club/' + club.id">
          <img v-if="club.image" class="myclub__image" :src="club.image" :alt="club.title">
          <img v-else class="myclub__image" src="../assets/img/ogp.png" :alt="club.title">
          <p class="myclub__title">{{club.title}}</p>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { reactive, onBeforeMount } from 'vue'
import { db } from '../main'

const state = reactive({
  title: '',
  image: '',
  clubs: []
})

onBeforeMount(() => {
  db.collection('clubs').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
      state.clubs.push({
        title: doc.data().title,
        image: doc.data().image,
        id: doc.id
      })
    })
  }).catch((err) => {
    console.log(err)
  })
})

</script>

<style lang="stylus" scoped>
.c-title
  font-size 28px
  font-weight bold
  margin-bottom 44px

.club
  width 100%
  max-width 1080px
  margin 80px auto
  text-align center

.myclubs
  display flex
  flex-wrap wrap
  justify-content space-between

.myclub
  width calc(20% - 16px)
  min-width 240px
  margin 0 8px

  &__image
    width 100%
    height 135px
    object-fit cover

  &__title
    margin-bottom 20px
    font-size 16px
    font-weight bold

</style>
