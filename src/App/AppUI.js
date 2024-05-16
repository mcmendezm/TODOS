import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoList } from '../TodoList/TodoList';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoLoading } from '../TodoLoading/TodoLoading';
import { TodoError } from '../TodoError/TodoError';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';
import { TodoContext } from '../TodoContext/TodoContext';
import React from 'react';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm/TodoForm';

function AppUI() {
    const {
                    loading,
                    error,
                    searchedTodos,
                    completeTodo,
                    deleteTodo,
                    openModal,
                }= React.useContext(TodoContext)
    return (
        <>
      <TodoCounter/>
      <TodoSearch />
            <TodoList>
                {loading && <TodoLoading/>}
                {error && <TodoError/>}
                {(!loading && searchedTodos.length===0) && <EmptyTodos/>}
            {searchedTodos.map(todo => (
            <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={()=>deleteTodo(todo.text)}
            />
        ))}
            </TodoList>

            <CreateTodoButton />
            {openModal && (
                <Modal>
                    <TodoForm></TodoForm>
                </Modal>
            )}
    </>
  );
}
export {AppUI}