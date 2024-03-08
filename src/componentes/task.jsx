import React from 'react';

const Task = ({ task }) => {
  return (
    <div>
      <input type="checkbox" checked={task.completed} readOnly />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.name}
      </span>
    </div>
  );
};

export default Task;