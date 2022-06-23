import { SettingsModule } from '@/store/modules/settings';
import { onBeforeUnmount } from 'vue';

export const useHideHeader = () => {
  SettingsModule.toggleHeader(false);
  onBeforeUnmount(() => {
    SettingsModule.toggleHeader(true);
  });
};
