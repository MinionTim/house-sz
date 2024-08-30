import DefaultTheme from 'vitepress/theme'
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    if (typeof window !== 'undefined') {
      // 确保代码仅在客户端环境中执行
      import('@fancyapps/ui').then((module) => {
        const Fancybox = module.Fancybox; 
        Fancybox.bind('[data-fancybox="gallery"]', {
          infinite: false,
          Thumbs: false,
          Carousel: {
            Navigation: false,
          },
          Toolbar: {
            display: {
              left: [],
              middle: ["prev", "infobar", "next"],
              right: ["fullscreen", "close"],
            },
          },
        });
      }).catch(error => {
        console.error('Failed to load the Fancybox module:', error);
      });
    }
  },
};