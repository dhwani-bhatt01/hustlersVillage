import React from 'react'
import './UserCheck.css'
import DesImg from './../../Assets/Designer.svg'
import DevImg from './../../Assets/Developer.svg'
import RecImg from './../../Assets/Recruiter.svg'
import OtherImg from './../../Assets/Recruiter.svg'

const UserCheck = () => {
    return (
        <div className='card'>
            <div className="card-wrapper">
                <h1 className="user-heading">Are you a designer, developer or recruiter?</h1>
                <div className="user-card">
                    <div className="user-card-one">
                        <img className='user-icons' src={DesImg} alt="" />
                        <h6 className='user-card-content'>Designer</h6>
                    </div>
                    <div className="user-card-one">
                        <img className='user-icons' src={DevImg} alt="" />
                        <h6 className='user-card-content'>Developer</h6>
                    </div>
                </div>

                <div className="user-card">
                    <div className="user-card-one">
                        <img className='user-icons' src={RecImg} alt="" />
                        <h6 className='user-card-content'>Recruiter</h6>
                    </div>

                    <div className="user-card-one">
                        <img className='user-icons' src={OtherImg} alt="" />
                        <h6 className='user-card-content'>Other</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCheck
