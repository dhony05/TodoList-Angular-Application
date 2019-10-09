import { Component, OnInit,Input , EventEmitter, Output} from '@angular/core';
import { TodoService} from '../../services/todo.service';

import {Todo} from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input() todo: Todo;
@Output() deleteTodo: EventEmitter<Todo> = new EventEmitter() // emiting to the parent component
  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }



  // Set Dynamic classes
  setClasses(){
    let classes = {
      todo: true,
      'is-complete': this.todo.completed

    }
    return classes;
  }
    // onToggle
    onToggle(todo){
      // Toggle in UI
      todo.completed = !this.todo.completed;
      //Toggle in server
      this.todoService.toggleCompleted(todo).subscribe(todo =>
        console.log(todo));
    }
    onDelete(todo){
      console.log('delete');
      this.deleteTodo.emit(todo);
    }
  }



