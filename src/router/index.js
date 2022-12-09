
import { createRouter, createWebHistory } from "vue-router";
import LoginPage from '@/views/Login/LoginPage'
import RegisterPage from '@/views/Register/RegisterPage'
import IndexPage from '@/views/Pages/Index'
import IndexPageTransaction from '@/views/transaction/indexTransaction'
import createTransaction from '@/views/transaction/createTransaction'
import EditTransaction from '@/views/transaction/editTransaction'
import DeleteTransaction from '@/views/transaction/deleteTransaction'
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
  {
    path: '/transaction',
    name: 'IndexTransaction',
    component: IndexPageTransaction,
  },
  {
    path: '/create-transaction',
    name: 'CreateTransaction',
    component: createTransaction,
  },
  {
    path: '/edit-transaction/:id',
    name: 'EditTransaction',
    component: EditTransaction,
  },
  {
    path: '/delete-transaction',
    name: 'DeleteTransaction',
    component: DeleteTransaction,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router