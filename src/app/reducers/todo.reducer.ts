import { TodoActionTypes } from '../shared/enums/TodoActionTypes';
import { IAction } from '../interfaces/IAction';


export const initialState = [];

export function TodoReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case TodoActionTypes.ADD:
      return addPosts(state, action.payload);
    case TodoActionTypes.DELETE:
      return deletePosts(state, action.payload);
    default:
      return state;
  }
}

const addPosts = (state, payload) => {
  state = [...state, payload];
  return state;
};

const deletePosts = (state, payload: number) => {
  const newState = [...state];
  newState.splice(payload, 1);
  return newState;
};

