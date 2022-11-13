import { createRouter, createWebHistory } from 'vue-router'
import NotesView from '../views/NotesView.vue'
import StatsView from '../views/StatsView.vue'
import EditNoteView from '../views/EditNoteView.vue'
import AuthView from '../views/AuthView.vue'

// Auth
import { auth } from '@/firebase/firebase'
// Store
import { useStoreAuth } from '@/stores/storeAuth'
  

const routes: [any] = [
  {
    path: '/',
    name: 'notes',
    component: NotesView,

  },
  {
    path: '/stats',
    name: 'stats',
    component: StatsView,

  },
  {
    path: '/editNote/:id',
    name: 'editNote',
    component: EditNoteView
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// navigation guards
router.beforeEach(async (to, _, next) => {
  const storeAuth = useStoreAuth()
  if (!storeAuth.user.id && to.name !== 'auth') next({ name: 'auth'})
  else next()  
})


export default router
