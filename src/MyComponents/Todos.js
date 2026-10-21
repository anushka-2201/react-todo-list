import React from 'react'
import { TodoItem } from "./Todo";

export const Todos = (props) => {
    // 1. Ek custom style object banao
    let myStyle = {
        minHeight: "70vh", // Iska matlab hai screen ki total height ka 70% area
        margin: "40px auto"
    }

    return (
        // 2. Us style ko yahan div mein laga do
        <div className="container" style={myStyle}>
            <h3 className="my-3">Todos List</h3>
            
            {props.todos.length === 0 ? "No Todos to display" :  
            props.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            })}
        </div>
    )
}