import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"
const Login = () => {
  // State to store form input values
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // State to manage the login status
  const [loginStatus, setLoginStatus] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to your backend API
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful login
        setLoginStatus('Login successful');
      } else {
        // Handle login error, e.g., display an error message
        setLoginStatus('Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <>
      <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} id='b-img' className='bgg'>
        <div className='border border-4 border p-5'>
          <form onSubmit={handleSubmit}>
            <h2 style={{ color: 'black', fontFamily: 'italics' }} className='text-center'>Login</h2>
            <hr style={{ color: 'black' }}></hr>
            {/* Display the login status */}
            {loginStatus && <div className={loginStatus === 'Login successful' ? 'alert alert-success' : 'alert alert-danger'}>{loginStatus}</div>}
            <div className='mb-3'>
              <br></br>
              <label htmlFor='email' style={{ color: 'black' }}>Email</label>
              <input
                type='email'
                placeholder='Enter your email'
                name='email'
                className='form-control'
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='password' style={{ color: 'black' }}>Password</label>
              <input
                type='password'
                placeholder='Enter your password'
                name='password'
                className='form-control'
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className='mb-3'>
              <input type='checkbox'></input>
              <label htmlFor='checkbox' className='ms-2' style={{ color: 'black' }}>Remember your password</label>
              <br></br>
              <br></br>
            </div>
            <div className='d-flex flex-column align-items-center'>
              <button className='butt btn mb-3 text-white'>Login</button>
              <label htmlFor=' text btn' style={{ color: 'black' }}>Don't have an account? </label>
              <Link className='text-white mx-2' style={{ color: 'black' }} to='/signup'> Sign Up </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
