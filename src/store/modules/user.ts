import { RespDataSsoUser } from '@/_api/types/sso-client-api';
import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from 'vuex-module-decorators';
import {
  useApiFmArticleSsoLogoutUrlByGet,
  useApiFmArticleSsoMeByGet
} from '@/_api/apis/sso-client-api';
import { getToken, setToken, removeToken } from '@/utils/cookies';
import router, { resetRouter } from '@/router';
import { PermissionModule } from './permission';
import { TagsViewModule } from './tags-view';
import store from '@/store';

export interface IUserState {
  token: string;
  name: string;
  avatar: string;
  introduction: string;
  roles: string[];
  email: string;
  userInfo: RespDataSsoUser;
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
  public token = getToken() || '';
  public name = '';
  public avatar = '';
  public introduction = '';
  public roles: string[] = [];
  public email = '';
  public userInfo = {};

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token;
  }

  @Mutation
  private SET_USER_INFO(info: RespDataSsoUser) {
    this.userInfo = info;
  }

  @Mutation
  private SET_NAME(name: string) {
    this.name = name;
  }

  @Mutation
  private SET_AVATAR(avatar: string) {
    this.avatar = avatar;
  }

  @Mutation
  private SET_INTRODUCTION(introduction: string) {
    this.introduction = introduction;
  }

  @Mutation
  private SET_ROLES(roles: string[]) {
    this.roles = roles;
  }

  @Mutation
  private SET_EMAIL(email: string) {
    this.email = email;
  }

  @Action
  public ResetToken() {
    removeToken();
    this.SET_TOKEN('');
    this.SET_ROLES([]);
  }

  @Action
  public async GetUserInfo() {
    const { data } = await useApiFmArticleSsoMeByGet();
    if (data) {
      const { username, avatar, email } = data;
      // this.SET_ROLES(roles)
      username && this.SET_NAME(username);
      avatar && this.SET_AVATAR(avatar);
      email && this.SET_EMAIL(email);
      this.SET_USER_INFO(data);
    }
  }

  @Action
  public async ChangeRoles(role: string) {
    // Dynamically modify permissions
    const token = role + '-token';
    this.SET_TOKEN(token);
    setToken(token);
    await this.GetUserInfo();
    resetRouter();
    // Generate dynamic accessible routes based on roles
    PermissionModule.GenerateRoutes(this.roles);
    // Add generated routes
    PermissionModule.dynamicRoutes.forEach(route => {
      router.addRoute(route);
    });
    // Reset visited views and cached views
    TagsViewModule.delAllViews();
  }

  @Action
  public async LogOut() {
    if (this.token === '') {
      throw Error('LogOut: token is undefined!');
    }
    const { data } = await useApiFmArticleSsoLogoutUrlByGet();
    if (data?.logoutUrl) {
      removeToken();
      resetRouter();
      TagsViewModule.delAllViews();
      this.SET_TOKEN('');
      this.SET_ROLES([]);
      location.replace(data.logoutUrl);
    }
  }

  @Action
  public async setToken(token: string) {
    this.SET_TOKEN(token);
  }
}

export const UserModule = getModule(User);
