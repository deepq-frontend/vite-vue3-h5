<template>
  <el-date-picker
    v-model="date"
    type="datetimerange"
    format="YYYY-MM-DD HH:mm"
    value-format="YYYY-MM-DD HH:mm:ss"
    range-separator="到"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    :clearable="false"
    :shortcuts="DATE_PICKER_SHORTCUTS"
    :disabled-date="handlerDisabledDate"
    @calendar-change="handlerCalendarChange"
  />
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import { DATE_PICKER_SHORTCUTS } from '@/settings';
import Day, { UnitType } from 'dayjs';

const props = defineProps<{
  start?: string;
  end?: string;
  modelValue?: (string | undefined)[];
  limitTime?: {
    times: number;
    type: UnitType;
  };
}>();

const emits = defineEmits<{
  (event: 'update:start', date?: string): void;
  (event: 'update:end', date?: string): void;
  (event: 'update:modelValue', date?: (string | undefined)[]): void;
}>();

const date = computed<(string | undefined)[] | null>({
  get() {
    return props.modelValue || [props.start, props.end];
  },
  set(value) {
    console.log(value);
    if (value) {
      emits('update:start', value[0]);
      emits('update:end', value[1]);
      emits('update:modelValue', value);
    } else {
      emits('update:start', undefined);
      emits('update:end', undefined);
      emits('update:modelValue', []);
    }
  }
});

const _startDate = ref<string | null>(null);

const handlerCalendarChange = (date: string[]) => {
  if (date[1]) {
    _startDate.value = null;
  } else {
    _startDate.value = date[0];
  }
};

const handlerDisabledDate = (time: string) => {
  if (!props.limitTime || _startDate.value === null) {
    return false;
  }
  const target = Day(time);
  const start = Day(_startDate.value).add(
    props.limitTime.times,
    props.limitTime.type
  );
  const end = Day(_startDate.value).subtract(
    props.limitTime.times,
    props.limitTime.type
  );
  return !target.isBetween(start, end, 'day');
};
</script>
<script lang="ts">
// import { defineComponent } from 'vue'
// export default defineComponent({
//   name: ''
// })
</script>
<style lang="scss" scoped></style>
