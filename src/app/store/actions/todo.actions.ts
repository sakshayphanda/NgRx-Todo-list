import { Action } from '@ngrx/store'; // It's an interface which has a attribute name "type".

export enum TodoActionTypes {
  LOAD = '[TODO] LOAD',
  LOADED = '[TODO] LOADED',
  ADD = '[TODO] ADD',
  UPDATE = '[TODO] UPDATE',
  DELETE = '[TODO] DELETE',
  UNDO = '[TODO] UNDO',
  REDO = '[TODO] REDO'
}

export class TodoLoad implements Action {
  readonly type = TodoActionTypes.LOAD;
  constructor() {}
}


export class TodoLoaded implements Action {
  readonly type = TodoActionTypes.LOADED;
  constructor(public payload: string[]) {}
}

export class TodoAdd implements Action {
  readonly type = TodoActionTypes.ADD;
  constructor(public payload: string) {}
}

export class TodoDelete implements Action {
  readonly type = TodoActionTypes.DELETE;
  constructor(public payload: number) {}
}

export class TodoUndo implements Action {
  readonly type = TodoActionTypes.UNDO;
  constructor() {}
}

export class TodoRedo implements Action {
  readonly type = TodoActionTypes.REDO;
  constructor() {}
}


export type TodoActions = TodoLoad | TodoLoaded | TodoAdd | TodoDelete | TodoRedo | TodoUndo;


