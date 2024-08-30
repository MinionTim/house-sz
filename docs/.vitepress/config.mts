import { defineConfig } from 'vitepress'
import {fancyboxPlugin} from './theme/plugins/fancyboxPlugin';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'My Awesome Project',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Make Some Tests', link: '/test01' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    lastUpdated: {
      text: "上次更新时间",
    },
  },
  markdown: {
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true,
    },
    config: (md) => {
      // use more markdown-it plugins!
      // md.use(mdItCustomAttrs, 'image', {
      //   'data-fancybox': 'gallery',
      // })
      md.use(fancyboxPlugin);     

    },
  },
  lastUpdated: true,
})
