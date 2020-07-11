import React from "react";

export default class TodoForm extends React.Component {
    constructor(props){
        super();
    }
    render(){
        return (
            <form>
                <label>
                    Enter the task: 
                    <input onChange={this.props.updateFormData} value={this.props.formData.task} type="text" name="task"/>
                </label>
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        )
    }
}