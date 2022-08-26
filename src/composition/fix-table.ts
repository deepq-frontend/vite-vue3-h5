import { ref, onMounted, onBeforeUnmount } from 'vue';
import { debounce } from 'lodash-es';

export const calcTableHeight = (relativeDom?: HTMLElement | string) => {
  relativeDom = relativeDom || 'dq-table';
  const box = document.querySelector('.app-container.fix-table');
  if (!box) return '';
  const children = [...box?.childNodes] as HTMLElement[];
  const tableDom =
    typeof relativeDom === 'string'
      ? children.find(dom => dom.classList.contains(relativeDom as string))
      : relativeDom;
  const { paddingTop, paddingBottom } = getComputedStyle(box);
  let tableHeight =
    box.clientHeight - parseInt(paddingTop) - parseInt(paddingBottom);

  children.forEach(dom => {
    if (dom !== tableDom) {
      try {
        const { marginTop, marginBottom } = getComputedStyle(dom);
        const height =
          dom.clientHeight + parseInt(marginTop) + parseInt(marginBottom);

        tableHeight -= height;
      } catch (error) {
        // console.log(error);
      }
    }
  });

  return tableHeight - 51 + 'px';
};

export const useCalcTableHeight = (relativeDom?: HTMLElement | string) => {
  const tableHeight = ref<string>();
  const fn = debounce(() => {
    tableHeight.value = calcTableHeight(relativeDom);
  }, 50);
  onMounted(fn);

  window.addEventListener('resize', fn);
  onBeforeUnmount(() => {
    window.removeEventListener('resize', fn);
  });
  return {
    tableHeight
  };
};
