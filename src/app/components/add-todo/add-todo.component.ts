import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  title:string
  id:number

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    const todo = {
      title: this.title,
      id: this.id,
      completed: false
    }

    this.addTodo.emit(todo);
  }



}
