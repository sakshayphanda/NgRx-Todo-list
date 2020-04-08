import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoAdd, TodoDelete, TodoUndo, TodoRedo } from 'src/app/store/actions/todo.actions';

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
    this.store.dispatch(new TodoAdd(this.itemName));
    this.itemName = '';
  }

  deleteItem(index) {
    this.store.dispatch(new TodoDelete(index));
  }

  undo() {
    this.store.dispatch(new TodoUndo());
  }

  redo() {
    this.store.dispatch(new TodoRedo());
  }
}
