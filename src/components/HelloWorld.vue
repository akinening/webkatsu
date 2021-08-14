<template>
  <h1>{{ msg }}</h1>

  <button type="button" @click="state.count++">
    count is: {{ state.count }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>

  <a class="tweet" href="https://twitter.com/share?url=https%3A%2F%2Fakinening.github.io%2Fwebkatsu%2F&text=%E3%80%8CWe%E9%83%A8%E3%80%8D%E3%81%AF%E3%80%81%E9%83%A8%E6%B4%BB%E3%82%84%E3%82%B5%E3%83%BC%E3%82%AF%E3%83%AB%E3%82%92Web%E4%B8%8A%E3%81%A7%E6%B0%97%E8%BB%BD%E3%81%AB%E7%AB%8B%E3%81%A1%E4%B8%8A%E3%81%92%E3%82%89%E3%82%8C%E3%82%8B%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%81%A7%E3%81%99%E3%80%82">
      ツイートする
  </a>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

<style scoped>
a {
  color: #42b983;
}

.tweet {
    text-decoration: none;
    display: inline-block;
    margin-top: 40px;
    padding: 10px 40px;
    color: white;
    background-color: #42b983;
    border-radius: 4px;
}
</style>
