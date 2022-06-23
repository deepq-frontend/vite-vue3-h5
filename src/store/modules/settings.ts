import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule
} from 'vuex-module-decorators';
import store from '@/store';
import elementVariables from '@/styles/element-variables.scss';
import defaultSettings from '@/settings';

export interface ISettingsState {
  theme: string;
  fixedHeader: boolean;
  showSettings: boolean;
  showTagsView: boolean;
  showSidebarLogo: boolean;
  sidebarTextTheme: boolean;
  hideHeader: boolean;
}

@Module({ dynamic: true, store, name: 'settings' })
class Settings extends VuexModule implements ISettingsState {
  public theme = elementVariables.theme;
  public fixedHeader = defaultSettings.fixedHeader;
  public showSettings = defaultSettings.showSettings;
  public showTagsView = defaultSettings.showTagsView;
  public showSidebarLogo = defaultSettings.showSidebarLogo;
  public sidebarTextTheme = defaultSettings.sidebarTextTheme;
  public hideHeader = defaultSettings.hideHeader;

  @Mutation
  private CHANGE_SETTING(payload: { key: keyof ISettingsState; value: never }) {
    const { key, value } = payload;
    if (Object.prototype.hasOwnProperty.call(this, key)) {
      this[key] = value;
    }
  }

  @Mutation
  private HIDE_HEADER() {
    this.fixedHeader = false;
    this.hideHeader = true;
  }
  @Mutation
  private SHOW_HEADER() {
    this.fixedHeader = defaultSettings.fixedHeader;
    this.hideHeader = false;
  }

  @Action
  public ChangeSetting(payload: { key: keyof ISettingsState; value: never }) {
    this.CHANGE_SETTING(payload);
  }

  @Action
  public toggleHeader(payload: boolean) {
    payload ? this.SHOW_HEADER() : this.HIDE_HEADER();
  }
}

export const SettingsModule = getModule(Settings);
