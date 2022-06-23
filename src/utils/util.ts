/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 浅合并字段,根据目标对象的key赋值
 * @param target
 * @param param
 * @returns
 */
export function mergeObject<T>(
  target: Record<string, any>,
  param?: Record<string, any>
): T {
  if (!param) {
    return target as T;
  }
  for (const key in target) {
    target[key] = param[key];
  }
  return target as T;
}

/**
 * 将空字符串转化为undefined
 * @param target
 */
export function deleteEmptyProps(target: Record<string, unknown>) {
  for (const key in target) {
    const element = target[key];
    if (element === '') {
      target[key] = undefined;
    } else if (Object.prototype.toString.call(element) === '[object Object]') {
      deleteEmptyProps(element as Record<string, unknown>);
    }
  }
}

export function deepClone(data: unknown) {
  return JSON.parse(JSON.stringify(data));
}

export function promiseWait(timeout: number) {
  return new Promise(res => {
    setTimeout(res, timeout);
  });
}
