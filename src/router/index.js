import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

const routes = [
  {
    path: '/',
    component: LoginView
  },
  {
    path: '/cadastro',
    component: RegisterView
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})