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
      <input type="checkbox"  completed={task.completed = null} />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.description}
      </span>
      <button onClick={Delete}>eliminar</button>
      <button onClick={Edit}>Editar</button>
    </div>
  );
};

export default Task;