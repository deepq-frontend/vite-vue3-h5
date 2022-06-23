import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { join } from 'path';
import { readFileSync } from 'fs';
import DefineOptions from 'unplugin-vue-define-options/vite';
import { resolve } from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

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
    VUE_APP_DEPLOY_ENV
  } = loadEnv(mode, process.cwd(), envPrefix);
  return defineConfig({
    plugins: [
      vue(),
      DefineOptions(),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [resolve(__dirname, 'src/icons/svg')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]'
      })
    ],
    // base: VUE_APP_DEPLOY_ENV !== 'prd' ? `/${version}/` : `/${version}/`,
    envPrefix,
    assetsInclude: ['swiper/swiper-bundle.min.css'],
    resolve: {
      alias: {
        '@': join(__dirname, './src'),
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
      port: 80,
      proxy: {
        [`^${VUE_APP_BASE_API}`]: {
          target: VUE_APP_PROXY_API,
          changeOrigin: true,
          rewrite: path => {
            console.log(path);
            return path.replace(VUE_APP_BASE_API, '');
          }
        },
      }
    },
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
        }
      },
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: VUE_APP_DEPLOY_ENV === 'prd'
        }
      }
      // outDir: VUE_APP_DEPLOY_ENV !== 'prd' ? `dist/${version}` : `dist`
    }
  });
};
