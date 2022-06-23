import { Directive } from 'vue';
import Xss from 'xss';
const insert = (el: HTMLElement, value: string) => {
  el.innerHTML = Xss(value, {
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
};
export const xss: Directive = {
  mounted(el: HTMLElement, binding) {
    insert(el, binding.value);
  },
  updated(el: HTMLElement, binding) {
    console.log(binding);
    insert(el, binding.value);
  }
};
