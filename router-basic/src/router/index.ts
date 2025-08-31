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
    {
      path: '/member/detail/:id',
      name: 'MemberDetail',
      component: () => import('@/views/member/MemberDetail.vue'),
      props: (routes) => {
        return { id: Number(routes.params.id) }
      },
    },
  ],
})

export default router
