import React from 'react'
import './Inputfield.css';

const Inputfield = ({inputType,setplaceholder}) => {
  return (
    <>
    
    <div  className='inputContainer'>

        <div className='mainContainer'>
        <input type={inputType}
         placeholder={setplaceholder} className="input-field"/>


        </div>
      
      </div>
    
    </>
   
  )
}

export default Inputfield
