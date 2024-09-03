import DefaultTheme from 'vitepress/theme'
import { inBrowser } from 'vitepress'
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 确保代码仅在客户端环境中执行
    if (inBrowser) {
      const isMobile = window.matchMedia('(max-width: 768px)').matches
      console.log('is mobile', isMobile)
      import('@fancyapps/ui').then((module) => {
        const Fancybox = module.Fancybox; 
        Fancybox.bind('[data-fancybox="gallery"]', {
          infinite: false,
          Thumbs: false,
          Carousel: {
            Navigation: isMobile ? false : true,
          },
          Toolbar: {
            display: {
              left: [],
              middle: ["prev", "infobar", "next"],
              right: isMobile ? ["fullscreen", "close"] : ["zoomIn", "zoomOut", "fullscreen", "download", "thumbs", "close"],
            },
          },
        });
      }).catch(error => {
        console.error('Failed to load the Fancybox module:', error);
      });
    }
  },
};