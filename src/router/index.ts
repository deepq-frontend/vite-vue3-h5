import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { toRaw } from 'vue';
import { PermissionModule } from '@/store/modules/permission';

import constant from './modules/constant';
import remote from './modules/_remote';

export const constantRoutes: Array<RouteRecordRaw> = constant;

export const asyncRoutes: Array<RouteRecordRaw> = remote;

const create = () =>
  createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: []
  });

const router = create();
addRoutes(constantRoutes);

export function addRoutes(routes: Array<RouteRecordRaw>) {
  routes.forEach(route => {
    router.addRoute(route);
  });
}

export function resetRouter() {
  router.getRoutes().forEach(route => {
    route.name && router.removeRoute(route.name);
  });
  addRoutes(constantRoutes);
}

export function registerRouter() {
  const names = PermissionModule.names;
  // Generate accessible routes map based on role
  PermissionModule.GenerateRoutes(names);
  // Dynamically add accessible routes
  PermissionModule.dynamicRoutes.forEach(route => {
    router.addRoute(toRaw(route));
  });
}

export default router;
