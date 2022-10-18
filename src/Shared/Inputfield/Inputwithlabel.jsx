import React from 'react'
import './Inputwithlabel.css'

const Inputwithlabel = ({inputType,placeHolder,labelname,classesName}) => {
  return (
    
    <div className='input-with-label-container'>
        <div className='input-with-label-main-container'>
            <h3 className='label-for-form'>{labelname}</h3>
            <input className={classesName?classesName:'input-with-label-medium'} type={inputType} placeholder={placeHolder} />
        </div>
    </div>
  )
}

export default Inputwithlabel
