import React from 'react'
import {Link} from 'react-router-dom';
const login = () => {
  return (
    <div className="auth">
      <form action="">
        <input required type="email" placeholder="Enter your email"/>
        <input required type="password" placeholder="Enter your password"/>
      </form>
      <button className='btn'>Login</button>
      <p>Incorrect Username/Password</p>
      <span>Don't have an account?
        <Link to="/register">Sign Up</Link>
      </span>
    </div>
  )
}

export default login