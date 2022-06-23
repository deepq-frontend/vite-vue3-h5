<template>
  <el-select v-model="_value" clearable>
    <el-option
      v-for="(option, idx) in _options"
      :key="idx"
      :label="option[labelKey]"
      :value="option[valueKey]"
    />
    <template v-if="$slots.prefix" #prefix>
      <slot name="prefix"></slot>
    </template>
  </el-select>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  defineProps,
  ref,
  onBeforeMount
} from 'vue';
export default defineComponent({
  name: 'DqSelect'
});
</script>
<script lang="ts" setup>
export interface IOption {
  value?: string | number | boolean;
  label?: string | number;
  disabled?: boolean;
}

interface IDqSelectProps {
  api?(args?: unknown): Promise<unknown>;
  defaultFirstOption?: boolean;
  modelValue: unknown;
  dataPath?: string;
  options?: IOption[];
  labelKey?: string;
  valueKey?: string;
  param?: unknown;
}

const emits = defineEmits<{
  (e: 'update:modelValue', data: unknown): void;
}>();

const props = withDefaults(defineProps<IDqSelectProps>(), {
  labelKey: 'label',
  valueKey: 'value',
  options: () => [],
  dataPath: undefined,
  api: undefined,
  param: () => Object.create({})
});

const _value = computed({
  get: () => {
    return props.modelValue;
  },
  set(val) {
    emits('update:modelValue', val);
  }
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const remoteOption = ref<any>(null);

function getDataByPath() {
  if (props.dataPath && remoteOption.value) {
    const data = remoteOption.value || [];
    let item = data;
    const pathArr = props.dataPath.split('.');
    pathArr.forEach(key => {
      try {
        item = item[key];
      } catch (error) {
        item = [];
      }
    });
    return item;
  }
  return remoteOption.value;
}

const _options = computed(() => {
  const list = getDataByPath();
  return list || props.options;
});

onBeforeMount(async () => {
  if (props.api) {
    const data = await props.api(props.param || {});
    remoteOption.value = data;
  }
  if (props.defaultFirstOption) {
    try {
      emits('update:modelValue', (_options.value as any)[0][props.valueKey]);
    } catch (error) {
      console.warn('empty options', _options.value);
    }
  }
});
</script>
<style lang="scss" scoped></style>
