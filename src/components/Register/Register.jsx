import React from 'react'
import './Register.css'
import Gicon from "./../../Assets/Google.svg"
import GHicon from "./../../Assets/Icon feather-github.svg"
import Dicon from "./../../Assets/Icon simple-dribbble.svg"
import { Link } from 'react-router-dom'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fname: "",
            lname: "",
            email: '',
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
        return (
            <div className='card' >
                <div className="register-card">
                    <h1 className="register-heading">Register to HustlersVillage</h1>
                    <div className="rcard-btns">
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
                    <div className="register-email">
                        <p className="register-desc">or log in with email</p>
                    </div>
                    <form className='register-form'>
                        <div className="formtf">
                            <div className="register-name">
                                <label className='rtext' >First name</label>
                                <input className='rtextf' type='text' name='fname' value={this.state.fname} onChange={this.handleChange}></input>

                            </div>
                            <div className="register-name-tf">
                                <label className='rtext' >Last name</label>
                                <input className='rtextf' type='text' name='lname' value={this.state.lname} onChange={this.handleChange}></input>
                            </div>
                        </div>
                        <div className="remail">
                            <label className='rtext'>Email</label>
                            <input className='rtextf' type="email" name='email' value={this.state.email} onChange={this.handleChange} />
                        </div>
                        <div className="register-pwd">
                            <label className='rtext'>Password</label>
                            <input className='rtextf' type="password" name='password' value={this.state.password} onChange={this.handleChange} />
                        </div>

                        <div className="rtour">
                            <button className='btn rbtn-tour' onClick={this.handleSubmit}>Take Me To The Village</button>
                            <p className="signUp-to-logIn">
                                Already have an account?<span> <Link to='/LogIn' className='logIn-link'>Log In</Link></span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register
