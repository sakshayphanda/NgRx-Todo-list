import { Action } from '@ngrx/store';

export function TodoReducer(state = [1, 2, 3], action: Action) {
  switch(action.type) {
    case 'ADD':
      return newPosts(state, action)
    case 'REMOVE':
      return state = [1, 2];
  }
}

const newPosts = (state, payload) => {

}
