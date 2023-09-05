import React from 'react'
import Home from './Components/Home';
import About from './Components/About';
import Recipes from './Components/Recipes';
import Login from './Components/Login';
import Signup from './Components/Signup';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter ,Routes,Route} from "react-router-dom";
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';
import Veg from './Components/Veg';
import Nonveg from './Components/Nonveg';
import AddRecipe from './Components/Addrecipe';
import DeleteItem from './Components/Delete';
import UpdateItem from './Components/UpdateItem';
import Search from './Components/Search';
import Contact from './Components/Contact';
function App() {
  return (
    <>
        <BrowserRouter>
        <NavBar/>
          <Routes>
               <Route exact path="/" element={<Home/>}/>
               <Route exact path="/about" element={<About/>}/>
               <Route path="/recipes" element={<Recipes/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="/signup" element={<Signup/>}/>
               <Route path="/contact" element={<Contact/>}/>
               <Route path="/veg" element={<Veg/>}/>
               <Route path="/nonveg" element={<Nonveg/>}/>
               <Route path="/add" element={<AddRecipe/>}/>
               <Route path="/delete" element={<DeleteItem/>}/>
               <Route path="/update" element={<UpdateItem/>}/>
               <Route path="/search" element={<Search/>}/>

          </Routes> 
          <Footer/>   
        </BrowserRouter>
        
        
    </>
  )
}

export default App
