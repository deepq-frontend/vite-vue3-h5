/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMetaEnv {
  readonly VUE_APP_BASE_API?: string;
  readonly VUE_APP_ARTICLE_API: string;
  readonly VUE_APP_ARTICLE_DEPLOY_DOMAIN: string;
  readonly VUE_APP_LABEL_API?: string;
  // 更多环境变量...
  readonly VUE_APP_DEPLOY_ENV: 'pre' | 'dev' | 'sit' | 'prd';
}

declare module 'alife-logger';
