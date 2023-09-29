import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import {v4 as uuidv4} from 'uuid';
import './TodoListMaker.css'
class TodoListMaker extends Component {
  state = {
    todos: []
  }

  addTodo = (todo) => {
    let newTodo = {...todo, id: uuidv4(), completed: false};
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

  toggleTodo = (id) => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return{... todo, completed: !todo.completed};
      }
      return todo;
    })
    this.setState({ todos: updatedTodos})
  }
  

  render(){
    const todos = this.state.todos.map(todo => (
      <Todo   key={todo.id} 
              id={todo.id} 
              task={todo.task} 
              completed={todo.completed}
              deleteTodo={this.deleteTodo} 
              updateTask={this.updateTask} 
              toggleTodo={this.toggleTodo}
      />
  ));
    return(
        <div className="TodoList">
        <h1>TODO LIST</h1>
        <NewTodoForm addTodo={this.addTodo}/>
          <ul>
            {todos}
          </ul>
      </div>
    )
  }
}

export default TodoListMaker;
