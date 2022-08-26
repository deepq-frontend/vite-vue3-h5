import { Directive } from 'vue';
import Xss from 'xss';
const insert = (el: HTMLElement, value: string) => {
  const html = Xss(value, {
    whiteList: {
      img: ['style', 'src']
      // ...BASIC_TAG
    },
    onTag(tag, html) {
      if (tag !== 'script') {
        return html;
      }
    },
    css: false
  });
  el.innerHTML = html;
};
export const xss: Directive = {
  mounted(el: HTMLElement, binding) {
    insert(el, binding.value);
  },
  updated(el: HTMLElement, binding) {
    if (binding.value === binding.oldValue) return;
    insert(el, binding.value);
  }
};
