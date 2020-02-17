import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import ViewPost from '../views/ViewPost.vue'


Vue.use(VueRouter);

const routes = [
  {
    path:'/Admin',
    component:Admin,
    name:'Admin'
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ViewPost',
    name: 'Viewpost',
    component:ViewPost
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
