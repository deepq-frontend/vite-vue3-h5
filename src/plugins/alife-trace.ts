import BrowserLogger from 'alife-logger';
import { version } from '../../package.json';

const ENV_MAP = {
  dev: 'local',
  pre: 'pre',
  prd: 'prod',
  sit: 'pre'
};

export default (extend: Record<string, unknown> = {}) => {
  // BrowserLogger.singleton(conf) conf传入config配置。
  const track = BrowserLogger.singleton({
    pid: 'hkfgndnd01@ca7373eaf73510c',
    release: version,
    appType: 'web',
    environment: ENV_MAP[import.meta.env.VUE_APP_DEPLOY_ENV],
    imgUrl: 'https://arms-retcode.aliyuncs.com/r.png?',
    behavior: import.meta.env.NODE_ENV === 'production',
    sendResource: true,
    enableLinkTrace: true,
    enableSPA: true,
    useFmp: true,
    ...extend,
    setUsername() {
      return extend.userName;
    }
  });

  return track;
};
