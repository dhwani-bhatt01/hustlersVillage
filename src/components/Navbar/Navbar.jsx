import React from 'react'
import './Navbar.css'
import Arrow from '../../Assets/Icon metro-arrow-right.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className='navbar-container container'>
                <h1 className="nav-logo">Hustlers Village</h1>
                <ul className="nav-link">

                    <Link to='/' className='nav-items'>
                        <li className="nav-links">Home</li>
                    </Link>

                    <Link to='/' className='nav-items'>
                        <li className="nav-links">How it Works?</li>
                    </Link>

                    <Link to='/' className='nav-items'>
                        <li className="nav-links">Contact</li>
                    </Link>

                    <Link to='/LogIn' className='nav-logIn'>
                        <li className="nav-links">Log In</li>
                    </Link>

                    <Link to='/Register' className=''>
                        <li className="nav-links">
                            <button className='btn nav-register'>
                                <span>Register</span> <img className="register-icon" src={Arrow} alt="this is an icon" />
                            </button>
                        </li>
                    </Link>

                </ul>
            </div>
        </div >
    )
}

export default Navbar
