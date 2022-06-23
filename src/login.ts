import { setToken } from '@/utils/cookies';
import { useApiFmArticleSsoTokenByGet } from '@/_api/apis/sso-client-api';
import { PermissionModule } from '@/store/modules/permission';
import { UserModule } from '@/store/modules/user';
import { ElLoading } from 'element-plus';

const getQuery = (): Record<string, string> => {
  const queryStr = location.href.split('?')[1];
  if (queryStr) {
    const list = queryStr.split('&');
    return list.reduce((total, next) => {
      const temp = next.split('=');
      return Object.assign(total, {
        [temp[0]]: temp[1]
      });
    }, {});
  }
  return {};
};

// 校验获取token，无token则调用getToken接口，接口会根据是否携带code返回数据。
// 无code情况下会返回重定向地址，前端进行重定向登录
export const getToken = async (getCode?: boolean) => {
  if (!UserModule.token) {
    const query = getQuery();
    const { data } = await useApiFmArticleSsoTokenByGet({
      code: getCode ? undefined : query.code
    });
    if (data?.accessToken) {
      setToken(data.accessToken);
      UserModule.setToken(data.accessToken);
    } else {
      return data?.redirectUrl && location.replace(data.redirectUrl);
    }
  }
};

export default async () => {
  const loading = ElLoading.service({
    lock: true,
    fullscreen: true,
    text: '系统加载中...',
    background: 'rgba(0,0,0,0.8)'
  });
  await getToken();
  return new Promise(resolve => {
    return Promise.all([
      UserModule.GetUserInfo(),
      PermissionModule.FetchRoutes()
    ]).then(args => {
      loading.close();
      resolve(args);
    });
  });
};
