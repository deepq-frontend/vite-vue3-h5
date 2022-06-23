import { PermissionModule } from '@/store/modules/permission';
import 'nprogress/nprogress.css';
import router from './router';
import NProgress from 'nprogress';
// import { Route } from 'vue-router'
// import { UserModule } from '@/store/modules/user'

NProgress.configure({ showSpinner: false });

router.beforeEach(async (to, _, next) => {
  // Start progress bar
  NProgress.start();

  next();
  NProgress.done();
});

router.afterEach(to => {
  // Finish progress bar
  // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
  NProgress.done();
  PermissionModule.FetchRoutes();

  // set page title
  document.title = to.meta?.title || '采编运营中台';
});
