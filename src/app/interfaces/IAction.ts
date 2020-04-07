import { Action } from '@ngrx/store'; // It's an interface which has a attribute name "type".

export interface IAction extends Action {
  payload?: any;
}
