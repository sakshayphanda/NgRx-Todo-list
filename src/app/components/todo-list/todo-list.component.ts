import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITodo } from 'src/app/interfaces/ITodo';
import { Selectors } from 'src/app/shared/enums/Selectors';
import { TodoActionTypes } from 'src/app/shared/enums/TodoActionTypes';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  todoList: string[] = [];
  constructor(
    private store: Store<ITodo>
  ) { }

  ngOnInit() {
    this.store.select(Selectors.TODOLIST).subscribe(
      todo => {
        this.todoList = todo;
      }
    );
  }

}
