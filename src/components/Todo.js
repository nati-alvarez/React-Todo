import React from "react";

import "./Todo.css";

export default class Todo extends React.Component {
    constructor(props){
        super();
    }

    render(){
        return (
            <div onClick={()=> this.props.toggleCompleted(this.props.todo.id)}className={"todo " + (this.props.todo.completed? "completed": "")}>
                <p>{this.props.todo.task}</p>
            </div>
        )
    }
}