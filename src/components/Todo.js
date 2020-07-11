import React from "react";

export default class Todo extends React.Component {
    constructor(props){
        super();
    }

    render(){
        return (
            <div className={"todo " + (this.props.todo.completed? "completed": "")}>
                <p>{this.props.todo.task}</p>
            </div>
        )
    }
}