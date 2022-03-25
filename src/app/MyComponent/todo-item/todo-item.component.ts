import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {Todo} from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Input() i: number;
  // we create a new event emitter
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoChekbox: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo:Todo){
     this.todoDelete.emit(todo);
     console.log("onclick has been triggered")
  }
  onCheckboxClick(todo:Todo){
    this.todoChekbox.emit(todo);
  }
}
