import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule} from '@ngrx/store';
import { simpleReducer } from './reducers/simple.reducer';
import { TodoReducer } from './reducers/todo.reducer';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      message: simpleReducer,
      todoList: TodoReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
