import React from 'react';

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todos: [],
      formData: {
        task: ""
      }
    }
  }
  createTodo = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      formData: {
        ...this.state.formData,
        task: ""
      },
      todos: [
        ...this.state.todos,
        {
          id: Date.now(),
          task: this.state.formData.task,
          completed: false
        }
      ]
    })
  }
  updateFormData = e =>{
    this.setState({
      ...this.state, 
      formData: {
        ...this.state.formData,
        task: e.target.value
      }
    });
  }
  render() {
    return (
      <div>
        <h2>Todo App!</h2>
        <TodoForm createTodo={this.createTodo} formData={this.state.formData} updateFormData={this.updateFormData}/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
