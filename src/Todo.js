import React, { Component } from 'react';

class Todo extends Component {

  handleDelete = () => {
    this.props.deleteTodo(this.props.id)
  }

  handleEdit = () => {
    this.props.handleEdit(this.props.id)
  }

  render(){
    return(
      <div className="Todo">
        {this.props.todo}
        <button onClick={this.handleDelete}> X </button>
        <button onClick={this.handleEdit}> edit </button>
      </div>
    )
  }
}

export default Todo;
