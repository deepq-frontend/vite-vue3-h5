import { getTagViewCache, setTagViewCache } from './../../utils/tags-view';
import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule
} from 'vuex-module-decorators';
import { RouteLocationNormalizedLoaded } from 'vue-router';
import store from '@/store';

export type ITagView = Partial<RouteLocationNormalizedLoaded>;

export interface ITagsViewState {
  visitedViews: ITagView[];
  cachedViews: (string | undefined | symbol)[];
}

@Module({ dynamic: true, store, name: 'tagsView' })
class TagsView extends VuexModule implements ITagsViewState {
  public visitedViews: ITagView[] = getTagViewCache();
  public cachedViews: (string | undefined | symbol)[] = [];

  @Mutation
  private ADD_VISITED_VIEW(view: ITagView) {
    if (this.visitedViews.some(v => v.path === view.path)) return;
    this.visitedViews.push(
      Object.assign({}, view, {
        title: (view.meta && view.meta.title) || 'no-name'
      })
    );
    setTagViewCache(this.visitedViews);
  }

  @Mutation
  private ADD_CACHED_VIEW(view: ITagView) {
    if (view.name === null) return;
    if (this.cachedViews.includes(view.name)) return;
    if (view.meta && !view.meta.noCache) {
      this.cachedViews.push(view.name);
    }
  }

  @Mutation
  private DEL_VISITED_VIEW(view: ITagView) {
    for (const [i, v] of this.visitedViews.entries()) {
      if (v.path === view.path) {
        this.visitedViews.splice(i, 1);
        break;
      }
    }
    setTagViewCache(this.visitedViews);
  }

  @Mutation
  private DEL_CACHED_VIEW(view: ITagView) {
    if (view.name === null) return;
    const index = this.cachedViews.indexOf(view.name);
    index > -1 && this.cachedViews.splice(index, 1);
  }

  @Mutation
  private DEL_OTHERS_VISITED_VIEWS(view: ITagView) {
    this.visitedViews = this.visitedViews.filter(v => {
      return (v.meta && v.meta.affix) || v.path === view.path;
    });
    setTagViewCache(this.visitedViews);
  }

  @Mutation
  private DEL_OTHERS_CACHED_VIEWS(view: ITagView) {
    if (view.name === null) return;
    const index = this.cachedViews.indexOf(view.name);
    if (index > -1) {
      this.cachedViews = this.cachedViews.slice(index, index + 1);
    } else {
      // if index = -1, there is no cached tags
      this.cachedViews = [];
    }
  }

  @Mutation
  private DEL_ALL_VISITED_VIEWS() {
    // keep affix tags
    const affixTags = this.visitedViews.filter(
      tag => tag.meta && tag.meta.affix
    );
    this.visitedViews = affixTags;
    setTagViewCache(this.visitedViews);
  }

  @Mutation
  private DEL_ALL_CACHED_VIEWS() {
    this.cachedViews = [];
  }

  @Mutation
  private UPDATE_VISITED_VIEW(view: ITagView) {
    for (let v of this.visitedViews) {
      if (v.path === view.path) {
        v = Object.assign(v, view);
        break;
      }
    }
    setTagViewCache(this.visitedViews);
  }

  @Action
  public addView(view: ITagView) {
    this.ADD_VISITED_VIEW(view);
    this.ADD_CACHED_VIEW(view);
  }

  @Action
  public addVisitedView(view: ITagView) {
    this.ADD_VISITED_VIEW(view);
  }

  @Action
  public delView(view: ITagView) {
    this.DEL_VISITED_VIEW(view);
    this.DEL_CACHED_VIEW(view);
  }

  @Action
  public delCachedView(view: ITagView) {
    this.DEL_CACHED_VIEW(view);
  }

  @Action
  public delOthersViews(view: ITagView) {
    this.DEL_OTHERS_VISITED_VIEWS(view);
    this.DEL_OTHERS_CACHED_VIEWS(view);
  }

  @Action
  public delAllViews() {
    this.DEL_ALL_VISITED_VIEWS();
    this.DEL_ALL_CACHED_VIEWS();
  }

  @Action
  public delAllCachedViews() {
    this.DEL_ALL_CACHED_VIEWS();
  }

  @Action
  public updateVisitedView(view: ITagView) {
    this.UPDATE_VISITED_VIEW(view);
  }
}

export const TagsViewModule = getModule(TagsView);
