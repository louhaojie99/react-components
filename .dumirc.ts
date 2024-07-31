import { defineConfig } from 'dumi';

const logo = `https://gw.alipayobjects.com/zos/hitu-asset/c88e3678-6900-4289-8538-31367c2d30f2/hitu-1609235995955-image.png`;
const github = 'https://github.com/louhaojie99/react-components';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    title: 'react-components',
    description: {
      'zh-CN': '基于 Ant Design 开发的基础组件库',
      'en-US': 'Base component library based on Ant Design',
    },
    name: 'HJ',
    logo,
    lastUpdated: true,
    // nav: {
    //   'zh-CN': [
    //     {
    //       title: '组件',
    //       link: '/components',
    //     },
    //     { title: '更新日志', link: '/changelog' },
    //   ],
    //   'en-US': [
    //     { title: 'Components', link: '/components/async-button-en' },
    //     { title: 'ChangeLog', link: '/changelog-en' },
    //   ],
    // },
    socialLinks: {
      github,
    },
  },
  favicons: [logo],
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'English' },
  ],
  npmClient: 'pnpm',
  // github pages config
  base: '/react-components/',
  publicPath: '/react-components/',
});
