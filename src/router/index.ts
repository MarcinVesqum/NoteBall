import { createRouter, createWebHistory } from 'vue-router'
import NotesView from '../views/NotesView.vue'
import StatsView from '../views/StatsView.vue'
import EditNoteView from '../views/EditNoteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'notes',
      component: NotesView
    },
    {
      path: '/stats',
      name: 'stats',
      component: StatsView
    },
    {
      path: '/editNote/:id',
      name: 'editNote',
      component: EditNoteView
    }
  ]
})

export default router
