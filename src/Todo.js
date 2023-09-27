import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';

class Todo extends Component {
  state = {
    isEditing: false,
    task: this.props.task
  }
  handleDelete = () => {
    this.props.deleteTodo(this.props.id)
  }

  toggleForm = () => {
    this.setState({isEditing: !this.state.isEditing});
  }

  handleUpdate = (evt) => {
    evt.preventDefault();
    this.props.updateTask(this.props.id, this.state.task)
    this.toggleForm();
  }

  handleChange  = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value})
  }

  render(){
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input  type='text' 
                    name='task'
                    id='task'
                    value={this.state.task}
                    onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      )
    } else {
      result = (
        <div className="Todo">
          {this.props.task}
          <button onClick={this.handleDelete}> X </button>
          <button onClick={this.toggleForm}> edit </button>
          </div>
        )
    }
    return result;
  }
}

export default Todo;
