import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
import ApostView from '@/views/ApostView.vue'
import AddpostView from '@/views/AddpostView.vue'

import auth from "../auth";

const routes = [
  {
    path: '/',
    name: 'index',
    component: MainView,
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
          next('/login')
      } else {
          next();
      }
  }
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: "/login",
    name: "LogIn",
    component: LoginView,
  },
  {
    path: "/apost/:id",
    name: "APost",
    component: ApostView,
    beforeEnter: async(to, from, next) => {
        let authResult = await auth.authenticated();
        if (!authResult) {
            next('/login')
        } else {
            next();
        }
    }
},
{
    path: "/addpost",
    name: "AddPost",
    component: AddpostView,
    beforeEnter: async(to, from, next) => {
        let authResult = await auth.authenticated();
        if (!authResult) {
            next('/login')
        } else {
            next();
        }
    }
},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
