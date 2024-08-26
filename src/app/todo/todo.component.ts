import { Component } from '@angular/core';

interface Todo {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  newTodo: string = '';
  todos: Todo[] = [];

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({
        text: this.newTodo,
        completed: false
      });
      this.newTodo = '';
    }
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t !== todo);
  }
}
