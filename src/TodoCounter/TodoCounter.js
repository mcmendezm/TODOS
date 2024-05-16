import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext/TodoContext';
    
function TodoCounter() {
  const {
    completedTodos, 
    totalTodos,
  }=React.useContext(TodoContext)
  return (
    <h1 className='todoCounter'>
      {totalTodos === completedTodos && totalTodos>0 ? "¡Felicitaciones, completaste todas tus tareas! 🥳" : `Has completado ${completedTodos} de ${totalTodos} tareas`}
    </h1>
  )
}
export { TodoCounter };