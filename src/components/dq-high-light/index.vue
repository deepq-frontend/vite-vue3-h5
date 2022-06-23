<template>
  <span v-xss="html" class="dq-high-light rich-text"></span>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { genStyle2Str } from '@/utils/dom';

export default defineComponent({
  name: 'DqHighLight',
  props: {
    list: {
      type: Array as PropType<
        Array<{ reg: RegExp; style: Record<string, string> | string }>
      >,
      default: () => [],
      required: true
    },
    string: {
      type: String as PropType<string | null | undefined>,
      default: '',
      required: true
    }
  },
  setup(props) {
    const html = computed(() => {
      const str = props.list.reduce((total, next) => {
        return total.replaceAll(next.reg, p1 => {
          const style =
            typeof next.style === 'string'
              ? next.style
              : genStyle2Str(next.style);
          return `<span style="${style}">${p1}</span>`;
        });
      }, props.string || '');
      return str;
    });
    return {
      html
    };
  }
});
</script>
<style lang="scss" scoped></style>
