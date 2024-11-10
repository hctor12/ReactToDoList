import React, { useState, useEffect } from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from './Todo'
import { EditTodoForm } from './EditTodoForm'

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, []);

    useEffect(() => {
        if (todos.length) {  
            localStorage.setItem('todos', JSON.stringify(todos));
        } else {
            localStorage.removeItem('todos');
        }
    }, [todos]);

    const addTodo = (todo) => {
        const trimmedTodo = todo.trim();
        if (trimmedTodo) {
            setTodos([...todos, { id: uuidv4(), task: trimmedTodo, done: false, edit: false }]);
        }
    }

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo));
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const editTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, edit: !todo.edit } : todo));
    }

    const editTask = (task, id) => {
        const trimmedTask = task.trim();
        if (trimmedTask) {
            setTodos(todos.map(todo => todo.id === id ? { ...todo, task: trimmedTask, edit: !todo.edit } : todo));
        }
    }

    return (
        <div className='bg-sky-950 shadow-lg px-10 max-w-[80%] lg:max-w-[60%] pb-16 rounded-lg text-white'>
            <h1 className='text-center py-10 text-3xl'>To Do List</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.edit ? 
                    <EditTodoForm editTodo={editTask} editTask={todo} key={index} /> :
                    <Todo task={todo} key={index} toggleComplete={toggleComplete} editTodo={editTodo} deleteTodo={deleteTodo} />
            ))}
        </div>
    );
}
