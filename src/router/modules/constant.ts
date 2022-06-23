import { RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

const list = [
  {
    path: '/',
    component: () =>
      import(/* webpackChunkName: 'HomeContainer' */ '@/layout/index.vue'),
    redirect: '/index',
    name: 'HomeContainer',
    children: [
      {
        path: 'index',
        name: 'HomeIndex',
        permissionNodes: [{ title: '按钮1', name: 'button-1' }],
        meta: { title: '管理中心', icon: 'desktop' },
        component: () =>
          import(
            /* webpackChunkName: 'HomeIndex' */ '@/views/HomeIndex/index.vue'
          )
      }
    ]
  },
  {
    path: '/login',
    meta: { hidden: true },
    redirect: '/'
  },
  {
    path: '/redirect',
    component: Layout,
    meta: {
      hidden: true
    },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  }
] as RouteRecordRaw[];

export default list;
