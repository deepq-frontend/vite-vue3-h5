import { App } from 'vue';
import Element from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import DqSelect from '@/components/dq-select/index.vue';
import DqUi from 'dq-ui';

export default {
  install(app: App) {
    // app.component('DqTable', Table);
    app.component('DqSelect', DqSelect);

    app
      .use(Element, {
        locale: zhCn,
        zIndex: 100
        // size: 'small'
      })
      .use(DqUi);
  }
};
