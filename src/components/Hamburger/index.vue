<template>
  <div :class="[{ 'is-active': isActive }]" @click="toggleClick">
    <font-awesome-icon icon="bars" />
  </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from 'vue';
defineEmits(['toggle-click']);
defineProps<{ isActive: boolean }>();

const vm = getCurrentInstance();

function toggleClick() {
  // eslint-disable-next-line no-unused-expressions
  vm?.emit('toggle-click');
}
</script>

<style lang="scss" scoped>
.is-active {
  transform: rotate(180deg);
}
</style>
