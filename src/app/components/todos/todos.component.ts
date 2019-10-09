import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service'

import {Todo} from '../../models/Todo'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
   this.todoService.getTodos().subscribe(todos =>{
     this.todos = todos;
   });

   // we subscribe to the observable
  }
  /**when you click the delete button its
   * set an event on todo item component
   * then we are emiting up the deleteTodo
   * @param todo 
   */
  deleteTodo(todo:Todo){
   // console.log('delete me');
   //Remove from UI
   this.todos = this.todos.filter(t => t.id !== todo.id);
   //Remove from server
   this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo){
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
      console.log(todo);
    })
  }

}
