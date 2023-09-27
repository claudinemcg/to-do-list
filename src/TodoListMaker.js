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

  render(){
    const todos = this.state.todos.map(todo => (
      <li><Todo key={todo.id} id={todo.id} todo={todo.name} /></li>
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
