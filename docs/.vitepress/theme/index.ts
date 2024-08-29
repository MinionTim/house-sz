import DefaultTheme from 'vitepress/theme'
import '@fancyapps/ui/dist/fancybox.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    if (typeof window !== 'undefined') {
      // 确保代码仅在客户端环境中执行
      import('@fancyapps/ui/dist/fancybox.umd.js').then((module) => {
        const Fancybox = module.Fancybox; 
        Fancybox.bind('[data-fancybox="gallery"]', {
          infinite: false,
          Thumbs: false,
          Toolbar: {
            display: [
              { id: "prev", position: "center" },
              { id: "counter", position: "left" },
              { id: "next", position: "center" },
              // "zoom",
              "fullscreen",
              "download",
               "close",
            ]
          },
          Carousel: {
            Navigation: false, // 禁用箭头导航
          },
        });
      });
    }
  },
};