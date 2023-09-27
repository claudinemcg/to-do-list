import React, { Component } from 'react';

class NewTodoForm extends Component {
  state = { 
    name: ''
  }


  handleChange = (evt) => {
    this.setState({[evt.target.name]: evt.target.value } )
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.addTodo(this.state)
    this.setState({name: ''})

  }

  render() {
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='name'>Todo: </label>
        <input  type='text'
                name='name'
                id='name'
                value={this.state.name}
                onChange={this.handleChange}
        />

        <button>Add Todo</button>
      </form>
      </div>
    )
  }
}

export default NewTodoForm;
