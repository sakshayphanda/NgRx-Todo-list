import {Injectable } from '@angular/core';
import { Effect , Actions, ofType} from '@ngrx/effects';
import * as fromTodoActions from '../actions/todo.actions';
import { switchMap, map } from 'rxjs/operators';
import { TodoService } from 'src/app/services/todo.service';


@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions<any>,
    private todoService: TodoService
    ) {
  }

  @Effect()
  loadTodos$ = this.actions$.pipe(ofType(fromTodoActions.TodoActionTypes.LOAD),
  switchMap(
    () => {
      return this.todoService.getTodos().pipe(
        map(
          todos => {
            const tod: [] = JSON.parse(JSON.stringify(todos));
            const newTodo: string[] = tod.map(item => item['title']);
            //console.log(newTodo);
            return new fromTodoActions.TodoLoaded(newTodo);
          }
        )
      );
    }
  ));
}
