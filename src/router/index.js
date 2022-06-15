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
    component: () => import('@/components/tutorials/TutorialsList')
  },
  {
    path: '/tutorials/:id',
    name: 'tutorials-details',
    component: () => import('@/components/tutorials/Tutorial')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('@/components/tutorials/AddTutorial')
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
  },
  {
    path: '/customers',
    name: 'customers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/components/customer/CustomerList')
  },
  {
    path: '/cadd',
    name: 'cadd',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/components/customer/AddCustomer')
  },
  {
    path: '/customers/:id',
    name: 'edit-customer',
    component: () => import('@/components/customer/EditCustomer')
  },
  {
    path: '/complainMenu/:no',
    name: 'edit-complain',
    component: () => import('@/components/complain/EditComplain')
  },
  {
    path: '/complainMenu',
    name: 'complainMenu',
    component: () => import('@/components/complain/ComplainList')
  },
  {
    path: '/complainAdd',
    name: 'complainAdd',
    component: () => import('@/components/complain/AddComplain')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
