import { IAction } from '../interfaces/IAction';


export class TodoAction implements IAction {
  payload?: any;
  type: string;

  constructor(type, payload) {
    this.type = type;
    this.payload = payload;
  }
}
