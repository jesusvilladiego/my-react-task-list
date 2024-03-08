import Header from './componentes/header'
import TaskList from './componentes/tasklist'
import './App.css'

function App() {

  return (
    <>

       <div className='div'>
       <Header />
         <form>
           <input type="text" placeholder="Add your new todo" /><button className='buton'> + </button>
         </form>  
       <TaskList />
       <button className='button'>clear all</button>
       </div>
       
    </>
  )
}

export default App
