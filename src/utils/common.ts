// form表单 rule
export const commonFormRule = (message: string, trigger = 'blur') => {
  return [
    {
      required: true,
      message,
      trigger
    }
  ];
};

// undefined OR null Ts异常抛错
export const ensure: <T>(
  argument: T | undefined | null,
  message?: string
) => T = (argument, message = 'ensure => undefined OR null') => {
  if (argument === undefined || argument === null) {
    throw new TypeError(message);
  }
  return argument;
};

// 防抖
// eslint-disable-next-line @typescript-eslint/ban-types
export const debounce = (fn: Function, delay: number) => {
  let timer: number | undefined;
  return function (...args: unknown[]) {
    const arg = args;
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      fn.apply(arg);
    }, delay);
  };
};

export function timepend(time: number) {
  console.log(time);
  let minute = '00';
  let second = '00';
  const m = Math.floor(time / 60);
  const s = time % 60;
  if (m < 10) {
    minute = '0' + m;
  } else {
    minute = m.toString();
  }
  if (s < 10) {
    second = '0' + s;
  } else {
    second = s.toString();
  }
  return `${minute}:${second}`;
}
