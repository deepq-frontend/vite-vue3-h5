<template>
  <el-dialog
    custom-class="basic-dialog"
    destroy-on-close
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    @close="handlerClose"
  >
    <template #title>
      <div class="basic-dialog-title">
        <slot name="title">
          {{ $attrs.title }}
        </slot>
      </div>
    </template>
    <el-scrollbar :max-height="maxHeight">
      <div class="basic-dialog-body">
        <slot />
      </div>
    </el-scrollbar>
    <template v-if="!hideFooter" #footer>
      <slot name="footer">
        <div class="text-right">
          <el-button :loading="loading" @click="handlerCancel">
            取消
          </el-button>
          <el-button
            :loading="loading"
            type="primary"
            @click="$emit('confirm')"
          >
            确认
          </el-button>
        </div>
      </slot>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
const emit = defineEmits([
  'cancel',
  'confirm',
  'update:modelValue',
  'close',
  'success'
]);
defineOptions({
  name: 'BasicDialog'
});
withDefaults(
  defineProps<{
    loading?: boolean;
    hideFooter?: boolean;
    maxHeight?: string;
  }>(),
  {
    maxHeight: '50vh'
  }
);

function handlerCancel() {
  toggleDialog(false);
  emit('cancel');
}
function handlerClose() {
  emit('update:modelValue', false);
  emit('close');
}
function toggleDialog(state: boolean) {
  emit('update:modelValue', state);
}

defineExpose({
  toggleDialog
});
</script>
<style lang="scss">
.basic-dialog {
  &-title {
    padding: 22px 16px;
    border-bottom: 1px solid #e3e6ec;
  }

  &-body {
    // max-height: 50vh;
    padding-right: 10px;
  }

  .el-dialog__header {
    padding: 0px 24px;
    font-size: 16px;
    font-weight: 400;
    color: #262626;
  }
  .el-dialog__body {
    padding: 24px;
  }
}
</style>
