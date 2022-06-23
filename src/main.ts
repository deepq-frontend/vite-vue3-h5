import { UserModule } from '@/store/modules/user';
import { createApp, Directive } from 'vue';
import createTrack from '@/plugins/alife-trace';

import App from './App.vue';
import router, { registerRouter } from '@/router';
import store from '@/store';
import 'virtual:svg-icons-register';
import 'normalize.css/normalize.css';
import 'hover.css/css/hover.css';
import '@/styles/index.scss';

import plugins from './plugins';
import * as directives from '@/directives';
import '@/permission';
// import login from './login';

// login().then(() => {
registerRouter();
const app = createApp(App).use(store).use(router).use(plugins);

Object.keys(directives).forEach(key => {
  app.directive(key, (directives as { [key: string]: Directive })[key]);
});
app.mount('#app');

const track = createTrack({
  pid: 'hkfgndnd01@ca7373eaf73510c',
  uid: UserModule.userInfo.userId,
  userName: UserModule.name
});
console.log('current login user is: ', UserModule.name);

// track.setUsername();
// });
