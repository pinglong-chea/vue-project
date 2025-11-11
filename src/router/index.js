import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
// import GithubPage from '@/views/GithubPage.vue'
// import PlanPickerPage from '@/views/PlanPickerPage.vue'
// import AlertPage from '@/views/AlertPage.vue'

const routes = [
  { path: '/', component: HomePage },
  {
    path: '/destination/:id/:slug',
    name: 'destination.show',
    component: () => import('@/views/DestinationShow.vue'),
  },
  // { path: '/github', component: GithubPage },
  // { path: '/plan', component: PlanPickerPage },
  // { path: '/alert', component: AlertPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
