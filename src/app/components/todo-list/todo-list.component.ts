import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITodo } from 'src/app/models/interfaces/ITodo';
import { Selectors } from 'src/app/shared/enums/Selectors';
import { TodoLoad } from 'src/app/store/actions/todo.actions';

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
    this.loadTodos();
    this.store.select(Selectors.TODOLIST).subscribe(
      todo => {
        console.log(todo);
        this.todoList = todo;
      }
    );
  }

  loadTodos() {
    this.store.dispatch(new TodoLoad());
  }

}
