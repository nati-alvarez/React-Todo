import React from "react";

export default class TodoForm extends React.Component {
    constructor(props){
        super();
    }
    render(){
        return (
            <>
            <form className="search-form">
                <label>
                    Search Todos: <input type="text" onChange={this.props.updateQuery} value={this.props.query}/>
                </label>
            </form>
            <form onSubmit={e=>e.preventDefault()}>
                <label>
                    Enter the task: 
                    <input onChange={this.props.updateFormData} value={this.props.formData.task} type="text" name="task"/>
                </label>
                <button className="create" onClick={this.props.createTodo}>Add Todo</button>
                <button className="clear" onClick={this.props.clearCompleted}>Clear Completed</button>
            </form>
            </>
        )
    }
}