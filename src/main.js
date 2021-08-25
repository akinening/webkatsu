import { createApp } from 'vue'
import App from './App.vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
import router from './router'
import { registerSW } from 'virtual:pwa-register'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAD96JuYmZ-CZuGfISGvO4uO_EVtsdLYCc",
    authDomain: "webukatsu.firebaseapp.com",
    projectId: "webukatsu",
    storageBucket: "webukatsu.appspot.com",
    messagingSenderId: "355517873536",
    appId: "1:355517873536:web:f832f3eccc893e5c345565",
    measurementId: "G-1P5ZVSX9S4"
  };
firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()

registerSW()
createApp(App).use(router).mount('#app')

