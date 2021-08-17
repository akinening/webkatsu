import { createWebHistory, createRouter } from "vue-router"
import Index from './pages/Index.vue'
import Club from './pages/Club.vue'
import Clubs from './pages/Clubs.vue'

const routes = [
  { path: "/", component: Index },
  { path: '/club/:id', component: Club },
  { path: '/clubs', component: Clubs }
]

const scrollBehavior = (to, from, savedPosition) => {
  return { top: 0 }
}

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior
})

export default router