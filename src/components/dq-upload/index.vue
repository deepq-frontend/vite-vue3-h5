<template>
  <el-upload
    ref="uploadVM"
    :action="action"
    with-credentials
    list-type="picture-card"
    :headers="headers"
    :on-preview="handlerPreview"
    :on-exceed="handlerExceed"
    :on-success="handlerSuccess"
    :before-upload="handlerBeforeUpload"
    :on-remove="handlerRemove"
    :file-list="fileList"
  >
    <template #default>
      <slot>
        <el-icon><Plus /></el-icon>
      </slot>
    </template>
    <template #tip>
      <slot name="tip"></slot>
    </template>
  </el-upload>
</template>
<script lang="ts" setup>
import { UserModule } from '@/store/modules/user';
import { RString } from '@/_api/types/fm-article';
import { ElMessage, ElMessageBox } from 'element-plus';
import type { UploadFile, UploadRawFile } from 'element-plus';
import { ElUpload } from 'element-plus';
import { computed, ref, useAttrs } from 'vue';
defineOptions({
  name: 'DqUpload'
});
const emits = defineEmits<{
  (event: 'success', file?: (string | undefined)[] | string): void;
  (event: 'update:modelValue', file?: (string | undefined)[] | string): void;
}>();

const props = defineProps<{
  limitSize?: number;
  percent?: number;
}>();

const attrs = useAttrs();

const action = computed(() => {
  return `${import.meta.env.VUE_APP_BASE_API}fm-article/common/fileUpload`;
});
const headers = computed(() => {
  return {
    Authorization: `bearer ${UserModule.token}`
  };
});

const fileList = computed(() => {
  const list = attrs.modelValue as string[] | string | undefined;
  if (!list) return [];
  if (typeof list === 'string') {
    return [{ url: list } as UploadFile];
  }
  return list.map(url => {
    return {
      url
    } as UploadFile;
  });
});

const uploadVM = ref<InstanceType<typeof ElUpload>>();
const handlerPreview = (file: UploadFile) => {
  ElMessageBox.alert(
    `<img src="${file.url}" class="width-full" />`,
    `预览图片-${file.name}`,
    {
      dangerouslyUseHTMLString: true,
      customClass: 'upload-img-preview'
    }
  );
};

const handlerSuccess = (
  response: RString,
  file: UploadFile,
  fileList: UploadFile[]
) => {
  const urls = fileList.map(
    el => (el.response as RString | undefined)?.data?.result || el.url
  );
  const data = attrs.limit === 1 ? response.data?.result : urls;
  emits('success', data);
  emits('update:modelValue', data);
};

const handlerRemove = (file: UploadFile, fileList: UploadFile[]) => {
  const urls = fileList.map(
    el => (el.response as RString).data?.result || el.url
  );
  if (attrs.limit === 1) {
    emits('update:modelValue', urls[0]);
  } else {
    emits('update:modelValue', urls);
  }
  console.log(urls);
};

const handlerBeforeUpload = (file: UploadFile) => {
  if (props.limitSize) {
    const kb = (file.size || 0) / 1024;
    const res = props.limitSize <= kb;
    if (res) {
      ElMessage.error(`文件不得大于${props.limitSize}Kb`);
      return false;
    }
  }
  if (props.percent) {
    console.log(file);
  }
};

const handlerExceed = (files: UploadRawFile[]) => {
  uploadVM.value?.clearFiles();
  uploadVM.value?.handleStart(files[0]);
  uploadVM.value?.submit();
};

defineExpose({
  uploadVM
});
</script>
<style lang="scss">
.upload-img-preview {
  width: 50vw;
}
</style>
