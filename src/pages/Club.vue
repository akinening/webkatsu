<template>
  <div class="club">
    <img class="image" :src="state.image" :alt="state.title">
    <div class="info">
      <h1 class="info__title">{{state.title}}</h1>
      <p class="info__member">代表: </p>
      <a class="btn btn--enter" href="https://tayori.com/form/44dd912aa78148fea8a5b933b4cfa5a14f34e544">入部する</a>
    </div>
  </div>

  <div class="desc">
    <div class="desc__text">
      <h2>概要</h2>
      <p>
        琉球王国において漢学などの学問と共に士族の嗜みであった空手道は、大正時代に沖縄県から他の都道府県に伝えられ、昭和8年（1933年）に大日本武徳会において日本の武道として正式承認を受け、沖縄に大日本武徳会の支部が置かれる[3]。さらに第二次世界大戦後は世界各地に広まった。現在普及している空手道は、試合方式の違いから、寸止めルールを採用する伝統派空手と直接打撃制ルールを採用するフルコンタクト空手、防具を着用してポイント制の直接打撃行う防具付き空手などに大別できる。<br>
        <br>
        今日の空手道は打撃技を主体とする格闘技であるが、沖縄古来の空手道には取手（トゥイティー、とりて）、掛手（カキティー、かけて）と呼ばれる関節技や投げ技や掛け掴み技も含んでいた[4]。また、かつては空手道以外に棒術、釵術、ヌンチャク術といった武器術も併せて修行するのが一般的であった。沖縄では現在でも多くの沖縄系流派が古来の技術と鍛錬法を維持しているが、最近の本土系の流派では失伝した技を他の武術から取り入れて補う形で、総合的な体術への回帰、あるいは新たな総合武道へ発展を目指す流派・会派も存在する。
      </p>
    </div>
  </div>

  <div class="message">
    <p class="message__text">
      この先は現在、開発中です。<br>
      事前アンケートにお答えいただくと<br>
      トライアル版開始時に、優先的にご招待いたします。
    </p>
    <a class="btn" href="https://tayori.com/form/44dd912aa78148fea8a5b933b4cfa5a14f34e544">アンケートに答える</a>
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
.club
  margin 72px auto 0
  max-width 960px

.image
  display block
  width 100%
  height 480px  
  border-radius 8px
  background-color #F3F6FF
  object-fit cover

.info
  position relative
  margin 20px 0

  &__title
    font-size 32px
    font-weight bold

  &__member
    color #999

.desc
  width 100%
  padding 72px 0
  background-color #F1F6FB

  &__text
    display block
    margin 0 auto
    padding 24px
    max-width 960px
    background-color white
    border-radius 8px

.message
  text-align center
  width 100%
  margin 0 auto
  max-width 640px
  font-weight bold
  
  &__text
    margin 32px
  
.btn
  margin-bottom 32px
  padding 16px 48px
  display inline-block
  font-size 16px
  color white
  background-color #333
  border-radius 100px

  &:hover
    background-color #666
  
  &--enter
    position absolute
    top 0
    right 0
</style>
