import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import Logo from "./Images/logo.png"
import "./Navbar.css"
const NavBar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-md  justify-content-center bg-white shadow sticky-top">
            <div className="container ">
                {/* <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="Loading" width="70" height="55"></img>
                </Link> */}
                <h3>NAME</h3>
                <Link class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/about">About us</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/recipes">Recipes</Link>
                        </li>
                    </ul>
                    <Link to="#" className="btn btn-brand">Login</Link>
                </div>
            </div>
        </nav>

    </>
  )
}

export default NavBar