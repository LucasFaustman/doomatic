import './App.css';
import Todo from './components/Todo';
import AddToDo from './components/AddToDo';
import { useState, useEffect } from 'react';


function App() {
  const [toDos, setToDos] = useState(() => {

    const savedTodos = localStorage.getItem("toDos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  })

  function addToDo(todo) {
    const id = Math.ceil(Math.random()*100000)

    const newTodo = {id, ...todo}

    setToDos([...toDos, newTodo])
  }

  function handleDeleteClick(id) {

    const newArrayOfToDos = toDos.filter(element => element.id !== id)

    setToDos(newArrayOfToDos)

  }

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
    
  }, [toDos]);


    
  return (
    <div className="App">
      <AddToDo onAdd={addToDo}/>
      <Todo toDos={toDos} handleDeleteClick={handleDeleteClick} />
    </div>
  );
}

export default App;
