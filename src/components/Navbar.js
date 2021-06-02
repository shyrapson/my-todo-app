import React, {useContext} from 'react'
import {TodoContext} from './TodoProvider'

function Navbar() {
    const [todos,setTodos] = useContext(TodoContext)
    return (
        <div className="navbar">
            <div className="nav">
            <h1>TodoList</h1>
            <p>Total number of items: {todos.length}</p>
            </div>
           
        </div>
    )
}

export default Navbar
