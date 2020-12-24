import React, { useEffect, useState } from 'react'
import AddBox from '../class_18/components/AddBox'
import Checkbox from '@material-ui/core/Checkbox';

document.title = "Module 02 - Class 18"

function Class18() {

    const [tasks, setTasks] = useState([])

    const fillTasks = () => {
        setTasks([
            { title: 'Buy food', done: false },
            { title: 'Feed the dog', done: true },
            { title: 'Study React', done: false }
        ]);
    }

    function addTask(newTaskTitle) {
        let newTaskList = [...tasks]
        let newTask = { title: newTaskTitle, done: false }
        newTaskList.push(newTask)
        setTasks(newTaskList)
    }

    function handleClickTask(index) {
        let newTaskList = [...tasks]
        newTaskList[index].done = !newTaskList[index].done
        setTasks(newTaskList)
    }

    useEffect(fillTasks, [])

    return <>
        <h1>Task List</h1>
        <AddBox
            placeholder='Add Task'
            onEnter={addTask} />

        <hr />

        {tasks.map((task, index) => (<div key={index}>
            <Checkbox
                checked={task.done}
                onChange={() => handleClickTask(index)}
                inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />

            <span >
                {task.done ? <del>{task.title}</del> : task.title}
            </span>
            <br />
        </div>))}

    </>

}

export default Class18