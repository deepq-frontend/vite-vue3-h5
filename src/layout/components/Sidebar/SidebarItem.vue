<template>
  <div
    v-if="!item.meta || !item.meta.hidden"
    :class="[
      isCollapse ? 'simple-mode' : 'full-mode',
      { 'first-level': isFirstLevel }
    ]"
  >
    <template
      v-if="!alwaysShowRootMenu && theOnlyOneChild && !theOnlyOneChild.children"
    >
      <sidebar-item-link
        v-if="theOnlyOneChild.meta"
        :to="resolvePath(theOnlyOneChild.path)"
      >
        <el-menu-item
          :index="resolvePath(theOnlyOneChild.path)"
          :class="{ 'submenu-title-noDropdown': isFirstLevel }"
        >
          <font-awesome-icon
            v-if="theOnlyOneChild.meta.icon"
            class="svg-icon"
            :icon="theOnlyOneChild.meta.icon"
          />
          <template #title>
            <span v-if="theOnlyOneChild.meta.title" class="dot-title">
              {{ theOnlyOneChild.meta.title }}
              <span
                v-if="
                  theOnlyOneChild.meta.showDot &&
                  getRouteDot(resolvePath(theOnlyOneChild.path)) !== 0
                "
                class="dot"
                >{{ getRouteDot(resolvePath(theOnlyOneChild.path)) }}</span
              >
            </span>
          </template>
        </el-menu-item>
      </sidebar-item-link>
    </template>
    <el-sub-menu v-else :index="resolvePath(item.path)" popper-append-to-body>
      <template #title>
        <font-awesome-icon
          v-if="item.meta && item.meta.icon"
          class="svg-icon"
          :icon="item.meta.icon"
        />
        <span v-if="item.meta && item.meta.title">
          {{ item.meta.title }}
        </span>
      </template>
      <template v-if="item.children">
        <sidebar-item
          v-for="child in item.children"
          :key="child.path"
          :item="child"
          :is-collapse="isCollapse"
          :is-first-level="false"
          :base-path="resolvePath(child.path)"
          class="nest-menu"
        />
      </template>
    </el-sub-menu>
  </div>
</template>

<script lang="ts" setup>
import path from 'path-browserify';
import { computed } from 'vue';
import { RouteRecordRaw } from 'vue-router';
import { isExternal } from '@/utils/validate';
import SidebarItemLink from './SidebarItemLink.vue';
import { AppModule } from '@/store/modules/app';

interface IProps {
  item: RouteRecordRaw;
  isCollapse?: boolean;
  isFirstLevel?: boolean;
  basePath?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  isCollapse: false,
  isFirstLevel: false,
  basePath: ''
});

const alwaysShowRootMenu = computed(() => {
  if (props.item.meta && props.item.meta.alwaysShow) {
    return true;
  }
  return false;
});

const showingChildNumber = computed(() => {
  if (props.item.children) {
    const showingChildren = props.item.children.filter(item => {
      if (item.meta && item.meta.hidden) {
        return false;
      } else {
        return true;
      }
    });
    return showingChildren.length;
  }
  return 0;
});

const theOnlyOneChild = computed(() => {
  if (showingChildNumber.value > 1) {
    return null;
  }
  if (props.item.children) {
    for (const child of props.item.children) {
      if (!child.meta || !child.meta.hidden) {
        return child;
      }
    }
  }
  // If there is no children, return itself with path removed,
  // because this.basePath already conatins item's path information
  return { ...props.item, path: '' };
});

function resolvePath(routePath: string) {
  if (isExternal(routePath)) {
    return routePath;
  }
  if (isExternal(props.basePath)) {
    return props.basePath;
  }
  return path.resolve(props.basePath, routePath);
}

const getRouteDot = (path: string) => {
  const dot = AppModule.slideBarDotMap.find(dot => dot.path === path);
  if (dot) {
    return dot.num > 99 ? '99+' : dot.num;
  } else {
    return 0;
  }
};

defineExpose({
  SidebarItemLink
});
</script>

<style lang="scss">
.el-sub-menu.is-active > .el-sub-menu__title {
  color: $subMenuActiveText !important;
}
li.el-menu-item {
  height: 50px;
  line-height: 50px;
  &.is-active {
    background-color: $menuItemActiveBackgroundColor !important;
  }
}

.full-mode {
  .nest-menu .el-sub-menu > .el-sub-menu__title,
  .el-sub-menu .el-menu-item {
    min-width: $sideBarWidth !important;
    background-color: $subMenuBg !important;

    &:hover {
      background-color: $subMenuHover !important;
    }
    &.is-active {
      background-color: $menuItemActiveBackgroundColor !important;
    }
  }
}

.simple-mode {
  &.first-level {
    .submenu-title-noDropdown {
      padding: 0 !important;
      position: relative;

      .el-tooltip {
        padding: 0 !important;
      }
    }

    .el-sub-menu {
      overflow: hidden;

      & > .el-sub-menu__title {
        padding: 0px !important;

        .el-sub-menu__icon-arrow {
          display: none;
        }

        & > span {
          visibility: hidden;
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.svg-icon {
  margin-right: 20px;
}

.dot-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.dot {
  text-align: center;
  font-size: 14px;
  font-family: DINPro-Bold, DINPro;
  font-weight: bold;
  color: #ffffff;
  display: inline-block;
  min-width: 20px;
  height: 20px;
  line-height: 18px;
  background-color: #ff1c2e;
  border-radius: 10px;
}
</style>
