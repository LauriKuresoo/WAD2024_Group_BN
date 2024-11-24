import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import SignupView from '../views/SignupView.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: MainView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  }
]

const router = createRouter({
  history: createWebHashHistory("/WAD2024_Group_BN/"),
  routes
})

export default router
