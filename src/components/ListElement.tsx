"use client"

import { ListReducer } from '@/reducers/ListReduce'
import React, { useReducer, useState } from 'react'

const ListElement = () => {
    const [list, dispatch] = useReducer(ListReducer, [])
    const [listField, setListField] = useState(' ')

    const handleAddButtonTesk = () => {
        if (listField.trim() === ' ') return;

        dispatch({
            type: 'add',
            payload: {
                task: listField.trim(),
            }
        })
        setListField(' ')
    }

    const handleCheckBox = (id: number) => {
        dispatch({
            type: 'completed',
            payload: { id }
        })
    }

    const handleEditTask = (id: number) => {
        const item = list.find(item => item.id === id)

        if (!item) return;

        const newTask = prompt('O que vai mudar nessa tarefa? ', item.task)

        if (!newTask || newTask?.trim() === ' ') return false;

        dispatch({
            type: 'edit',
            payload: {
                id,
                newTask: newTask.trim(),
            }
        })
    }

    const handleRemove = (id: number) => {
        const confirmed = confirm('Tem certeza que deseja excluir essa tarefa?')
        if (!confirmed) return;
        dispatch({
            type: 'remove',
            payload: { id }
        })
    }

    return (
        <div className=' h-screen w-screen p-2 xl:w-8/12'>
            <div className=' flex flex-col justify-center p-2 text-2xl'>
                <h2 className='text-center mb-8'>TASK LIST</h2>
                <div className='border flex flex-col gap-3 p-2 sm:flex-row'>
                    <input
                        type="text"
                        className='border-none  rounded p-3 bg-transparent text-white flex-1 w-full sm:w-auto sm:flex-1 outline-none'
                        value={listField}
                        onChange={(e) => setListField(e.target.value)}
                        placeholder='Task'
                    />
                    <button
                        className='rounded bg-blue-500 text-white px-5 text-3xl'
                        onClick={handleAddButtonTesk}
                    >
                        +
                    </button>
                </div>
            </div>
            <div className='mt-4 p-2'>
                <ul>
                    {list.map((item) => (
                        <li key={item.id} className={`bg-slate-800 mb-4 rounded flex gap-3 p-2 items-center ${item.completed ? 'text-gray-500' : ''}`}>
                            <input
                                type="checkbox"
                                className='w-5 h-5'
                                checked={item.completed}
                                onChange={() => handleCheckBox(item.id)}
                            />
                            <span onClick={() => handleEditTask(item.id)} className='flex-1 text-xl'>{item.task}</span>
                            <button onClick={() => handleRemove(item.id)} className='bg-blue-500 text-white py-1 px-2 rounded'>Excluir</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}

export default ListElement