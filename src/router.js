import { createWebHistory, createRouter } from "vue-router"
import Index from './pages/Index.vue'
import Clubs from './pages/Clubs.vue'
import Club from './pages/Club.vue'
import Wiki from './pages/Wiki.vue'
import Event from './pages/Event.vue'
import Chat from './pages/Chat.vue'

const routes = [
  { path: "/", name: 'index', component: Index },
  { path: '/clubs', name: 'clubs', component: Clubs },
  { path: '/club/:id', name: 'club', component: Club },
  { path: '/club/:id/wiki', name: 'wiki', component: Wiki },  
  { path: '/club/:id/event', name: 'event', component: Event },  
  { path: '/club/:id/chat', name: 'chat', component: Chat },  
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