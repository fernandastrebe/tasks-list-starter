import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeList from '../views/Home.vue'
import TasksList from '../views/TasksList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeList
  },
  {
    path: '/tasksList',
    name: 'tasksList',
    component: TasksList
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
