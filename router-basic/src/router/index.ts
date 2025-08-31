import AppTop from '@/views/AppTop.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'AppTop', component: AppTop },
    {
      path: '/member/memberList',
      name: 'MemberList',
      component: () => import('@/views/member/MemberList.vue'),
    },
  ],
})

export default router
