import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import WelcomePage from '../views/Welcome.vue';
import LoginPage from '../views/Login.vue';
import LoginEmailPage from '../views/LoginEmail.vue';
import RegisterPage from '../views/Register.vue';
import RegisterEmailPage from '../views/RegisterEmail.vue';
import Tabs from '../views/Tabs.vue';
import HomePage from '../views/Home.vue';
import TransactionsPage from '../views/Transactions.vue';
import AddTransactionPage from '../views/AddTransaction.vue';
import EditTransactionPage from '../views/EditTransaction.vue';
import GoalsPage from '../views/Goals.vue';
import MorePage from '../views/More.vue';
import AccountsPage from '../views/Accounts.vue';
import AddAccountPage from '../views/AddAccount.vue';
import EditAccountPage from '../views/EditAccount.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/welcome'
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: WelcomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/login/email',
    name: 'LoginEmail',
    component: LoginEmailPage
  },
  {
    path: '/Register',
    name: 'Register',
    component: RegisterPage
  },
  {
    path: '/Register/Email',
    name: 'RegisterEmail',
    component: RegisterEmailPage
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'Home'
      },
      {
        path: '/Home',
        component: HomePage
      },
      {
        path: '/Transactions',
        component: TransactionsPage
      },
      {
        path: '/Goals',
        component: GoalsPage
      },
      {
        path: '/More',
        component: MorePage
      }
    ]
  },
  {
    path: '/AddTransaction',
    name: 'AddTransaction',
    component: AddTransactionPage
  },
  {
    path: '/EditTransaction/:id',
    name: 'EditTransaction',
    component: EditTransactionPage
  },
  {
    path: '/Accounts',
    name: 'Accouts',
    component: AccountsPage
  },
  {
    path: '/AddAccount/',
    name: 'AddAccount',
    component: AddAccountPage
  },
  {
    path: '/EditAccount/:id',
    name: 'EditAccount',
    component: EditAccountPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
