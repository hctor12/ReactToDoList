import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
uuidv4()

export const TodoForm = ({addTodo}) => {
    const [task, setTask] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(task)
        setTask('')
    }

  return (
    <form className="flex flex-col gap-2 md:flex-row md:gap-0" onSubmit={handleSubmit}>
        <input type='text' placeholder='Añade una tarea' value={task} className='ps-2 md:pe-24 py-3 bg-transparent text-white border border-sky-500' onChange={(e) => setTask(e.target.value)}/>
        <button type='submit' className='text-center bg-sky-500 hover:bg-sky-500/50 text-white p-3'>Añadir</button>
    </form>
  )
}
