"use client";

import { useState } from "react";

export default function ToDoApp() {
    const [tasks, setTasks] = useState([
        { id: 1, taskText: "Lær React", completed: false },
        { id: 2, taskText: "Lær kode", completed: false },
    ]);

    function addTask(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newTask = {
            id: crypto.randomUUID(),
            taskText: formData.get("task"),
            completed: false,
        };
        setTasks([newTask, ...tasks]);
        event.target.reset(); // Ryd inputfeltet
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function toggleTask(id) {
        setTasks(
            tasks.map(task => {
                if (task.id === id) {
                    return { ...task, completed: !task.completed };
                }
                return task;
            })
        );
    }

    return (
        <section>
            <Form addTask={addTask} />
            <List tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
        </section>
    );
}

function Form({ addTask }) {
    return (
        <form onSubmit={addTask}>
            <label htmlFor="task">Add Task</label>
            <input type="text" id="task" name="task" required />
            <button type="submit">Add Task</button>
        </form>
    );
}

function List({ tasks, deleteTask, toggleTask }) {
    return (
        <div>
            <ul>
                {tasks.map(task => (
                    <ListItem key={task.id} task={task} deleteTask={deleteTask} toggleTask={toggleTask} />
                ))}
            </ul>
        </div>
    );
}

function ListItem({ task, deleteTask, toggleTask }) {
    const { id, taskText, completed } = task;
    return (
        <li>
            <span style={{ textDecoration: completed ? "line-through" : "none" }}>{taskText}</span>
            <button onClick={() => deleteTask(id)}>Delete</button>
            <button onClick={() => toggleTask(id)}>{completed ? "Undo" : "Complete"}</button>
        </li>
    );
}
