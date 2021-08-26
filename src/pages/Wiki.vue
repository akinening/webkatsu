<template>
  <ClubMenu />

  <div class="space">
    <div class="doc" v-for="(doc, num) in state.docs" :key="`doc-${num}`">
      <p class="doc__title">{{doc.title}}</p>
      <p class="doc__date">{{doc.date}}</p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import ClubMenu from '../components/ClubMenu.vue'

const state = reactive({
  docs: [
    {
      title: '運営方針について',
      date: '2021/09/26'
    },
    {
      title: '部活動予算について',
      date: '2021/08/26'
    }
  ]
})

</script>

<style lang="stylus" scoped>
.space
  background-color #F1F6FB
  padding 48px 0

.doc
  width 100%
  margin 16px auto
  padding 24px
  max-width 960px
  display flex
  background-color white
  border-radius 8px
  word-break break-all

  &__title
    font-size 16px
    font-weight bold

  &__date
    font-size 12px
    color #999

</style>
