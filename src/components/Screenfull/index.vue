<template>
  <div id="screenfull">
    <font-awesome-icon
      :icon="isFullscreen ? 'compress-arrows-alt' : 'expand-arrows-alt'"
      @click="click"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';
import screenfull from 'screenfull';
import { ElMessage } from 'element-plus';

const sf = screenfull;

const isFullscreen = ref(false);

function change() {
  if (sf.isEnabled) {
    isFullscreen.value = sf.isFullscreen;
  }
}

onMounted(() => {
  if (sf.isEnabled) {
    sf.on('change', change);
  }
});

onUnmounted(() => {
  if (sf.isEnabled) {
    sf.off('change', change);
  }
});

function click() {
  if (!sf.isEnabled) {
    ElMessage({
      message: 'you browser can not work',
      type: 'warning'
    });
    return false;
  }
  sf.toggle();
}
</script>
