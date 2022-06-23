/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs-extra');
const { join } = require('path');
const chalk = require('chalk');
const pkg = require('../../package.json');
const { FILE_HEADER, VUE } = require('./template');
const api = require('../utils/api');

const VIEW_PATH = join(__dirname, '../../src/views');

interface INameMap {
  [x: string]: boolean;
}

interface IRoute {
  path: string;
  name: string;
  component?: string;
  permissionNodes?: { title: string; name: string }[];
  meta?: Record<string, string | string[] | boolean>;
  children?: IRoute[];
  redirect?: string;
}

function resolveRoute(item: IRoute) {
  item.name = pkg.name + '.' + item.name;
  if (item.permissionNodes && Array.isArray(item.permissionNodes)) {
    item.permissionNodes = item.permissionNodes.map(el => {
      return {
        title: el.title,
        name: `${item.name}.${el.name}`
      };
    });
  }
  return item;
}

function checkName(item: IRoute, nameMap: INameMap) {
  const { name } = item;
  if (nameMap[name] === true) {
    throw new Error(`name: '${name}' is exist!`);
  } else {
    nameMap[name] = true;
  }
}

function resolveRouteName(route: IRoute[], nameMap: INameMap) {
  route.forEach(el => {
    checkName(el, nameMap);
    resolveRoute(el);
    if (el.children) {
      resolveRouteName(el.children, nameMap);
    }
  });
}

// 加工路由路径
function resolveRouteComponent(
  routes: IRoute[],
  map: Record<string, string> = {}
) {
  routes.forEach(el => {
    const { name, component } = el;
    if (name || component) {
      const componentPath = component || `@/views/${name}/index.vue`;
      map[
        name
      ] = `() => import(/* webpackChunkName: '${name}' */ '${componentPath}')`;
      el.component = `{{${name}}}`;
    }
    if (el.children) {
      resolveRouteComponent(el.children, map);
    }
  });
  return map;
}

// 创建路由配置文件
function createRouteFile(routes: IRoute[], createFile: boolean) {
  const routerPath = join(__dirname, '../../src/router');
  const map = resolveRouteComponent(routes);
  let str = JSON.stringify(routes);
  Object.keys(map).forEach(key => {
    str = str.replace(`"{{${key}}}"`, map[key]);
  });
  fs.outputFileSync(
    join(routerPath, 'modules/_remote.ts'),
    FILE_HEADER + str + 'as RouteRecordRaw[]'
  );
  console.log(chalk.green('✅ _remote.ts is created'));
  createFile && createViewsFile(routes);
}

// 发布路由
async function publishRoute(route: IRoute[], option: any) {
  // const list = flatRoute(route)
  resolveRouteName(route, {});
  const param = {
    version: pkg.version,
    app: pkg.name,
    routes: route
  };
  const { data, code } = await api.login(option);
  if (code === 200) {
    console.log(data);
    process.env._ROUTE_TOKEN = data.token;
    const res = await api.publishRouters(param);
    console.log(res);
  }
  // console.log(JSON.stringify(param))
}

function genViewFile(route: IRoute) {
  const FILE_PATH = join(VIEW_PATH, route.name, 'index.vue');
  const res = fs.pathExistsSync(FILE_PATH);
  if (!res) {
    fs.outputFileSync(FILE_PATH, VUE(route.name));
    console.log(
      chalk.green(`✅ route (${route.name} )is created in path: ${FILE_PATH}`)
    );
  } else {
    console.log(
      chalk.yellow(`😯 route (${route.name} )is exists! skip create!`)
    );
  }
}

// 遍历路由尾节点
function createViewsFile(routes: IRoute[], nameMap: INameMap = {}) {
  routes.forEach(el => {
    checkName(el, nameMap);
    // 存在子节点
    if (el.children && el.children.length > 0) {
      createViewsFile(el.children, nameMap);
    } else {
      // 末尾节点
      genViewFile(el);
    }
  });
}

module.exports = {
  createRouteFile,
  publishRoute,
  createViewsFile
};
