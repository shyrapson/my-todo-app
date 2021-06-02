import React,{useContext} from 'react'
import TodoItems from '../TodoItems'
import { TodoContext} from './TodoProvider'


function Todos() {
    const [todos,setTodos] = useContext(TodoContext)

  const toggleBtn = id => {
      const newTodos = [... todos]
      newTodos[id].completed=newTodos[id].completed?false:true
      setTodos(newTodos)
  }
  const deleteBtn = (id) => {
      const newTodos = [...todos]
      newTodos.splice(id,1)
      setTodos(newTodos)
      
  }

    return (
        <div>
           
            {todos.map((todo,id)=>(
                <TodoItems
                key={id}
                id={id}
                todo={todo}
                text={todo.text}
                completed={todo.completed}
                toggleBtn={toggleBtn}
                deleteBtn={deleteBtn}
           
                />
            ))}
        </div>
    )
}

export default Todos
