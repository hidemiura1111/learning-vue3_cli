import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChildrenView from '@/views/ChildrenView'
import TeleportView from '@/views/TeleportView'
import CompositionTestView from '@/views/CompositionTestView'
import PropsEmitTestView from '@/views/PropsEmitTestView'
import CompositionFunctionTestView from '@/views/CompositionFunctionTestView.vue'
import RouterTestView from '@/views/RouterTestView.vue'
import VuexTestView from '@/views/VuexTestView.vue'
import CounterView from '@/views/CounterView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/children',
    name: 'Children',
    component: ChildrenView
  },
  {
    path: '/teleport',
    name: 'Teleport',
    component: TeleportView
  },
  {
    path: '/composition-test',
    name: 'CompositionTest',
    component: CompositionTestView
  },
  {
    path: '/props-emit-test',
    name: 'PropsEmitTest',
    component: PropsEmitTestView
  },
  {
    path: '/composition-function-test',
    name: 'CompositionFunctionTest',
    component: CompositionFunctionTestView
  },
  {
    path: '/router-test',
    name: 'RouterTest',
    component: RouterTestView
  },
  {
    path: '/vuex-test',
    name: 'VuexTest',
    component: VuexTestView
  },
  {
    path: '/counter',
    name: 'Counter',
    component: CounterView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
