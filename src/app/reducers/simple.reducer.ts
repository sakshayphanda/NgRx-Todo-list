import { Action } from '@ngrx/store';

export function simpleReducer(state = 'Hello', action: Action) {
  switch (action.type) {
    case 'SPANISH':
      return state = 'Hola';
    case 'FRENCH':
      return state = 'Bonjour';
    default:
      return state = 'Default';
  }
}
