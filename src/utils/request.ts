import { setToken } from './cookies';
import { useApiFmArticleSsoLogoutUrlByGet } from './../_api/apis/sso-client-api';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// ElMessageBox
import { ElMessage } from 'element-plus';
import { UserModule } from '@/store/modules/user';
import { getToken } from '@/login';

declare module 'axios' {
  interface Axios {
    request<T = unknown>(config: AxiosRequestConfig<unknown>): Promise<T>;
  }
  interface AxiosRequestConfig {
    _noMessage?: boolean;
  }
}
const HTTP_INSTANCE_MAP = new Map();

function checkToken(response: AxiosResponse) {
  const header = response.headers;
  const token = header['token-refresh'];
  if (token) {
    setToken(token);
    UserModule.setToken(token);
  }
}

export function createHttp(
  baseURL?: string,
  option: AxiosRequestConfig = {},
  useHttpCode?: boolean
): <T>(config: AxiosRequestConfig) => Promise<T> {
  const instance = HTTP_INSTANCE_MAP.get(baseURL);
  if (instance) {
    return instance;
  }

  const service = axios.create({
    baseURL, // url = base url + request url
    timeout: 50000,
    // withCredentials: true, // send cookies when cross-domain requests
    ...option
  });

  // Request interceptors
  service.interceptors.request.use(
    config => {
      config.headers = {
        ...(config.headers || {}),
        'X-Requested-With': 'XMLHttpRequest'
      };
      // Add X-Access-Token header to every request, you can add other custom headers here
      if (UserModule.token && config.headers) {
        config.headers.Authorization = `bearer ${UserModule.token}`;
      }
      // 转译get请求的参数
      // if (config.params) {
      //   for (const key in config.params) {
      //     const element = config.params[key];
      //     config.params[key] = encodeURIComponent(element);
      //   }
      // }
      return config;
    },
    error => {
      Promise.reject(error);
    }
  );

  // Response interceptors
  service.interceptors.response.use(
    async response => {
      const res = response.data;
      // 校验TOKEN
      checkToken(response);
      if (response.config._noMessage || useHttpCode) {
        return res;
      }
      if (res.code === 417) {
        UserModule.ResetToken();
        await useApiFmArticleSsoLogoutUrlByGet();
        getToken(true);
        return false;
      }
      // return response
      if (res.code !== 200) {
        ElMessage({
          message: res.msg || 'Error',
          type: 'error',
          duration: 5 * 1000
        });
        return Promise.reject(new Error(res.msg || 'Error'));
      } else {
        return res;
      }
    },
    error => {
      ElMessage({
        message: error,
        type: 'error',
        duration: 5 * 1000
      });
      return Promise.reject(error);
    }
  );

  const request = async <T>(config: AxiosRequestConfig): Promise<T> => {
    return service.request(config);
  };
  HTTP_INSTANCE_MAP.set(baseURL, request);
  return request;
}

export default createHttp(import.meta.env.VUE_APP_BASE_API, {
  headers: {
    'Content-Type': 'application/json'
  }
});

export const labelLibraryHttp = createHttp(
  import.meta.env.VUE_APP_LABEL_API,
  {
    headers: {
      USER: 'BAABF23A585FCBA87FACF667D4258C69'
    }
  },
  true
);
