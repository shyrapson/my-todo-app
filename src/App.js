import React from 'react'
import './App.css';
import AddTodo from './components/AddTodo';
import Navbar from './components/Navbar';
import { TodoProvider } from './components/TodoProvider';
import Todos from './components/Todos';

function App() {
  return (
    <TodoProvider >
      <div className="app">
      <Navbar/>
        <AddTodo/>
        <Todos/>

      </div>
      
    </TodoProvider>
  );
}

export default App;
