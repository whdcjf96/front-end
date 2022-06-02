import Vue from 'vue'
import VueRouter from 'vue-router'

//메뉴달기
//비교) springboot : controller
Vue.use(VueRouter)

const routes = [
  //  /, /tutorials 메뉴를 클릭하면 TutorialsList.vue 로딩
  {
    path: '/tutorials',
    name: 'tutorials',
    component: () => import('@/components/TutorialsList')
  },
  {
    path: '/tutorials/:id',
    name: 'tutorials-details',
    component: () => import('@/components/Tutorial')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('@/components/AddTutorial')
  },
  {
    path: '/complain',
    name: 'complain',
    component: () => import('@/views/ComplainView')
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import('@/components/UploadImage')
  },
  {
    path: '/',
    alias:'/home',
    name: 'home',
    component: () => import('@/views/HomeView')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
