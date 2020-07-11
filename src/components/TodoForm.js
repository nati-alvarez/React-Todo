import React from "react";

export default class TodoForm extends React.Component {
    constructor(props){
        super();
    }
    render(){
        return (
            <form onSubmit={e=>e.preventDefault()}>
                <label>
                    Enter the task: 
                    <input onChange={this.props.updateFormData} value={this.props.formData.task} type="text" name="task"/>
                </label>
                <button onClick={this.props.createTodo}>Add Todo</button>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </form>
        )
    }
}