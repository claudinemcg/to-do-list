import React, { Component } from 'react';

class Todo extends Component {


  render(){
    return(
      <div className="Todo">
        {this.props.todo}
      </div>
    )
  }
}

export default Todo;
