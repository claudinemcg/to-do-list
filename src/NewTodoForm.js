import React, { Component } from 'react';
import './NewFormTodo.css'
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

        <div className='Todo-new'>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='task'> </label>
        <input  type='text'
                placeholder='new todo'
                name='task'
                id='task'
                value={this.state.task}
                onChange={this.handleChange}
        />

        <button></button>
      </form>
      </div>
    )
  }
}

export default NewTodoForm;
