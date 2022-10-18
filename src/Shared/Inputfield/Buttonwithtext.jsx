import React from 'react'
import './Buttonwithtext.css';
const Buttonwithtext = ({buttonType,buttonText}) => {
  return (
    <div className='btn-with-text-container'>
      <button className='btn-with-text' type={buttonType}>{buttonText}</button>
    </div>
  )
}

export default Buttonwithtext
