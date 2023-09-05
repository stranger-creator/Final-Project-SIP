import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  // State to store form input values
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [signupSuccess, setSignupSuccess] = useState(false);
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
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          password: formData.password,
        }),
      });
  
      if (response.ok) {
        // Handle successful registration, e.g., redirect to login page
        // You can add your own logic here
        console.log('Registration successful');
        return <Link to="/login">Redirecting to Home...</Link>;
      } else {
        // Handle registration error, e.g., display an error message
        // You can add your own error handling logic here
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className='bgg d-flex justify-content-center align-items-center vh-100' id="null">
      <div className='border border-4 p-5'>
        <form onSubmit={handleSubmit}>
          <h2 style={{ color: 'black', fontFamily: 'italic' }} className='text-center'>Sign Up</h2>
          <hr style={{ color: 'blacksmoke' }}></hr>
          <div className='mb-3 d-flex'>
            <div>
              <label htmlFor='firstName' style={{ color: 'black' }}>First Name</label>
              <input
                type='text'
                placeholder='Enter your first name'
                name='firstName'
                className='form-control'
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className='ms-3'>
              <label htmlFor='lastName' style={{ color: 'black' }}>Last Name</label>
              <input
                type='text'
                placeholder='Enter your last name'
                name='lastName'
                className='form-control'
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className='mb-3'>
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
            <input type='checkbox' />
            <label htmlFor='checkbox' className='ms-2' style={{ color: 'black' }}>I accept the </label>
            <Link className='primary mx-2 text-black'> Terms of Use</Link>
            <label htmlFor='text' className='ms-2' style={{ color: 'black' }}>&</label>
            <Link className='primary mx-2 text-black'>Privacy Policy</Link>
            <br />
            <br />
          </div>
          <div className='d-grid'>
            <button className='butt btn mb-3 text-black' to="/login">Sign Up</button>
          </div>
          <div>
            <center>
              <label htmlFor='text' style={{ color: 'black' }}>Already have an account? </label>
              <Link className='text-black mx-2' to="/login"> Login Here </Link>
            </center>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
