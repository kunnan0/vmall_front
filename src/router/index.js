import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index.vue';
import Home from '@/views/Home';
import Login from '@/views/Login';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'home',
    component: Index,
    children: [
      {
        path: 'home',
        component: Home,
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
