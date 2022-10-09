import './App.css';
import Todo from './components/Todo';
import AddToDo from './components/AddToDo';
import { useState, useEffect } from 'react';


function App() {
  const [toDos, setToDos] = useState(() => {
    // get the todos from localstorage
    const savedTodos = localStorage.getItem("toDos");
    // if there are todos stored
    if (savedTodos) {
      // return the parsed JSON object back to a javascript object
      return JSON.parse(savedTodos);
      // otherwise
    } else {
      // return an empty array
      return [];
    }
  })

  function addToDo(todo) {
    const id = Math.ceil(Math.random()*100000)

    const newTodo = {id, ...todo}

    setToDos([...toDos, newTodo])
  }

  useEffect(() => {
    // localstorage only support storing strings as keys and values
    // - therefore we cannot store arrays and objects without converting the object
    // into a string first. JSON.stringify will convert the object into a JSON string
    localStorage.setItem("toDos", JSON.stringify(toDos));
    // add the todos as a dependancy because we want to update
    // localstorage anytime the todos state changes
  }, [toDos]);


    
  return (
    <div className="App">
      <AddToDo onAdd={addToDo}/>
      <Todo toDos={toDos} />
    </div>
  );
}

export default App;
