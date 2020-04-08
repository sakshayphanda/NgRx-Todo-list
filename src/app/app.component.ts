import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Languages } from './shared/enums/Languages';
import { Selectors } from './shared/enums/Selectors';
import { Action } from '@ngrx/store';

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
  actionData: Action;

  constructor(private store: Store<AppState>) {
  }
}

