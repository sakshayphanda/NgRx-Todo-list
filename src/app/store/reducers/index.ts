import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
// import { simpleReducer } from './simple.reducer';
import { TodoReducer } from './todo.reducer';
import { routerReducer } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';


export interface State {
}

export const reducers: ActionReducerMap<State> = {
  // message: simpleReducer,
  todoList: TodoReducer,
  router: routerReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze] : [];

export const todoStateSelector = createFeatureSelector('todoList');
