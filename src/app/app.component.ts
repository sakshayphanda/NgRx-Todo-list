import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable} from 'rxjs';

interface AppState {
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ngrx-todo';
  message;
  actionData: IAction;

  constructor(private store: Store<AppState>) {
    this.store.select('message').subscribe(
      message => {
        this.message = message;
        console.log(message);
      }
    );

    this.french();
  }

  spanish() {
    this.store.dispatch({type: 'SPANISH'});
  }

  french() {
    this.store.dispatch({type: 'FRENCH'});
  }
}
