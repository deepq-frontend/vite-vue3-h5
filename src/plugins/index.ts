import { App } from 'vue';
import icon from './icon';
import ui from './ui';
import './day';

export default {
  install(app: App) {
    app.use(icon);
    app.use(ui);
  }
};
