import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import {v4 as uuidv4} from 'uuid';

class TodoListMaker extends Component {
  state = {
    todos: []
  }

  addTodo = (todo) => {
    let newTodo = {...todo, id: uuidv4()};
    this.setState({todos: [...this.state.todos, newTodo]});
  }

  deleteTodo = (id) => {
    const newTodos = this.state.todos.filter(todo => todo.id != id)
    this.setState({todos: [...newTodos]})
  }

  updateTask = (id, updatedTask) => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return{... todo, task: updatedTask};
      }
      return todo;
    })
    this.setState({ todos: updatedTodos})
  }

  render(){
    const todos = this.state.todos.map(todo => (
      <li><Todo key={todo.id} id={todo.id} task={todo.task} deleteTodo={this.deleteTodo} updateTask={this.updateTask}/></li>
  ));
    return(
      <div className="TodoList">
        <ul>
          {todos}
        </ul>
        <NewTodoForm addTodo={this.addTodo}/>
      </div>
    )
  }
}

export default TodoListMaker;
