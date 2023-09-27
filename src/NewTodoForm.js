import React, { Component } from 'react';

class NewTodoForm extends Component {
  state = { 
    task: ''
  }


  handleChange = (evt) => {
    this.setState({[evt.target.name]: evt.target.value } )
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.addTodo(this.state)
    this.setState({task: ''})
  }

  render() {
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='task'>Todo: </label>
        <input  type='text'
                placeholder='new todo'
                name='task'
                id='task'
                value={this.state.task}
                onChange={this.handleChange}
        />

        <button>Add Todo</button>
      </form>
      </div>
    )
  }
}

export default NewTodoForm;
