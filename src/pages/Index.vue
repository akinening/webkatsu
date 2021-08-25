<template>
  <section class="hero">
    <img class="hero__logo" src="../assets/img/zenb-white.svg" alt="logo">
    <p class="hero__sub">部活動をオンラインでかんたんに。</p>
    <div class="action">
      <img class="action__btn" src="../assets/img/btn_create.png" alt="部活をつくる" @click="toggleFormModal">
      <router-link :to="{ name: 'clubs' }">
        <img class="action__btn" src="../assets/img/btn_enter.png" alt="部活に入る">
      </router-link>
    </div>
  </section>

  <transition name="modal" v-show="state.isOpen">
    <div class="overlay" @click.self="toggleModal">
      <div class="card">
        <img class="card__image" src="../assets/img/modal.png" alt="modal">
        <p class="card__text">
          この先は現在、開発中です。<br>
          事前アンケートにお答えいただくと<br>
          トライアル版開始時に、優先的にご招待いたします。
        </p>
        <a class="card__btn" href="https://tayori.com/form/44dd912aa78148fea8a5b933b4cfa5a14f34e544">アンケートに答える</a>
      </div>
    </div>
  </transition>

  <transition name="modal" v-show="state.isFormOpen">
    <div class="overlay" @click.self="toggleFormModal">
      <form class="form" @submit.prevent="createClub">
        <legend class="form__title">部活動団体 登録申請書</legend>
        <label class="form__label" for="club-name">1. 部の名前を決めましょう！</label>
        <input class="form__input" v-model="state.title" placeholder="◯◯部 または ◯◯サークル" required>

        <label class="form__label" for="club-name">2. 活動内容を教えてください！</label>
        <textarea class="form__input" v-model="state.description" placeholder="・架空大学の漫画研究会です。&#13;&#10;・株式会社イグザンプルの社内サークルです。&#13;&#10;・毎週月曜日にDiscordでもくもく会をやっています。&#13;&#10;など&#13;&#10;&#13;&#10;▼その他&#13;&#10;・部費: 500円/月&#13;&#10;・詳しくはTwitter @ZenbClub にお問い合わせください&#13;&#10;など" required></textarea>

        <label class="form__label" for="club-name">3. ヘッダー画像のURLを設定しましょう</label>
        <input class="form__input" v-model="state.image" placeholder="https://bosyu.club/assets/ogp.df83dc5a.png">

        <input class="form__submit" type="submit" value="部活を作成">
      </form>
    </div>
  </transition>

  <section class="feature">
    <img class="feature__image" src="../assets/img/friend.svg" alt="friend">
    <div class="feature__text">
      <h1 class="title">学生・社会人の皆さん、ようこそ！</h1>
      <p class="description">
        「Zenb」は、部活やサークルを<br>
        Web上で気軽に立ち上げられるサービスです。<br>
        <br>
        オフ会を開きたい！<br>
        ゲームでフレンドを募集したい！<br>
        クリエイターの仲間がほしい！<br>
        などなど・・・<br>
        ゆるっと繋がりたい方におすすめです。
      </p>
    </div>
  </section>

  <section class="club">
    <h1 class="c-title">部活動</h1>
    <ul class="myclubs">
      <li class="myclub" v-for="(club, num) in state.clubs.slice().reverse()" :key="`club-${num}`">
        <router-link :to="{ name: 'club', params: { id: club.id }}">
          <img v-if="club.image" class="myclub__image" :src="club.image" :alt="club.title">
          <img v-else class="myclub__image" src="../assets/img/ogp.png" :alt="club.title">
          <p class="myclub__title">{{club.title}}</p>
        </router-link>
      </li>
    </ul>
    <router-link class="club__btn" :to="{ name: 'clubs' }">
      すべての部活動
    </router-link>
  </section>

  <section class="category">
    <h1 class="c-title">人気のカテゴリ</h1>
    <div class="category__image" @click="toggleModal">カラオケ</div>
    <div class="category__image" @click="toggleModal">ボードゲーム</div>
    <div class="category__image" @click="toggleModal">スポーツ</div>
    <div class="category__image" @click="toggleModal">英会話</div>
    <div class="category__image" @click="toggleModal">食事・旅行</div>
    <div class="category__image" @click="toggleModal">プログラミング</div>
  </section>
</template>

<script setup>
import { reactive, onBeforeMount } from 'vue'
import { db } from '../main'

const state = reactive({
  isOpen: false,
  isFormOpen: false,
  title: '',
  image: '',
  description: '',
  clubs: []
})

onBeforeMount(() => {
  db.collection('clubs').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
      state.clubs.push({
        title: doc.data().title,
        image: doc.data().image,
        description: doc.data().description,
        id: doc.id
      })
    })
  }).catch((err) => {
    console.log(err)
  })
})

const toggleModal = () => {
  state.isOpen = !state.isOpen
}

const toggleFormModal = () => {
  state.isFormOpen = !state.isFormOpen
}

const createClub = () => {
  db.collection('clubs').add({
    title: state.title,
    image: state.image,
    description: state.description
  })
  .then(() => {
    state.isFormOpen = false
  })
  .catch((err) => {
    console.log(err)
  })
}

</script>

<style lang="stylus" scoped>
.c-title
  font-size 28px
  font-weight bold
  margin-bottom 44px

.hero
  width 100%
  height 545px
  margin-top 48px
  text-align center
  background #F3F6FF url(../assets/img/hero.png) no-repeat center center
  background-size cover

  &__logo
    width 240px
    margin-top 60px
  
  &__sub
    color white
    font-size 20px
    font-weight bold
    margin 0 20px

.action
  margin-top 160px

  &__btn
    margin 0 20px
    box-shadow 0px 8px 8px 0px rgba(0, 0, 0, 0.25)
    border-radius 100px
    cursor pointer
    transition box-shadow 0.2s

    &:hover
      transition box-shadow 0.2s
      box-shadow none

    @media (max-width: 768px)
      width 140px
      margin 0 8px

.overlay
  display flex
  align-items center
  justify-content center
  position fixed
  z-index 200
  top 0
  left 0
  width 100%
  height 100%
  background rgba(0, 0, 0, 0.25)

.card
  text-align center
  width 100%
  max-width 640px
  margin 20px
  background-color white
  border-radius 1000px
  font-weight bold
  overflow hidden

  &__image
    width 100%
  
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

.modal-enter-active, .modal-leave-active
  transition: opacity .2s

.modal-enter-from, .modal-leave-to
  opacity 0

.feature
  display flex
  flex-direction row
  justify-content center
  margin-top 60px

  @media (max-width: 768px)
    flex-direction column

  &__image
    width 40%

    @media (max-width: 768px)
      width 100%
  
  &__text
    margin 32px 0 0 20px

    @media (max-width: 768px)
      margin 32px 20px 20px

    & > .title
      font-size 28px
      font-weight bold
      margin-bottom 20px
    
    & > .description
      font-size 14px

.club
.category
  width 100%
  max-width 1080px
  margin 80px auto
  text-align center
  
  &__btn
    margin-top 48px
    padding 16px 48px
    display inline-block
    font-size 16px
    font-weight bold
    color white
    background-color #333
    border-radius 100px

    &:hover
      background-color #666

.myclubs
  display flex
  flex-wrap wrap
  justify-content space-between

.myclub
  width calc(20% - 16px)
  min-width 240px
  margin 0 8px

  &:nth-child(n+9)
    display none

  &__image
    width 100%
    height 135px
    object-fit cover

  &__title
    margin-bottom 20px
    font-size 16px
    font-weight bold

.category
  &__image
    display inline-block
    margin 8px
    padding 56px 0
    width 320px
    background #F3F6FF url(../assets/img/ogp_gray.png) no-repeat center center
    background-size cover
    color white
    font-size 28px
    font-weight bold
  
    &:hover
      opacity 80%

.form
  background-color white
  border-radius 16px
  margin 20px
  padding 20px 40px
  width 100%
  max-width 640px

  &__title
    margin-bottom 32px
    font-size 32px
    font-weight bold
    text-align center
    letter-spacing 0.04em

  &__label
    display block
    margin-bottom 8px
    font-size 16px
    font-weight bold

  &__input
    display block
    background-color #F3F6FF
    width 100%
    margin-bottom 32px
    padding 8px
    border-radius 4px
    font-size 16px

  &__submit
    display block
    margin 12px auto
    padding 16px 48px
    font-size 16px
    font-weight bold
    text-align center
    color white
    background-color #333
    border-radius 100px

    &:hover
      background-color #666
</style>
