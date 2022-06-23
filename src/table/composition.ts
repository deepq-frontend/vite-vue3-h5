import { ref } from 'vue';
import DqTable from '@/components/dq-table/index.vue';
import { PaginationProps } from 'element-plus';

export const useTable = () => {
  const dqTableVM = ref<InstanceType<typeof DqTable>>();
  const setPagination = (arg: Partial<PaginationProps>) => {
    dqTableVM.value?.setPagination(arg);
  };

  const emitFetch = (isReset = false) => {
    if (isReset) {
      setPagination({
        currentPage: 1
      });
    }
    dqTableVM.value?.emitFetch();
  };

  return {
    dqTableVM,
    setPagination,
    emitFetch
  };
};
