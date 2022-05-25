import { defineConfig } from 'dumi';

export default defineConfig({
  title: '戕凛',
  mode: 'site',
  base: '/',
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'Sanoon',
      path: 'https://sanoon.me',
    },
  ],
});
