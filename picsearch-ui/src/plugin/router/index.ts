import { createRouter, createWebHistory } from 'vue-router'
import { useUserAuthStore } from '@/common/stores/user-auth'
import log from 'loglevel'

import LoginLayout from '@/common/component/login/LoginLayout.vue'
import HomeLayout from '@/common/component/home/HomeLayout.vue'
import PictureSearchLayout from '@/picsearch/component/PictureSearchLayout.vue'


export const router = createRouter({
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
      component: LoginLayout,
      meta: { requiresAuth: false },
    }
    ,{
      path: '/home',
      name: 'home',
      component: HomeLayout,
      meta: { requiresAuth: true },
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

export function setBeforeRouter(){
  const userAuthStore = useUserAuthStore();
  router.beforeEach(async (to, from, next) => {
    if(to.meta.requiresAuth) {
      if(userAuthStore.isAuthrized) {
        log.debug("auth success to next path > :", to.fullPath)
        next()
      }else {
        log.debug("auth failed to next path > :", to.fullPath)
        next({
          path: '/login',
          query: {
            redirect: to.fullPath
          }
        })
      }
    }else {
      log.debug("have not auth to next path > :", to.fullPath)
      next();
    }
  })  
}

