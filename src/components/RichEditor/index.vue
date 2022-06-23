<template>
  <editor
    v-model="editorVal"
    :class="$attrs.inline ? 'inline-mode' : ''"
    :init="initConfig"
    :style="{ minHeight: minHeight }"
    v-bind="$attrs"
    tinymce-script-src="//frontend-static-assets.oss-cn-shanghai.aliyuncs.com/tinymce/latest/tinymce.js"
  />
</template>
<script lang="ts" setup>
import { useApiFmArticleCommonFileUploadByPost } from '@/_api/apis/fm-article';
import Editor from '@tinymce/tinymce-vue';
import { RawEditorSettings, Editor as E } from 'tinymce';
import { computed, ref, useAttrs } from 'vue';

const emit = defineEmits<{
  (event: 'init', editor: E): void;
  (event: 'input', editor: E): void;
  (event: 'update:modelValue', html: string): void;
  (event: 'images_upload_done'): void;
}>();

const props = defineProps<{
  modelValue?: string;
  minHeight?: string;
}>();
const attrs = useAttrs();

let editorVM = ref<E | null>(null);

// const editorVal = ref(props.modelValue)

const initConfig: RawEditorSettings = {
  language: 'zh_CN',
  element_format: 'html',
  height: '500px',
  width: '100%',
  // 字体，字号，字体颜色，粗体，斜体，下划线，插入图片，居左，居中，居右
  toolbar:
    'undo redo | fontselect fontsizeselect forecolor backcolor bold italic underline | image | alignleft alignjustify aligncenter',
  plugins: [
    'autosave advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker toc ',
    'searchreplace wordcount visualblocks visualchars code fullscreen nonbreaking',
    'save table directionality emoticons paste textcolor colorpicker textpattern imagetools',
    'noneditable print'
  ],
  setup(editor: E) {
    editor.on('input', () => {
      emit('input', editor);
    });
    editor.once('init', () => {
      emit('init', editor);
      editorVM.value = editor;
    });
  },
  paste_data_images: true,
  async images_upload_handler(blobInfo, success) {
    const form = new FormData();
    form.append('file', blobInfo.blob());
    const { data } = await useApiFmArticleCommonFileUploadByPost(form);
    success(data?.result || '');
    const html = editorVM.value?.getContent();
    html && emit('update:modelValue', html);
    emit('images_upload_done');
  },
  ...attrs
};

const editorVal = computed({
  get: () => props.modelValue || '',
  set(html: string) {
    emit('update:modelValue', html);
  }
});

function getWordNum() {
  const wordcount = editorVM.value?.plugins.wordcount;
  return wordcount?.body.getCharacterCount();
}

defineExpose({
  getWordNum,
  editorVM
});
</script>
<style lang="scss">
.el-form-item.is-error .tox-tinymce,
.el-form-item.is-error .inline-mode {
  border-color: var(--el-color-danger);
}
.inline-mode {
  border: 1px dashed #e3e6ec;
  min-height: 10vh;
  width: 100%;

  img {
    max-width: 100%;
  }
}
</style>
