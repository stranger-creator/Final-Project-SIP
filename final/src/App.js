import React from 'react'
import Home from './Components/Home';
import About from './Components/About';
import Recipes from './Components/Recipes';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter ,Routes,Route} from "react-router-dom";
import NavBar from './Components/Navbar';
function App() {
  return (
    <>
        <BrowserRouter>
        <NavBar/>
          <Routes>
               <Route exact path="/" element={<Home/>}/>
               <Route exact path="/about" element={<About/>}/>
               <Route path="/recipes" element={<Recipes/>}/>
          </Routes>     
        </BrowserRouter>
        
        
    </>
  )
}

export default App
