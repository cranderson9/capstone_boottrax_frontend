import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import hikesIndex from '../views/hikesIndex.vue';
import hikesNew from '../views/hikesNew.vue';
import PicturesNew from '../views/picturesNew.vue';
import Show from '../views/hikeShow.vue';
import hikesEdit from '../views/hikesEdit.vue';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import Logout from '../views/Logout.vue';
import Map from '../views/Map.vue';

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
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
  {
    path: '/hikes/new',
    name: 'hikesNew',
    component: hikesNew
  },
  {
    path: '/hikes/pictures',
    name: 'picturesNew',
    component: PicturesNew
  },
  {
    path: '/hikes/:id',
    name: 'Show',
    component: Show
  },
  {
    path: '/hikes/:id/edit',
    name: 'hikesEdit',
    component: hikesEdit
  },
  {
    path: '/map',
    name: 'Map',
    component: Map
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
