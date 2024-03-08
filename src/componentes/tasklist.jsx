import React from 'react';
import Task from './task';

const tasks = [
  { id: 1, description: 'LAVAR LOS PLATOS', completed: true },
  { id: 2, description: 'SACAR AL PERRO', completed: false },
  { id: 3, description: 'PONERLE COMIDA AL LORO', completed: false },
];

const TaskList = (deleteTask, editTask) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} deleteTask={deleteTask} editTask={editTask} />
      ))}
    </div>
  );
};

export default TaskList;