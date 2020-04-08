import { ITodoHistory } from '../../models/interfaces/ITodoHistory';
import * as fromTodos from '../actions/todo.actions';


export const initialState = [];

export const history: ITodoHistory = {
  past: [],
  present: initialState,
  future: []
};

export function TodoReducer(state = initialState, action: fromTodos.TodoActions) {
  switch (action.type) {

    case fromTodos.TodoActionTypes.LOAD:
      console.log(state, action);
      return state;

    case fromTodos.TodoActionTypes.LOADED:
      console.log(state, action);
      return loadPosts(state, action.payload);

    case fromTodos.TodoActionTypes.ADD:
      return addPosts(state, action.payload);

    case fromTodos.TodoActionTypes.DELETE:
      return deletePosts(state, action.payload);

    case fromTodos.TodoActionTypes.UNDO:
      if (history.past.length) {
        const previousState = [... history.past.pop()];
        return previousState;
      } else {
        return [...state];
      }

    case fromTodos.TodoActionTypes.REDO:
      if (history.future.length) {
        return [... history.future.pop()];
      } else {
        return [...state];
      }
  }
  return state;
}

const loadPosts = (state, payload: string[]) => {
  // console.log(payload);

  const newState = [state, ...payload]
  return newState;
};

const addPosts = (state, payload: string) => {
  history.past.push(history.present);
  const newState = [...state, payload];
  history.present = newState;
  return newState;
};

const deletePosts = (state, payload: number) => {
  history.past.push(history.present);
  const newState = [...state];
  newState.splice(payload, 1);
  history.past.push(history.present);
  return newState;
};

