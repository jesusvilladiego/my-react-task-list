import React, {useEffect, useState} from 'react'
import Header from './componentes/header'
import TaskList from './componentes/tasklist'
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const almacenarTasks = JSON.parse(localStorage.getItem('tasks'));
    if (almacenarTasks) {
      setTasks(almacenarTasks);
    }
  }, []);

  const agregarTask = (description) => {
    const nuevaTask = {
      id: tasks.length + 1,
      description,
      completed: false,
    };

    const nuevaTasks = [tasks, nuevaTask];
    setTasks(nuevaTasks);
    localStorage.setItem('tasks', JSON.stringify(nuevaTasks));
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const editTask = (id, newDescription) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? {task, description: newDescription } : task
    );
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  return (
    <>
       <div className='div'>
       <Header />
         <form>
           <input type="text" placeholder="AÑADE LA NUEVA TAREA" /><button onClick={() => agregarTask('Nueva tarea', 'Nueva Descripcion')}>agregar Tarea</button>
         </form>  
       <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
       
       <button className='button'>limpiar todo</button>
       </div>
    </>
  )
}

export default App
