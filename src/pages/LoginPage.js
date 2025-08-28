import React, { useState } from 'react'
import truck from '../Assets/images/truck.jpg'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [emailerror, setemailerror] = useState('');
    const [passworderror, setpassworderror] = useState('');
    const navigate = useNavigate();


    const handleonsubmit = (e) => {
        e.preventDefault();

        let error = false;
        if(email ==='') {
            setemailerror('Email is required');
            error = true;
        }
        if(password ==='') {
            setpassworderror('Password is required');
            error = true;
        }
        if(error) {
            return;
        }
        // Add login logic here
        if(email ==="maheshkumarm001234@gmail.com" && password === "1234") {
            navigate('/home');

        } else {
            alert("Invalid credentials");
        }

                setemailerror('');
        setpassworderror('');
        console.log("Login button clicked");
        
    }
    return (
        <div className='login-container'>
            <div className='login'>
                <div className='leftside'>
                    <p className='title'>Logistics</p>
                    <p className='subtitle'>Transportation Group</p>

                    <p className='client-login'>Client Login</p>

                    <label>Enter Email Address *</label><br />
                    <input type="email" placeholder="Email" className='email-input' required onChange={(e)=>{setemail(e.target.value)}}/>
                    <span className='email-error' style={{color:"red", fontSize:14,display:"block", paddingTop:5, paddingBottom:30}}>{emailerror}</span>

                    <label>Enter Password *</label><br />
                    <input type="password" placeholder="Password" className='password-input' required onChange={(e)=>{setpassword(e.target.value)}}/>
                    <span className='password-error' style={{color:"red", fontSize:14,  paddingTop:5, paddingBottom:30}}>{passworderror}</span>

                    <button className='login-button' onClick={handleonsubmit}>Login</button>
                    <a href="#" className='forgot-password'>Forgot Password?</a>


                </div>
                <div className='rightside'>
                    <img src={truck} alt="Truck" width={500} height={500} />
                </div>
            </div>
        </div>
    )
}

export default LoginPage