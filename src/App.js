import React, { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    const newTask = { id: tasks.length + 1, name: taskName, completed: false };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <h1>Welcome to My Task Manager App!</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;