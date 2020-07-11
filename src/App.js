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
  toggleCompleted = id =>{
    console.log(id)
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo=>{
        if(todo.id === id) {
          console.log(todo)
          return {...todo, completed: !todo.completed}
        }else return todo;
      })
    });
  }
  clearCompleted = ()=>{
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo=> todo.completed === false)
    });
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
        <TodoForm clearCompleted={this.clearCompleted} createTodo={this.createTodo} formData={this.state.formData} updateFormData={this.updateFormData}/>
        <TodoList toggleCompleted={this.toggleCompleted} todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
