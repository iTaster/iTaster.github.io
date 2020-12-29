import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cookies from 'js-cookie';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login'),
  },
  {
    path: '/',
    redirect: { name: 'PSY' },
    // name: 'Home',
    // component: Home
  },
  {
    path: '/psychology',
    name: 'PSY',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "PSY" */ '../views/psychology/index.vue')
  } ,
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


router.beforeEach((to, from, next) => {
  const isAuthenticated = Cookies.get('iTaster');
  console.log(isAuthenticated,1111);
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})

export default router
