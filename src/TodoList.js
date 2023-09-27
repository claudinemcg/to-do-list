import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {

  render(){
    return(
      <div>
        <ul>
          <li><Todo name={"Get cleaning"} /></li>
      </ul>
      </div>
    )
  }
}

export default TodoList;
