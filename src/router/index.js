import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import hikesIndex from '../views/hikesIndex.vue';
import hikesNew from '../views/hikesNew.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hikes',
    name: 'hikes',
    component: hikesIndex
  },
  {
    path: '/hikes/new',
    name: 'hikesNew',
    component: hikesNew
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
