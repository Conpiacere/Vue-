import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import UserPage from '../views/UserPage.vue'
import mainPage from '../views/mainPage.vue'
import MallPage from '../views/MallPage.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
import LoginPage from '@/views/LoginPage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: mainPage,
    name: 'mainPage',
    redirect: '/home',
    children: [
      { path: 'home', name: 'home', component: HomePage },
      { path: 'user', name: 'user', component: UserPage },
      { path: 'mall', name: 'mall', component: MallPage },
      { path: 'one', name: 'one', component: PageOne },
      { path: 'two', name: 'two', component: PageTwo },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  }
]


const router = new VueRouter({
  routes
})
export default router



