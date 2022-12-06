
import { createRouter, createWebHistory } from "vue-router";
import LoginPage from '@/views/Login/LoginPage'
import RegisterPage from '@/views/Register/RegisterPage'
import IndexPage from '@/views/Pages/Index'


// router
const routes = [
  {
    path: '/',
    name: 'IndexPage',
    component: IndexPage,
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage,
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router