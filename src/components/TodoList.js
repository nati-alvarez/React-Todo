// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
    constructor(props){
        super();
    }
    render(){
        return (
            <main className="todos">
                {this.props.todos.map(todo=>{
                    return <Todo todo={todo}/>
                })}
            </main>
        )
    }
}