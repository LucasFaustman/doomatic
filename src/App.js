import './App.css';
import Stats from './pages/Stats';
import Home from './pages/Home'
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {

    
  return (    
  
  <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/stats' element={<Stats />} />
      <Route path='/' element={<Home />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
