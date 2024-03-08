import React from 'react';

const Task = ({ task , deleteTask, editTask}) => {
    
    const Delete = () => {
        deleteTask(task.id);
      };
    
      const Edit = () => {
        const newDescription = prompt('ingresa la nueva descripcion', task.description);
        if (newDescription) {
          editTask(task.id, newDescription);
        }
      };


  return (
    <div>
      <input type="checkbox" checked={task.completed} readOnly />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.name}{task.description}
      </span>
      <button onClick={Delete}>eliminar</button>
      <button onClick={Edit}>Editar</button>
    </div>
  );
};

export default Task;