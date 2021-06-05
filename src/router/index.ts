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
import MorePage from '../views/More.vue';
import AccountsPage from '../views/Accounts.vue';
import AddAccountPage from '../views/AddAccount.vue';
import EditAccountPage from '../views/EditAccount.vue';
import CategoriesPage from '../views/Categories.vue';
import AddCategoryPage from '../views/AddCategory.vue';
import EditCategoryPage from '../views/EditCategory.vue';

import GoalsPage from '../views/Goals.vue';
import AddGoalPage from '../views/AddGoal.vue';
import EditGoalPage from '../views/EditGoal.vue';
import GoalsTransactionsPage from '../views/EditGoal.vue';
import AddGoalsTransactionsPage from '../views/AddGoalTransaction.vue';
import EditGoalsTransactionsPage from '../views/EditGoalTransaction.vue';


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
      {//-----------------------------------------------------GOALS
        path: '/Goals',
        component: GoalsPage,
      },//----------------------------------------------------FIM GOALS
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
  },
  {
    path: '/Categories',
    name: 'Categories',
    component: CategoriesPage
  },
  {
    path: '/AddCategory/',
    name: 'AddCategory',
    component: AddCategoryPage
  },
  {
    path: '/EditCategory/:id',
    name: 'EditCategory',
    component: EditCategoryPage
  },
  {
    path: '/AddGoal',
    name:'AddGoalPage',
    component: AddGoalPage, 
  },
  {
    path: '/EditGoal/:id',
    name:'EditGoalPage',
    component: EditGoalPage, 
  },
  {
    path: '/:id/Transactions',
    name:'GoalTransactionsPage',
    component: GoalsTransactionsPage, 
  },
  {
    path: '/:id/AddTransaction',
    name:'AddGoalTransactionsPage',
    component: AddGoalsTransactionsPage, 
  },
  {
    path: '/:id/EditTransaction/:idT',
    name:'EditGoalTransactionsPage',
    component: EditGoalsTransactionsPage, 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
