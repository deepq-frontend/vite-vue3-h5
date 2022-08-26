<template>
  <div id="tags-view-container" ref="tagsViewRef" class="tags-view-container">
    <scroll-pane
      ref="scrollPane"
      class="tags-view-wrapper"
      @scroll="handleScroll"
    >
      <router-link
        v-for="tag in visitedViews"
        ref="tag"
        :key="tag.path"
        :class="isActive(tag) ? 'active' : ''"
        :to="{ path: tag.path!, query: tag.query, fullPath: tag.fullPath }"
        class="tags-view-item"
        @click.middle="!isAffix(tag) ? closeSelectedTag(tag) : ''"
        @contextmenu.prevent="openMenu(tag, $event)"
      >
        {{ tag.meta && tag.meta.title }}
        <el-icon
          v-if="!isAffix(tag)"
          class="m-left-5"
          @click.prevent.stop="closeSelectedTag(tag)"
        >
          <circle-close-filled />
        </el-icon>
      </router-link>
    </scroll-pane>
    <ul
      v-show="visible"
      :style="{ left: left + 'px', top: top + 'px' }"
      class="contextmenu"
    >
      <li @click="refreshSelectedTag(selectedTag)">刷新</li>
      <li v-if="!isAffix(selectedTag)" @click="closeSelectedTag(selectedTag)">
        关闭
      </li>
      <li @click="closeOthersTags">关闭其他</li>
      <li @click="closeAllTags(selectedTag)">关闭全部</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import path from 'path';
import {
  ref,
  computed,
  watch,
  nextTick,
  getCurrentInstance,
  onBeforeMount
} from 'vue';
import {
  RouteRecordRaw,
  RouterLinkProps,
  useRoute,
  useRouter
} from 'vue-router';
import { PermissionModule } from '@/store/modules/permission';
import { TagsViewModule, ITagView } from '@/store/modules/tags-view';
import ScrollPane from './ScrollPane.vue';

const visible = ref(false);
const top = ref(0);
const left = ref(0);
const selectedTag = ref<ITagView>({});
const affixTags = ref<ITagView[]>([]);
const route = useRoute();
const router = useRouter();
const vm = getCurrentInstance();

const visitedViews = computed(() => {
  return TagsViewModule.visitedViews;
});

const routes = computed(() => {
  return PermissionModule.routes;
});
const $el = computed(() => {
  return vm?.refs.tagsViewRef as HTMLDivElement;
});

watch(route, () => {
  addTags();
  moveToCurrentTag();
});

watch(visible, (value: boolean) => {
  if (value) {
    document.body.addEventListener('click', closeMenu);
  } else {
    document.body.removeEventListener('click', closeMenu);
  }
});

onBeforeMount(() => {
  initTags();
  addTags();
});

function isActive(activeRoute: ITagView) {
  return activeRoute.path === route.path;
}

function isAffix(tag: ITagView) {
  return tag.meta && tag.meta.affix;
}

function filterAffixTags(routes: RouteRecordRaw[], basePath = '/') {
  let tags: ITagView[] = [];
  routes.forEach(route => {
    if (route.meta && route.meta.affix) {
      const tagPath = path.resolve(basePath, route.path);
      tags.push({
        fullPath: tagPath,
        path: tagPath,
        name: route.name,
        meta: { ...route.meta }
      });
    }
    if (route.children) {
      const childTags = filterAffixTags(route.children, route.path);
      if (childTags.length >= 1) {
        tags = [...tags, ...childTags];
      }
    }
  });
  return tags;
}

function initTags() {
  const affixTags = filterAffixTags(routes.value);
  for (const tag of affixTags) {
    // Must have tag name
    if (tag.name) {
      TagsViewModule.addVisitedView(tag);
    }
  }
}

function addTags() {
  const { name } = route;
  if (name) {
    TagsViewModule.addView(route);
  }
  return false;
}

function moveToCurrentTag() {
  const tags = vm?.refs.tag as RouterLinkProps[];
  nextTick(() => {
    for (const tag of tags) {
      if ((tag.to as ITagView).path === route.path) {
        (vm?.refs.scrollPane as typeof ScrollPane).moveToTarget(tag);
        // When query is different then update
        if ((tag.to as ITagView).fullPath !== route.fullPath) {
          TagsViewModule.updateVisitedView(route);
        }
        break;
      }
    }
  });
}

function refreshSelectedTag(view: ITagView) {
  TagsViewModule.delCachedView(view);
  const { fullPath } = view;
  nextTick(() => {
    router.replace({
      path: '/redirect' + fullPath
    });
  });
}

function closeSelectedTag(view: ITagView) {
  TagsViewModule.delView(view);
  if (isActive(view)) {
    toLastView(TagsViewModule.visitedViews, view);
  }
}

function closeOthersTags() {
  if (
    selectedTag.value.fullPath !== route.path &&
    selectedTag.value.fullPath !== undefined
  ) {
    router.push(selectedTag.value.fullPath);
  }
  TagsViewModule.delOthersViews(selectedTag.value);
  moveToCurrentTag();
}

function closeAllTags(view: ITagView) {
  TagsViewModule.delAllViews();
  if (affixTags.value.some(tag => tag.path === route.path)) {
    return;
  }
  toLastView(TagsViewModule.visitedViews, view);
}

function toLastView(visitedViews: ITagView[], view: ITagView) {
  const latestView = visitedViews.slice(-1)[0];
  if (latestView !== undefined && latestView.fullPath !== undefined) {
    router.push(latestView.fullPath);
  } else {
    // Default redirect to the home page if there is no tags-view, adjust it if you want
    if (view.name === 'Dashboard') {
      // to reload home page
      router.replace({ path: '/redirect' + view.fullPath });
    } else {
      router.push('/');
    }
  }
}

function openMenu(tag: ITagView, e: MouseEvent) {
  const menuMinWidth = 105;
  const offsetLeft = $el.value.getBoundingClientRect().left; // container margin left
  const offsetWidth = $el.value.offsetWidth; // container width
  const maxLeft = offsetWidth - menuMinWidth; // left boundary
  const diff = e.clientX - offsetLeft + 15; // 15: margin right
  if (diff > maxLeft) {
    left.value = maxLeft;
  } else {
    left.value = diff;
  }
  top.value = e.clientY;
  visible.value = true;
  selectedTag.value = tag;
}

function closeMenu() {
  visible.value = false;
}

function handleScroll() {
  closeMenu();
}
</script>

<style lang="scss" scoped>
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);

  .tags-view-wrapper {
    .tags-view-item {
      display: flex;
      align-items: center;
      border-radius: 4px;
      position: relative;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;
      padding: 0 8px;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 4px;

      &:first-of-type {
        margin-left: 15px;
      }

      &:last-of-type {
        margin-right: 15px;
      }

      &.active {
        background-color: #42b983;
        color: #fff;
        border-color: #42b983;

        &::before {
          content: '';
          background: #fff;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 2px;
        }
      }
    }
  }

  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);

    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;

      &:hover {
        background: #eee;
      }
    }
  }
}
</style>
