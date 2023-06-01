import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TimerPakanView from '../views/TimerPakanView.vue'
import TimerGantiAirView from '../views/TimerGantiAirView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/timer-pakan',
    name: 'timer-pakan',
    component: TimerPakanView
  },
  {
    path: '/timer-air',
    name: 'timer-air',
    component: TimerGantiAirView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
