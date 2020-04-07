import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoAction } from 'src/app/actions/todo.actions';
import { TodoActionTypes } from 'src/app/shared/enums/TodoActionTypes';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass']
})
export class TodoItemComponent implements OnInit {
  @Input('todoList') todoList;
  itemName = '';
  constructor(
    private store: Store
  ) { }

  ngOnInit() {
  }

  addItem() {
    this.store.dispatch(new TodoAction(TodoActionTypes.ADD, this.itemName));
    this.itemName = '';
  }

  deleteItem(index) {
    this.store.dispatch(new TodoAction(TodoActionTypes.DELETE, index));
  }

}
