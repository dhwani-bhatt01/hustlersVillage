import React from 'react'
import './LogIn.css'
import Gicon from "./../../Assets/Google.svg"
import GHicon from "./../../Assets/Icon feather-github.svg"
import Dicon from "./../../Assets/Icon simple-dribbble.svg"
// import Button from "./../Button/Button"
import { Link } from 'react-router-dom'


const LogIn = () => {
    return (
        <div className='card'>
            <div className="logIn-card">
                {/* <div className="logIn-card-wrapper"></div> */}
                <h1 className="logIn-heading">Log in to your Account</h1>
                <div className="card-btns">
                    <button className="btn G-btn">
                        <img className='btn-icon' src={Gicon} alt="" />
                        Google</button>
                    <button className="btn GH-btn">
                        <img className='btn-icon' src={GHicon} alt="" />
                        GitHub</button>
                    <button className="btn D-btn">
                        <img className='btn-icon' src={Dicon} alt="" />
                        Dribbble</button>
                </div>
                <div className="logIn-email">
                    <p className="logIn-desc">or log in with email</p>
                </div>
                <form className='logIn-form'>
                    <div className="email">
                        <label className='text'>Email</label>
                        <input className='textf' type="email" />
                    </div>
                    <div className="logIn-pwd">
                        <label className='text'>Password</label>
                        <p className='forgot-pwd'>Forget Password?</p>
                    </div>

                    <div className="tour">
                        <input className='textf' type="password" />
                        <Link to='/Roles'>
                            <button className='btn btn-tour'>Take Me To The Village</button>
                        </Link>
                    </div>
                    <p className="logIn-to-signUp">
                        Don't have an account on HustlersVillage? <Link to='/Register' className='sign-up-link'>Sign up</Link>
                    </p>
                </form>
            </div>
        </div >
    )
}

export default LogIn
