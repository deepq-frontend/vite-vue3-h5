import { ITagView } from '@/store/modules/tags-view';

const TAGS_VIEW_CACHE_KEY = 'TAGS_VIEW_CACHE_KEY';

export const setTagViewCache = (value: ITagView[]) => {
  localStorage.setItem(
    TAGS_VIEW_CACHE_KEY,
    JSON.stringify(
      value.map(el => {
        return {
          name: el.name,
          path: el.path,
          fullPath: el.fullPath,
          query: el.query,
          meta: el.meta,
          params: el.params
        };
      })
    )
  );
};

export const getTagViewCache = () => {
  try {
    const list = JSON.parse(localStorage.getItem(TAGS_VIEW_CACHE_KEY) || '[]');
    return list as ITagView[];
  } catch {
    return [];
  }
};
