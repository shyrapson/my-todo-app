import React from 'react'
import'./App.css'
import {AiFillDelete} from 'react-icons/ai';

function TodoItems({text,todo,id,toggleBtn,deleteBtn}) {

    return (
        <div >
            <div className="todoitems">
              
                <input type="checkBox" onClick={()=>toggleBtn(id)}/>
                <p style={{textDecoration:todo.completed?'line-through':''}}>{text}</p>
                <button style={btn} onClick={()=>deleteBtn(id)}><AiFillDelete/></button>
                
            </div>
           </div>
      
    )
}

const btn = {
 background:'red',
 borderRadius:'5px',
 height:'30px',
 width:'50px',
 border:'none',
 color:'#fff'
}
export default TodoItems
