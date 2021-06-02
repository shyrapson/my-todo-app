import React,{useState,createContext} from 'react'

export const TodoContext = createContext();

export const TodoProvider = (props)=> {

const [todos, setTodos] = useState([
    {id:0, text:'meeting with boss',completed:false},
    {id:1, text:'working out later',completed:true}
])

  return(
       <TodoContext.Provider value={[todos,setTodos]}>
             {props.children}
      </TodoContext.Provider>
)
}