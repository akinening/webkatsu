import { createWebHistory, createRouter } from "vue-router"
import Index from './pages/Index.vue'
import Club from './pages/Club.vue'

const routes = [
  { path: "/", component: Index },
  { path: '/club/:id', component: Club }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router