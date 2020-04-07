import { Action } from '@ngrx/store'; // It's an interface which has a attribute name type.
import { TodoActionTypes } from '../shared/enums/TodoActionTypes';

export interface ActionParent extends Action {
  payload?: any;
}


export class TodoAdd implements ActionParent {
  payload?: any;
  type: string = TodoActionTypes.Add;
}
