import './App.css';
import Header from './components/Header';
import Todo from './components/Todo';
import AddToDo from './components/AddToDo';
import InspirationalQuote from './components/InspirationalQuote';
import { useState, useEffect } from 'react';

function App() {
  const [error, setError] = useState(false)
  const [toDos, setToDos] = useState(() => {

    const savedTodos = localStorage.getItem("toDos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  })

  function addToDo(todo) {

    if (!todo.toDo.length) {
      setError(true)
    } else {
    setError(false)
    const id = Math.ceil(Math.random()*100000)

    const newTodo = {id, ...todo}

    setToDos([...toDos, newTodo])
    }
  }

  function handleCompleteClick(id) {

    const newArrayOfToDos = toDos.filter(element => element.id !== id)

    setToDos(newArrayOfToDos)

  }

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
    
  }, [toDos]);

  function handleEditClick(id, changedToDo) {
     const newArrayOfToDos = toDos.map(element => element.id === id ? {...element, toDo: changedToDo} : element)
     setToDos(newArrayOfToDos)
  }

    
  return (
    <div className="App">
      <Header />
      <InspirationalQuote />
      <AddToDo onAdd={addToDo}/>
      {error && <p className='error'>Please enter your task</p>}
      {toDos.length ? <Todo toDos={toDos} handleCompleteClick={handleCompleteClick} handleEditClick={handleEditClick} /> : <h3 className='d-flex justify-content-center text-dark'>Your tasks are all done!</h3>}
    </div>
  );
}

export default App;
