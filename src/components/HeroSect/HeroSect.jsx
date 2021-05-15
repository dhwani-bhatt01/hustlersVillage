import React from 'react'
import { Link } from 'react-router-dom'
import './HeroSect.css'
import btnIcon from './../../Assets/Icon metro-arrow-right.svg'

const HeroSect = () => {

    return (
        <div className='hero'>
            <div className="hero-content">
                <h1 className="hero-heading">let your <span>hustle</span> speak for itself</h1>
                <div className="hero-form">
                    <div className="input-hero">
                        <p className="input-txt">hustlersvillage.com/</p>
                        <input className='hero-input'></input>
                    </div>
                    <Link to='/Roles' className='start'>
                        <button className="btn hero-btn">Start Hustling <img className='btnIcon' src={btnIcon} alt="" /></button>
                    </Link>
                </div>
                <p className="hero-form-content">It's free, and takes less than a minute.</p>
            </div>
        </div>
    )
}

export default HeroSect
