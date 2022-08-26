<template>
  <div :class="{ 'has-logo': showLogo }">
    <sidebar-logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar height="100%" wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="menuActiveTextColor"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
          :is-collapse="isCollapse"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { AppModule } from '@/store/modules/app';
import { PermissionModule } from '@/store/modules/permission';
import { SettingsModule } from '@/store/modules/settings';
import SidebarItem from './SidebarItem.vue';
import SidebarLogo from './SidebarLogo.vue';
import scssVariables from '@/styles/_variables.module.scss';

const sidebar = computed(() => {
  return AppModule.sidebar;
});
const routes = computed(() => {
  return PermissionModule.routes;
});
const showLogo = computed(() => {
  return SettingsModule.showSidebarLogo;
});
const menuActiveTextColor = computed(() => {
  if (SettingsModule.sidebarTextTheme) {
    return SettingsModule.theme;
  } else {
    return scssVariables.menuActiveText;
  }
});
const variables = computed(() => {
  return scssVariables;
});

const isCollapse = computed(() => {
  return !sidebar.value.opened;
});

const activeMenu = computed(() => {
  const route = useRoute();
  const { meta, path } = route;
  // if set path, the sidebar will highlight the path you set
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
});
</script>

<style lang="scss">
.sidebar-container {
  // reset element-ui css
  background-color: $subMenuBg;
  .horizontal-collapse-transition {
    transition: 0s width ease-in-out, 0s padding-left ease-in-out,
      0s padding-right ease-in-out;
  }

  .scrollbar-wrapper {
    overflow-x: hidden !important;
  }

  .el-scrollbar__view {
    min-height: 100%;
  }

  .el-scrollbar__bar {
    &.is-vertical {
      right: 0px;
    }

    &.is-horizontal {
      display: none;
    }
  }
}
</style>

<style lang="scss" scoped>
.el-scrollbar {
  height: 100%;
}

.has-logo {
  .el-scrollbar {
    height: calc(100% - #{$navbar-height});
  }
}

.el-menu {
  border: none;
  min-height: 100%;
  width: 100% !important;
}
</style>
