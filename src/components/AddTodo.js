import React,{useContext, useState} from 'react'
import {TodoContext} from './TodoProvider'

function AddTodo({addtodo}) {
    const [todos, setTodos] = useContext(TodoContext)

    const [text,setText] = useState('')


    const updateText = (e) => {
        setText(e.target.value)
    }
    const Addtodo = (e) => {
        e.preventDefault();
        setTodos(prevTodos => [...prevTodos,{text:text}])
        setText('')


    }



    return (
        <form onSubmit={Addtodo} style={{display:'flex'}}>
            <input type="text" 
            value={text} 
            style={{flex:'1',
            background:'#cece',
            borderRadius:'5px',
            height:'40px'}}
            placeholder="....addTodo"
            onChange={updateText}/>
           
            <button style={btn}>Submit</button>
        </form>
    )
}
const btn = {
    border:'none',
    background:'red',
    color:'#fff',
    width:'50px',
    fontSize:'12px',
    borderRadius:'5px'
}
export default AddTodo
