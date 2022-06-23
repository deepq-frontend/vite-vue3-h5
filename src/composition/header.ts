// 页面隐藏header

import { SettingsModule } from '@/store/modules/settings';
import { onBeforeMount, onBeforeUnmount } from 'vue';

export const useHeader = () => {
  onBeforeMount(() => {
    SettingsModule.toggleHeader(false);
  });
  onBeforeUnmount(() => {
    SettingsModule.toggleHeader(true);
  });
};
