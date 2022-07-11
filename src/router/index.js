import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'
import Login from '@/views/Login'
import City from '@/views/City'
import Map from '@/views/Map'
import Search from '@/views/Search'
import PublishingHouses from '@/views/PublishingHouses'
const Home = () => import('@/views/home')
const My = () => import('@/views/my')
const Consulation = () => import('@/views/Consulation')
const FindRoom = () => import('@/views/FindRoom')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      { path: '/home', component: Home },
      { path: '/my', component: My },
      { path: '/consulation', component: Consulation },
      { path: '/findroom', component: FindRoom }
    ]
  },
  { path: '/login', component: Login },
  { path: '/city', component: City },
  { path: '/map', component: Map },
  { path: '/publishinghouses', component: PublishingHouses },
  { path: '/search', component: Search }
]

const router = new VueRouter({
  routes
})

export default router
