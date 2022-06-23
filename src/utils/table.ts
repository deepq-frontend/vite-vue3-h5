import { computed, ref } from 'vue';
import type { DqTable } from 'dq-ui';

export const useTable = (refName = 'tableVM') => {
  const tableVM = ref<InstanceType<typeof DqTable> | null>();

  const setTableTotal = (total?: number) => {
    tableVM.value?.setPagination({
      total: total || 0
    });
  };

  const getTableData = (reset?: boolean) => {
    if (reset) {
      tableVM.value?.setPagination({
        currentPage: 1
      });
    }
    tableVM.value?.emitFetch();
  };

  const clearSelectRows = () => {
    tableVM.value?.clearSelectRows();
  };
  const selectedRows = computed(() => {
    return tableVM.value?.selectedRows || [];
  });

  return {
    tableVM,
    [refName]: tableVM,
    setTableTotal,
    getTableData,
    clearSelectRows,
    selectedRows
  };
};
