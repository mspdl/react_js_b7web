import React, { useEffect, useState } from 'react'
import SearchBox from '../class_16/components/SearchBox'

document.title = "Module 02 - Class 16"

function Class16() {

    const [tasks, setTasks] = useState([])

    const fillTasks = () => {
        setTasks([
            { title: 'Buy food', done: false },
            { title: 'Feed the dog', done: true },
            { title: 'Study React', done: false }
        ]);
    }

    useEffect(fillTasks, [])

    return <>
        <h1>Task List</h1>
        <SearchBox
            defaultPhrase='Search...' />

        <hr />

        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    {task.done ? <del>{task.title}</del> : task.title}
                </li>
            ))}
        </ul>

    </>

}

export default Class16