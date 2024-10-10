import { defineConfig } from 'vitepress'
import {fancyboxPlugin} from './theme/plugins/fancyboxPlugin';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '深房助手',
  description: 'A VitePress Site',
  lang: "zh-CN",
  head: [
    ['link', { rel: 'icon', href: '/icons/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/icons/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' },
      //     { text: 'Make Some Tests', link: '/test01' },
      //   ],
      // },
      {
        // text: '购房',
        items: [
          { text: "概述", link: "/introduction" }
        ]
      },
      
      {
        text: '学校',
        items: [
          { text: "概述", link: "/school/introduction" },
          {
            text: "积分", link: "/school/jifen-index",
            items: [
              { text: "龙岗区", link: "/school/jifen-longgang" },
              { text: "龙华区", link: "/school/jifen-longhua" },
              { text: "宝安区", link: "/school/jifen-baoan" },
            ],
          },
          {
            text: "学区", link: "",
            items: [
              { text: "各区汇总", link: "/school/xuequ-all" },
              // { text: "龙华区", link: "/school/xuequ-longhua" },
            ],
          },
        ],
      },
      {
        text: '新房/二手房',
        items: [
          {
            text: "二手房交易数据", link: "/house/secondhand/transaction-index",
            items: [
              { text: "龙岗区" },
              {
                items: [
                  { text: "2023年", link: "/house/secondhand/transaction-lg-2023" },
                  { text: "2024年（唐老师傅版）", link: "/house/secondhand/transaction-lg-2024-tang" },
                  { text: "2024年（广深版）", link: "/house/secondhand/transaction-lg-2024-gs" },
                ]
              },
              { text: "龙华区" },
              {
                items: [
                  { text: "2023年", link: "/house/secondhand/transaction-lh-2023" },
                  { text: "2024年", link: "/house/secondhand/transaction-lh-2024" },
                ]
              },
            ],
          }
        ],
      },
      {
        text: '其他',
        items: [
          {
            text: "交通", link: "",
            items: [
              { text: "地铁规划", link: "/others/traffic-metro" },
            ],
          },
          {
            text: "政策", link: "/others/policy-index",
            items: [
              { text: "房贷利率", link: "/others/policy-1" },
              { text: "深圳楼市政策汇总", link: "/others/policy-2" },
            ],
          },
          {
            text: "市政规划", link: "",
            items: [
              { text: "深圳市国土空间总体规划2035年", link: "/others/city-plan-1" },
              { text: "市政规划2", link: "/others/city-plan-2" },
            ],
          },
        ],
      },
    ],

    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    returnToTopLabel: "返回顶部",
    sidebarMenuLabel: "目录",
    outline: {
      label: "当前页大纲",
    },

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
