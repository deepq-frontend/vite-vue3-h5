import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { join, normalize } from 'path';
import { readFileSync } from 'fs';
import DefineOptions from 'unplugin-vue-define-options/vite';
import { resolve } from 'path';
import { name } from './package.json';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { vitePlugin } from 'dq-oss-page';

const scssFile = [
  'src/styles/_rules.scss',
  'src/styles/_variables.module.scss',
  'src/styles/_mixins.scss'
].reduce((style, next) => {
  const str = readFileSync(join(__dirname, next));
  return (style += str);
}, '');

// https://vitejs.dev/config/
export default ({ mode }) => {
  const envPrefix = 'VUE_APP_';
  const {
    VUE_APP_BASE_API,
    VUE_APP_PROXY_API,
    VUE_APP_LABEL_API,
    VUE_APP_LABEL_PROXY_API,
    VUE_APP_DEPLOY_ENV
  } = loadEnv(mode, process.cwd(), envPrefix);
  const { accessKeyId, accessKeySecret, OSS_BUCKET_NAME } = loadEnv(
    mode,
    process.cwd(),
    ''
  );
  const { VUE_APP_OSS_BASE_PATH } = loadEnv('', process.cwd(), '');
  const base = `/${name}-${VUE_APP_DEPLOY_ENV}/`;
  const output = join('dist', base);
  const input = {
    main: resolve(__dirname, 'index.html')
  };

  return defineConfig({
    base: normalize('/' + VUE_APP_OSS_BASE_PATH + base),
    plugins: [
      vue(),
      DefineOptions(),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [resolve(__dirname, 'src/icons/svg')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]'
      }),
      vitePlugin({
        accessKeyId,
        accessKeySecret,
        bucketName: OSS_BUCKET_NAME,
        dist: join(process.cwd(), 'dist'),
        basePath: VUE_APP_OSS_BASE_PATH
      })
    ],
    envPrefix,
    assetsInclude: ['swiper/swiper-bundle.min.css'],
    resolve: {
      alias: {
        '@': join(__dirname, './src'),
        '@article': join(__dirname, './article-detail'),
        '@not-found': join(__dirname, './not-found')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: scssFile
        }
      }
    },
    server: {
      port: 18899,
      force: true,
      proxy: {
        [`^${VUE_APP_LABEL_API}`]: {
          target: VUE_APP_LABEL_PROXY_API,
          changeOrigin: true,
          rewrite: path => {
            console.log(`${VUE_APP_LABEL_API} ====>`, path);
            return path.replace(VUE_APP_LABEL_API, '');
          }
        },
        [`^${VUE_APP_BASE_API}`]: {
          target: VUE_APP_PROXY_API,
          changeOrigin: true,
          rewrite: path => {
            console.log(`${VUE_APP_BASE_API} ====>`, path);
            return path.replace(VUE_APP_BASE_API, '');
          }
        }
      }
    },
    build: {
      rollupOptions: {
        input
      },
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: VUE_APP_DEPLOY_ENV === 'prd'
        }
      },
      outDir: output
    }
  });
};
