import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
uuidv4()

export const EditTodoForm = ({editTodo, editTask}) => {
    const [task, setTask] = useState(editTask.task)

    const handleSubmit = (e) => {
        e.preventDefault()
        editTodo(task, editTask.id)
        setTask('')
    }

  return (
    <form className="flex mt-5 flex-col gap-2 md:flex-row md:gap-0" onSubmit={handleSubmit}>
        <input type='text' placeholder='Actualiza la tarea' value={task} className='ps-2 pe-24 py-3 bg-transparent text-white border border-sky-500' onChange={(e) => setTask(e.target.value)}/>
        <button type='submit' className='text-center bg-sky-500 hover:bg-sky-500/50 text-white p-3'>Actualizar</button>
    </form>
  )
}
