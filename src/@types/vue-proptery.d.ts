import { ElMessage } from 'element-plus';
import { apis } from '@/plugins/api';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $message: ElMessage;
    $http: typeof apis;
  }
}

declare module 'vue-router' {
  interface RouteMeta {
    title?: string;
    roles?: string[];
    hidden?: boolean;
    showDot?: boolean;
  }
  interface RouteRecordNormalized {
    title?: string;
    fullPath?: string;
  }

  interface RouterLinkProps {
    $el: HTMLElement;
  }
  interface Router {
    matcher: [];
  }
  interface RouteRecordRaw {
    permissionNodes: { title: string; name: string }[];
  }

  // interface RouteRecordRaw {
  //   name: string | symbol
  // }
}
