import React from 'react'
import Slider from './Slider'
import { Link } from 'react-router-dom';
import "./Home.css"
function Home() {

  return(
   
    <div >
         <Slider/>
         <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Your Recipes App</h1>
        <p>Discover and share delicious recipes with the world!</p>
      </header>
      <main className="home-main">
      <div className="featured-recipes ">
        <section className="featured-recipes">
          <h2>Featured Recipes</h2>
          {/* Display featured recipes here */}
          <div className="recipe-card">
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSPxtPyng4l5kQp-nt_mi-Hb76CzZ5j_Qkqq3Zlc8krF8k024kP"
              alt="Featured Recipe"
            />
            <h3>Chicken Kebab</h3>
            <p>Enjoy the taste.</p>
            <Link to="/recipes">
            <button className="btn btn-primary orange-button">View Recipe</button>

            </Link>
        </div>
          {/* Add more featured recipes */}
        </section>
        </div>
        <div/>
        <section className="search-recipes">
          <h2>Search for Recipes</h2>
          <p>Find your favorite recipes by name, ingredients, or cuisine.</p>
          <Link to="/search">
            <button className="btn btn-success orange-button">Start Searching</button>
          </Link>
        </section>
      </main>
    </div>
    </div>
    
  )
}

export default Home
