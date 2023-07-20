import { createRouter, createWebHistory } from 'vue-router'
import LoginLayout from '@/common/component/login/LoginLayout.vue'
import HomeLayout from '@/common/component/home/HomeLayout.vue'
import PictureSearchLayout from '@/picsearch/component/PictureSearchLayout.vue'

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
      name: 'root',
      redirect: 'login'
    }
    ,{
      path: '/login',
      name: 'login',
      component: LoginLayout
    }
    ,{
      path: '/home',
      name: 'home',
      component: HomeLayout,
      children: [
        {
          path: "",
          redirect: "home/picsearch"
        }
        ,{
          path: "picsearch",
          name: "picsearch",
          component: PictureSearchLayout
        }
      ]
    }
  ]
})

export default router
