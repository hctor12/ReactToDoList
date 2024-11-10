import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='flex justify-between text-white bg-sky-500 rounded-lg mt-5 p-3 items-center'>
      <p onClick={() => toggleComplete(task.id)} className={`${task.done ? 'line-through' : ""} cursor-pointer`}>{task.task}</p>
      <div className='flex gap-2 items-center'>
          <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} className='cursor-pointer transition-transform hover:scale-105 duration-300 ease-in-out'/>
          <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} className='cursor-pointer transition-transform hover:scale-105 duration-300 ease-in-out' />
      </div>
    </div>
  )
}
