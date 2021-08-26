<template>
  <ClubMenu />

  <div class="space">
    <div class="" v-for="(doc, num) in state.docs" :key="`doc-${num}`">
      {{ doc }}
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import ClubMenu from '../components/ClubMenu.vue'

const state = reactive({
  docs: [ 'データが', 'ありません' ]
})

</script>

<style lang="stylus" scoped>
.space
  background-color #F1F6FB
  padding 88px 0

</style>
