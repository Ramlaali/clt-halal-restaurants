import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import About from './components/About';
import Home from './components/Home';
import Restaurants from './components/Restaurants';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path= "/restaurants" element={<Restaurants/>}/>
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
    </BrowserRouter>
    
 
  )
}

export default App
