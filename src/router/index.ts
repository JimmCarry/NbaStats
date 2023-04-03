import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ScoreBasic from '../views/ScoreBasic.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/scorebasic',
      name: 'scorebasic',
      component: ScoreBasic
    },
    {
      path: '/standings',
      name: 'standings',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/StandingsView.vue')
    },
    // API
    {
      path: '/api/TeamData',
      name: 'TeamData',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/api/TeamData.vue')
    },
    {
      path: '/api/',
      name: 'API',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/api/Index.vue')
    }
  ]
})

export default router
