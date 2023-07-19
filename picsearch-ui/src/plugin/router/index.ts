import { createRouter, createWebHistory } from 'vue-router'
import LoginLayout from '@/common/component/LoginLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*{
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue')
    }*/
    {
      path: '/',
      name: 'home',
      redirect: 'login'
    }
    ,{
      path: '/login',
      name: 'login',
      component: LoginLayout
    }
  ]
})

export default router
