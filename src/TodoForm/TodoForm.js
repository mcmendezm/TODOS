import React from 'react'
import './todoForm.css'
import { TodoContext } from '../TodoContext/TodoContext'

function TodoForm() {
    const { setOpenModal, addTodo,} = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const onSubmit=(event) => {
        event.preventDefault()
        addTodo(newTodoValue);
        setOpenModal(false)
    }
    const onCancel=() => {
    setOpenModal(false)
    }
    const onChange=(event) => {
    setNewTodoValue(event.target.value)
    }
    return (
        <form className='todoForm' onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea placeholder='Agrega una tarea'value={newTodoValue} onChange={onChange}></textarea>
            <div className='TodoForm-buttonContainer'>
                <button className='todoForm-button todoForm-button--cancel' type='button' onClick={onCancel}>Cancelar</button>
                <button className='todoForm-button todoForm-button--add'type='submit'>Agregar</button>
            </div>
        </form>
    )
}
export{TodoForm}