import { useContext } from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext/TodoContext';

function CreateTodoButton() {
    const { setOpenModal } = useContext(TodoContext);
    return (
        <div className='box-button'>
            <button className="createTodoButton" onClick={(event)=>{setOpenModal((state=>!state))}}>+</button>
        </div>
    )
}
export{CreateTodoButton}