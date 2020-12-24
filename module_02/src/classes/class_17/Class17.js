import React, { useEffect, useState } from 'react'
import AddBox from '../class_17/components/AddBox'

document.title = "Module 02 - Class 17"

function Class17() {

    const [tasks, setTasks] = useState([])

    const fillTasks = () => {
        setTasks([
            { title: 'Buy food', done: false },
            { title: 'Feed the dog', done: true },
            { title: 'Study React', done: false }
        ]);
    }

    function addTask(newTaskTitle) {
        let newTaskList = [...tasks, { title: newTaskTitle, done: false }]
        setTasks(newTaskList)
    }

    useEffect(fillTasks, [])

    return <>
        <h1>Task List</h1>
        <AddBox
            placeholder='Add Task'
            onEnter={addTask} />

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

export default Class17