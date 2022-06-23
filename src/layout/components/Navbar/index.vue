<template>
  <div class="navbar">
    <hamburger
      id="hamburger-container"
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggle-click="toggleSideBar"
    />
    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
    <div class="right-menu">
      <template v-if="device !== 'mobile'">
        <screenfull class="right-menu-item hover-effect" />
      </template>
      <el-dropdown
        class="avatar-container right-menu-item hover-effect"
        trigger="click"
      >
        <div class="avatar-wrapper">
          <el-avatar :size="30" :src="avatar + '?imageView2/1/w/80/h/80'" />
          <span class="avatar-name">{{ userName }}</span>
          <font-awesome-icon icon="chevron-down" size="xs" />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <router-link to="/">
              <el-dropdown-item> dashboard </el-dropdown-item>
            </router-link>
            <!-- <a
              target="_blank"
              href="https://armour.github.io/vue-typescript-admin-docs/"
            >
              <el-dropdown-item>Docs</el-dropdown-item>
            </a> -->
            <el-dropdown-item divided @click="logout">
              <span style="display: block"> 登出 </span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { AppModule } from '@/store/modules/app';
import { UserModule } from '@/store/modules/user';
import Breadcrumb from '@/components/Breadcrumb/index.vue';
import Hamburger from '@/components/Hamburger/index.vue';
import Screenfull from '@/components/Screenfull/index.vue';

const sidebar = computed(() => {
  return AppModule.sidebar;
});
const device = computed(() => {
  return AppModule.device.toString();
});
const avatar = computed(() => {
  return UserModule.avatar;
});
const userName = computed(() => {
  return UserModule.name;
});

function toggleSideBar() {
  AppModule.ToggleSideBar(false);
}

async function logout() {
  await UserModule.LogOut();
}
</script>

<style lang="scss" scoped>
.navbar {
  height: $navbar-height;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    float: left;
    padding: 0 15px;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: $navbar-height;
    display: flex;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      @include flex-center();
      .avatar-wrapper {
        @include flex-center();
        .avatar-name {
          margin: 0 10px;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
