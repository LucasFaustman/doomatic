import './App.css';
import Stats from './pages/Stats';
import Home from './pages/Home'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Counter } from './features/counter/Counter';
function App() {

    
  return (    
  
  <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/counter' element={<Counter/>} />
      <Route path='/stats' element={<Stats />} />
      <Route path='/' element={<Home />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
