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
                    const query = new RegExp(this.props.query, "gi");
                    if(todo.task.search(query) >= 0)
                        return <Todo toggleCompleted={this.props.toggleCompleted} key={todo.id} todo={todo}/>
                })}
            </main>
        )
    }
}