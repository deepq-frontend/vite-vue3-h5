<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="item.path">
        <span
          v-if="
            item.redirect === 'noredirect' || index === breadcrumbs.length - 1
          "
          class="no-redirect"
          >{{ item.meta.title }}</span
        >
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { compile } from 'path-to-regexp';
import {
  RouteLocationMatched,
  RouteLocationNormalizedLoaded,
  RouteLocationRaw,
  useRoute,
  useRouter
} from 'vue-router';
import { watch, ref } from 'vue';

const breadcrumbs = ref<RouteLocationMatched[]>([]);
const route = useRoute();
const router = useRouter();
function isDashboard(route: RouteLocationMatched) {
  const name = route && route.name;
  if (!name) {
    return false;
  }
  return (
    (name as string).trim().toLocaleLowerCase() ===
    'Dashboard'.toLocaleLowerCase()
  );
}
function getBreadcrumb() {
  let matched = route.matched.filter(item => item.meta && item.meta.title);
  const first = matched[0];
  if (!isDashboard(first)) {
    matched = [
      {
        path: '/index',
        meta: { title: 'dashboard' }
      } as unknown as RouteLocationMatched
    ].concat(matched);
  }
  breadcrumbs.value = matched.filter(item => {
    return item.meta && item.meta.title && item.meta.breadcrumb !== false;
  });
}

watch(
  route,
  (route: RouteLocationNormalizedLoaded) => {
    // if you go to the redirect page, do not update the breadcrumbs
    if (route.path.startsWith('/redirect/')) {
      return;
    }
    getBreadcrumb();
  },
  {
    immediate: true
  }
);
// getBreadcrumb()

function pathCompile(path: string) {
  // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
  const { params } = route;
  const toPath = compile(path);
  return toPath(params);
}

function handleLink(item: RouteLocationMatched) {
  const { redirect, path } = item;
  if (redirect) {
    router.push(redirect as RouteLocationRaw).catch(err => {
      console.warn(err);
    });
    return;
  }
  router.push(pathCompile(path)).catch(err => {
    console.warn(err);
  });
}
</script>

<style lang="scss" scoped>
.el-breadcrumb__inner,
.el-breadcrumb__inner a {
  font-weight: 400 !important;
}

.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 18px;
  line-height: $navbar-height;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
