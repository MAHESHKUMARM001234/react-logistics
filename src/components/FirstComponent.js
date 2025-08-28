import React from 'react'

const FirstComponent = () => {
  return (
    <div>
      <input type="text" placeholder="Enter text" />
      <input type="password" placeholder="Enter password" />
      <button onClick={() => {
        alert(document.querySelector('input[type="text"]').value + document.querySelector('input[type="password"]').value);
      }}>Submit</button>
    </div>
  )
}

export default FirstComponent