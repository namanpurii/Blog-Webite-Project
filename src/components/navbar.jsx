import React from 'react'
import {Link} from 'react-router-dom'
const navbar = () => {
  return (
    <div className="navbar">
        <div className="container">
            <div className="links">
                <Link className='link' to="/?cat=blog"><h5>Blog</h5></Link>
                <Link className='link' to="/register"><h5>Sign Up</h5></Link>
                <Link className='link' to="/login"><h5>Login</h5></Link>
                <Link className='link write' to="/write"><h5>Edit</h5></Link>
                
            </div>
        </div>
    </div>
  )
}

export default navbar