<template>
  <el-scrollbar
    ref="scrollContainer"
    :vertical="false"
    class="scroll-container"
    @wheel.prevent="handleScroll"
  >
    <slot />
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { computed, onBeforeUnmount, getCurrentInstance, onMounted } from 'vue';
import { RouterLinkProps } from 'vue-router';
import { ElScrollbar } from 'element-plus';

const tagSpacing = 4;
const vm = getCurrentInstance();
defineEmits(['scroll']);

const scrollWrapper = computed(() => {
  return (vm?.refs.scrollContainer as typeof ElScrollbar).$refs
    .wrap$ as HTMLElement;
});

onMounted(() => {
  scrollWrapper.value.addEventListener('scroll', emitScroll, true);
});

onBeforeUnmount(() => {
  scrollWrapper.value.removeEventListener('scroll', emitScroll);
});

function handleScroll(e: WheelEvent & { wheelDelta?: number }) {
  const eventDelta = e.wheelDelta || -e.deltaY * 40;
  scrollWrapper.value.scrollLeft =
    scrollWrapper.value.scrollLeft + eventDelta / 4;
}

function emitScroll() {
  // eslint-disable-next-line no-unused-expressions
  vm?.emit('scroll');
}

function moveToTarget(currentTag: RouterLinkProps) {
  const container = (vm?.refs.scrollContainer as typeof ElScrollbar)
    .$el as HTMLElement;
  const containerWidth = container.offsetWidth;
  const tagList = vm?.parent?.refs.tag as RouterLinkProps[];

  let firstTag = null;
  let lastTag = null;

  // find first tag and last tag
  if (tagList.length > 0) {
    firstTag = tagList[0];
    lastTag = tagList[tagList.length - 1];
  }

  if (firstTag === currentTag) {
    scrollWrapper.value.scrollLeft = 0;
  } else if (lastTag === currentTag) {
    scrollWrapper.value.scrollLeft =
      scrollWrapper.value.scrollWidth - containerWidth;
  } else {
    // find preTag and nextTag
    const currentIndex = tagList.findIndex(item => item === currentTag);
    const prevTag = tagList[currentIndex - 1];
    const nextTag = tagList[currentIndex + 1];
    // the tag's offsetLeft after of nextTag
    const afterNextTagOffsetLeft =
      nextTag.$el.offsetLeft + nextTag.$el.offsetWidth + tagSpacing;
    // the tag's offsetLeft before of prevTag
    const beforePrevTagOffsetLeft = prevTag.$el.offsetLeft - tagSpacing;

    if (
      afterNextTagOffsetLeft >
      scrollWrapper.value.scrollLeft + containerWidth
    ) {
      scrollWrapper.value.scrollLeft = afterNextTagOffsetLeft - containerWidth;
    } else if (beforePrevTagOffsetLeft < scrollWrapper.value.scrollLeft) {
      scrollWrapper.value.scrollLeft = beforePrevTagOffsetLeft;
    }
  }
}

defineExpose({
  moveToTarget
});
</script>

<style lang="scss">
.scroll-container {
  .el-scrollbar__bar {
    bottom: 0px;
  }

  .el-scrollbar__wrap {
    height: 49px;
  }
  .el-scrollbar__view {
    display: flex;
  }
}
</style>

<style lang="scss" scoped>
.scroll-container {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;
}
</style>
