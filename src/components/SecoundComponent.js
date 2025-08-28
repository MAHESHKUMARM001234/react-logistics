import React from 'react'

const SecoundComponent = (props) => {
  return (
    <div>SecoundComponent: {props.name}<br/>
    <input type='text' className='name' placeholder='Enter Name' /><br/>
    <input type='email' className='email' placeholder='Enter Email' /><br/>
    <input type='password' className='password' placeholder='Enter Password' /><br/>
    <input type='number' className='age' placeholder='Enter Age' /><br/>

    </div>
  )
}

export default SecoundComponent