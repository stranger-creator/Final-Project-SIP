

import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }} id='b-img' className="bgg">
        <div className='border border-4 border p-5'>
          <form>
            <h2 style={{ color: 'black', fontFamily: 'italics' }} className='text-center'>Login</h2>
            <hr style={{ color: 'black' }}></hr>
            <div className='mb-3'>
              <br></br>
              <label htmlFor='Email' style={{ color: 'black' }}>Email</label>
              <input type="email" placeholder='Enter your email' name='Email' className='form-control' />
            </div>
            <div className='mb-3'>
              <label htmlFor='Password' style={{ color: 'black' }}>Password</label>
              <input type="password" placeholder='Enter your password' name='Password' className='form-control' />
            </div>
            <div className='mb-3'>
              <input type='checkbox'></input>
              <label htmlFor='Checkbox' className='ms-2' style={{ color: 'black' }}>Remember your password</label>
              <br></br>
              <br></br>
            </div>
            <div className='d-flex flex-column align-items-center'>
              <button className='butt btn mb-3 text-white'>Login</button>
              <label htmlFor=' text btn' style={{ color: 'black' }}>Don't have an account? </label>
              <Link className='text-white mx-2 ' style={{color:'black'}} to="/signup"> Sign Up </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;

