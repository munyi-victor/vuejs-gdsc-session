import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LandingView from '../views/LandingView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from "../views/LoginView.vue"
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/landing',
      name: 'landing page',
      component: LandingView
    },
    {
      path: '/register',
      name: 'register page',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login page',
      component: LoginView
    },
    {
      path: '/dashboard',
      name: 'dashboard page',
      component: DashboardView
    }
  ]
})

export default router
