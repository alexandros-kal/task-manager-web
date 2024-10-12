import React from 'react';
import TaskItem from './TaskItem'; // Import TaskItem component

function TaskList({ tasks }) {
  return (
    <div>
      <h2>My Tasks</h2>
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;