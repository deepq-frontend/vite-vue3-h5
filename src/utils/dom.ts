export const genStyle2Str = (style: Record<string, string>) => {
  return Object.keys(style).reduce((total, key) => {
    const _key = key.replaceAll(/[A-Z]/g, str => `-${str.toLocaleLowerCase()}`);
    console.log(style[key]);
    const _styleStr = `${_key}: ${style[key]};`;
    return (total += _styleStr);
  }, '');
};
