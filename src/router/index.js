import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import CategoriasView from '../views/CategoriasView.vue'
import FilmeVingadoresView from '../views/FilmeVingadoresView.vue'
import FavoritosView from '../views/FavoritosView.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: RegisterView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/categorias',
    name: 'categorias',
    component: CategoriasView
  },
  {
    path: '/favoritos',
    name: 'favoritos',
    component: FavoritosView
  },
  {
    path: '/filmes/vingadores-ultimato',
    name: 'vingadores-ultimato',
    component: FilmeVingadoresView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
