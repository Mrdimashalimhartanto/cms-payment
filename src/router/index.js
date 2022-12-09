
import { createRouter, createWebHistory } from "vue-router";
import LoginPage from '@/views/Login/LoginPage'
import RegisterPage from '@/views/Register/RegisterPage'
import IndexPage from '@/views/Pages/Index'
// ROUTER UNTUK HALAMAN TRANSACTION

// router
const routes = [
  {
    path: '/',
    name: 'IndexPage',
    component: IndexPage,
  },
  {
    path: '/tentang-kami',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage,
  },

  // ROUTER KE HALAMAN TRANSACTION 
  {
    path: '/transaction',
    name: 'transaction.index',
    component: () => import('@/views/transaction/Index.vue'),
  },
  {
    path: '/create-transaction',
    name: 'transaction.create',
    component: () => import('@/views/transaction/Create.vue'),
  },
  {
    path: '/edit-transaction/:id',
    name: 'transaction.edit',
    component: () => import('@/views/transaction/Edit.vue'),
  },
  {
    path: '/delete-transaction',
    name: 'transaction.delete',
    component: () => import('@/views/transaction/Delete.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router