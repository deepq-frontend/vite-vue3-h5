import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule
} from 'vuex-module-decorators';
import { RouteRecordRaw } from 'vue-router';
import { asyncRoutes, constantRoutes } from '@/router';
import store from '@/store';
import { name } from '@/../package.json';

// interface IRoutePermissionItem {
//   name: string;
//   children: IRoutePermissionItem[];
// }

const hasPermission = (roles: string[], route: RouteRecordRaw) => {
  if (import.meta.env.VUE_APP_FULL_ROUTE === 'open') {
    return true;
  }
  return roles.includes(name + '.' + (route.name as unknown as string));
};

// const getRouteNames = (
//   routes: IRoutePermissionItem[],
//   names: string[] = []
// ) => {
//   routes.forEach(route => {
//     if (!names.includes(route.name)) {
//       names.push(route.name);
//     }
//     if (route.children && route.children.length > 0) {
//       getRouteNames(route.children, names);
//     }
//   });
//   return names;
// };

export const filterAsyncRoutes = (
  routes: RouteRecordRaw[],
  names: string[]
) => {
  const res: RouteRecordRaw[] = [];
  routes.forEach(route => {
    const r = { ...route };
    if (hasPermission(names, r)) {
      if (r.children) {
        r.children = filterAsyncRoutes(r.children, names);
      }
      res.push(r);
    }
  });
  return res;
};

export interface IPermissionState {
  routes: RouteRecordRaw[];
  dynamicRoutes: RouteRecordRaw[];
  names: string[];
}

@Module({ dynamic: true, store, name: 'permission' })
class Permission extends VuexModule implements IPermissionState {
  public routes: RouteRecordRaw[] = [];
  public dynamicRoutes: RouteRecordRaw[] = [];
  public names: string[] = [];

  @Mutation
  private SET_ROUTES(routes: RouteRecordRaw[]) {
    this.routes = constantRoutes.concat(routes);
    this.dynamicRoutes = routes;
  }

  @Mutation
  private SET_NAMES(names: string[]) {
    this.names = names;
  }

  @Action
  public GenerateRoutes(names: string[]) {
    const accessedRoutes = filterAsyncRoutes(asyncRoutes, names);
    this.SET_ROUTES(accessedRoutes);
  }

  @Action
  public async FetchRoutes() {
    // const names = getRouteNames(data)
    // this.SET_NAMES(names)
    this.GenerateRoutes([]);
  }
}

export const PermissionModule = getModule(Permission);
