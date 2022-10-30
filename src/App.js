import './App.css';
import Reports from './pages/Reports';
import Home from './pages/Home'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Counter } from './features/counter/Counter';
function App() {

    
  return (    
  
  <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/counter' element={<Counter/>} />
      <Route path='/reports' element={<Reports />} />
      <Route path='/' element={<Home />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
