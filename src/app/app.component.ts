import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoActionTypes } from './shared/enums/TodoActionTypes';
import { IAction } from './interfaces/IAction';
import { TodoAction } from './actions/todo.actions';
import { Languages } from './shared/enums/Languages';
import { Selectors } from './shared/enums/Selectors';

interface AppState {
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  message;
  actionData: IAction;

  constructor(private store: Store<AppState>) {
    this.store.select(Selectors.MESSAGE).subscribe(
      message => {
        this.message = message;
      }
    );

    this.translate(Languages.SPANISH);
  }

  translate(language) {
    const actionData: IAction = {
      type : language
    };
    this.store.dispatch(actionData);
  }
}
