import React from 'react'

const Inputfield = (inputType,placeholder) => {
  return (
    <>
    
    <div  className='inputContainer'>

        <div className='mainContainer'>
        <input type={inputType}
         placeholder={placeholder}/>


        </div>
      
      </div>
    
    </>
   
  )
}

export default Inputfield
