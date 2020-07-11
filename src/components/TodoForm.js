import React from "react";

export default class TodoForm extends React.Component {
    render(){
        return (
            <form>
                <label>
                    Enter the task: 
                    <input type="text" name="task"/>
                </label>
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        )
    }
}