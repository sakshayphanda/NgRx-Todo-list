import { Action } from '@ngrx/store';
import { Languages } from '../shared/enums/Languages';

export function simpleReducer(state: string, action: Action) {
  switch (action.type) {
    case Languages.SPANISH:
      return state = 'Hola';
    case Languages.FRENCH:
      return state = 'Bonjour';
    default:
      return state;
  }
}
