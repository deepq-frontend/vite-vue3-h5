import { App } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as icons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import SvgIcon from '@/components/svg-icon/index.vue';

import {
  Download,
  Delete,
  VideoPlay,
  VideoPause,
  ArrowDown,
  ArrowUp,
  CircleCloseFilled,
  Search,
  SuccessFilled,
  CirclePlusFilled,
  Edit,
  Plus,
  Warning,
  CirclePlus,
  Remove,
  EditPen,
  WarningFilled
} from '@element-plus/icons-vue';
const ElementIcon = [
  Download,
  Delete,
  VideoPlay,
  VideoPause,
  ArrowDown,
  ArrowUp,
  CircleCloseFilled,
  CirclePlusFilled,
  Search,
  SuccessFilled,
  Edit,
  Warning,
  CirclePlus,
  Remove,
  Plus,
  EditPen,
  WarningFilled
];
export default {
  install(app: App) {
    Object.values(icons).forEach(item => {
      if (typeof item !== 'string') {
        library.add(item);
      }
    });
    app.component('FontAwesomeIcon', FontAwesomeIcon);
    app.component('SvgIcon', SvgIcon);
    ElementIcon.forEach(icon => {
      app.component(icon.name, icon);
    });
  }
};
