import React, { Component } from 'react';
import './Todo.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan, faFloppyDisk} from '@fortawesome/free-solid-svg-icons';

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

  handleCompleted = () => {
    this.props.toggleTodo(this.props.id);
  }

  render(){
    let result;
    if (this.state.isEditing) {
      result = (
        <div className='Todo-edit'>
          <form onSubmit={this.handleUpdate}>
            <input  type='text' 
                    name='task'
                    id='task'
                    value={this.state.task}
                    onChange={this.handleChange}
            />
            <button className='Todo-submit'><FontAwesomeIcon icon={faFloppyDisk} /></button>
          </form>
        </div>
      )
    } else {
      result = (
        <div className="Todo">
          
          <li   className={this.props.completed ? 'todoCompleted' : ''} 
                onClick={this.handleCompleted}>
                  {this.props.task}
          </li>
         
            <div onClick={this.handleDelete} className='Todo-delete'><FontAwesomeIcon icon={faTrashCan} /></div>
            <div onClick={this.toggleForm} className='Todo-edit'> <FontAwesomeIcon icon={faPenToSquare} /> </div>
 
          </div>
        )
    }
    return result;
  }
}

export default Todo;
