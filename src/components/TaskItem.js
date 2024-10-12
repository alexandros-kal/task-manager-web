import React from 'react';

function TaskItem({ task }) {
  return (
    <li>
      <span>{task.name}</span> - <span>{task.completed ? "Completed" : "Not Completed"}</span>
    </li>
  );
}

export default TaskItem;