import React from 'react'
import {Link} from 'react-router-dom';
const register = () => {
  return (
    <div className="auth">
      <form action="">
        <input required type="text" placeholder="Enter your name"/>
        <input required type="email" placeholder="Enter your email"/>
        <input required type="password" placeholder="Enter your password"/>
      </form>
      <button className='btn'>Sign Up</button>
      <span>Do you have an account?
        <Link to="/login">Login</Link>
      </span>
    </div>
  )
}

export default register   