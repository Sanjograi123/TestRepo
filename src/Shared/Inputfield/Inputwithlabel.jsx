import React from 'react'
import './Inputwithlabel.css'

const Inputwithlabel = ({inputType,placeHolder,labelname,styles,classname}) => {
  return (
    
    <div className='input-with-label-container'>
        <div className='input-with-label-main-container'>
            <h3 className='label-for-form'>{labelname}</h3>
            <input className={classname?classname:'input-with-label-medium'} type={inputType} placeholder={placeHolder}  />
        </div>
    </div>
  )
}

export default Inputwithlabel
