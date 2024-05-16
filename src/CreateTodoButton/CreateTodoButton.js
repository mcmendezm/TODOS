import { useContext } from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext/TodoContext';

function CreateTodoButton() {
    const { setOpenModal } = useContext(TodoContext);
    return (
        <button className="createTodoButton" onClick={(event)=>{setOpenModal((state=>!state))}}>+</button>
    )
}
export{CreateTodoButton}