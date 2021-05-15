import React from 'react'
import './LogIn.css'
import Gicon from "./../../Assets/Google.svg"
import GHicon from "./../../Assets/Icon feather-github.svg"
import Dicon from "./../../Assets/Icon simple-dribbble.svg"
import { Link } from 'react-router-dom'


class LogIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }
    handleChange = (e) => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state);
        const { history } = this.props
        if (history) history.push('/Roles')
    }
    render() {
        // const { history } = this.props
        return (
            <div div className='card' >
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
                            <input className='textf' type="email" placeholder="Email" name='email' value={this.state.email} onChange={this.handleChange} />
                        </div>
                        <div className="logIn-pwd">
                            <label className='text'>Password</label>
                            <p className='forgot-pwd'>Forget Password?</p>
                        </div>

                        <div className="tour">
                            <input className='textf' type="password" placeholder="Password" name='password' value={this.state.password} onChange={this.handleChange} />
                            <button type='submit' className='btn btn-tour' onClick={this.handleSubmit}>Take Me To The Village</button>
                        </div>
                        <p className="logIn-to-signUp">
                            Don't have an account on HustlersVillage? <Link to='/Register' className='sign-up-link'>Sign up</Link>
                        </p>
                    </form>

                </div>
            </div >
        )
    }
}

export default LogIn
