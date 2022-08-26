<template>
  <section class="app-main">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="cachedViews">
          <component
            :is="Component"
            :key="route.meta.usePathKey ? route.path : undefined"
          />
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { TagsViewModule } from '@/store/modules/tags-view';

const cachedViews = computed(() => {
  return TagsViewModule.cachedViews as string[];
});
</script>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - $navbar-height);
  width: 100%;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  background: #f4f5fa;
}

.fixed-header + .app-main {
  margin-top: $navbar-height;
  height: calc(100vh - $navbar-height);
  overflow: auto;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - $navbar-height - 34px);
  }

  .fixed-header + .app-main {
    margin-top: calc($navbar-height + 34px);
    height: calc(100vh - $navbar-height - 34px);
  }
}
</style>
