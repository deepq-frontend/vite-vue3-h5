import {
  computed,
  onBeforeUnmount,
  onMounted,
  onBeforeMount,
  watch
} from 'vue';
import { AppModule, DeviceType } from '@/store/modules/app';
import { useRoute } from 'vue-router';

const WIDTH = 992; // refer to Bootstrap's responsive design

export default () => {
  const device = computed(() => {
    return AppModule.device;
  });
  const sidebar = computed(() => {
    return AppModule.sidebar;
  });

  const route = useRoute();

  watch(route, () => {
    if (device.value === DeviceType.Mobile && sidebar.value.opened) {
      AppModule.CloseSideBar(false);
    }
  });

  function getMobile() {
    const rect = document.body.getBoundingClientRect();
    return rect.width - 1 < WIDTH;
  }

  function resizeHandler() {
    if (!document.hidden) {
      const isMobile = getMobile();
      AppModule.ToggleDevice(isMobile ? DeviceType.Mobile : DeviceType.Desktop);
      if (isMobile) {
        AppModule.CloseSideBar(true);
      }
    }
  }

  onBeforeMount(() => {
    window.addEventListener('resize', resizeHandler);
  });

  onMounted(() => {
    const isMobile = getMobile();
    if (isMobile) {
      AppModule.ToggleDevice(DeviceType.Mobile);
      AppModule.CloseSideBar(true);
    }
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeHandler);
  });

  return {
    device,
    sidebar
  };
};
