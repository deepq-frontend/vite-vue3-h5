/* eslint-disable @typescript-eslint/no-var-requires */

interface IRoute {
  path: string;
  name: string;
  component?: string;
  permissionNodes?: { title: string; name: string }[];
  meta?: Record<string, string | string[] | boolean>;
  children?: IRoute[];
  redirect?: string;
}

const Layout = '@/layout/index.vue';

module.exports = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    name: 'HomeContainer',
    children: [
      {
        path: 'index',
        name: 'HomeIndex',
        permissionNodes: [
          {
            title: '按钮1',
            name: 'button-1'
          }
        ],
        meta: {
          title: '管理中心',
          icon: 'desktop'
        }
      }
    ]
  },
] as IRoute[];
