import React from 'react';
import Task from './task';

const tasks = [
  { id: 1, name: 'LAVAR LOS PLATOS', completed: true },
  { id: 2, name: 'SACAR AL PERRO', completed: false },
  { id: 3, name: 'PONERLE COMIDA AL LORO', completed: false },
];

const TaskList = () => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;