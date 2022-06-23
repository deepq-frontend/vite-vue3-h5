import { UserModule } from '@/store/modules/user';
import { Directive } from 'vue';

export const permission: Directive = {
  mounted(el: HTMLElement, binding) {
    const { value } = binding;
    const roles = UserModule.roles;
    if (value && value instanceof Array && value.length > 0) {
      const permissionRoles = value;
      const hasPermission = roles.some(role => {
        return permissionRoles.includes(role);
      });
      if (!hasPermission) {
        // eslint-disable-next-line no-unused-expressions
        el.parentElement?.removeChild(el);
        // el.style.display = 'none'
      }
    } else {
      throw new Error("need roles! Like v-permission=\"['admin','editor']\"");
    }
  }
};
