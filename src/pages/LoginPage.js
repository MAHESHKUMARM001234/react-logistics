import React from 'react'
import truck from '../Assets/images/truck.jpg'
// import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className='login-container'>
            <div className='login'>
                <div className='leftside'>
                    <p className='title'>Logistics</p>
                    <p className='subtitle'>Transportation Group</p>

                    <p className='client-login'>Client Login</p>

                    <label>Enter Email Address *</label><br />
                    <input type="email" placeholder="Email" className='email-input' required />

                    <label>Enter Password *</label><br />
                    <input type="password" placeholder="Password" className='password-input' required />

{/* 
                    <Link to="/home" className='login-button'>Login</Link>
                    <Link to="#" className='forgot-password'>Forgot Password?</Link> */}


                </div>
                <div className='rightside'>
                    <img src={truck} alt="Truck" width={500} height={500} />
                </div>
            </div>
        </div>
    )
}

export default LoginPage