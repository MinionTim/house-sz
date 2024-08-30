import { PluginSimple } from 'markdown-it';
import type MarkdownIt from 'markdown-it'

/*
  如果<img>标签的上级为超链接，即<a>标签，则在a标签上添加'data-fancybox': 'gallery'，
  而不在img标签上添加。否则，则仅在img标签上添加'data-fancybox': 'gallery'
*/
export const fancyboxPlugin: PluginSimple = (md: MarkdownIt) => {
  md.core.ruler.after('inline', 'add-fancybox', (state) => {
    const tokens = state.tokens;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (token.type === 'inline' && token.children) {
        const children = token.children;

        for (let j = 0; j < children.length; j++) {
          const child = children[j];

          if (child.type === 'image') {
            // 判断图片前面一个 token 是否是 link_open
            if (j > 0 && children[j - 1].type === 'link_open') {
              // 如果是，被 <a> 包裹，则在 <a> 上添加 data-fancybox 属性
              children[j - 1].attrSet('data-fancybox', 'gallery');
            } else {
              // 否则，在 <img> 上添加 data-fancybox 属性
              child.attrSet('data-fancybox', 'gallery');
            }
          }
        }
      }
    }
  });
};