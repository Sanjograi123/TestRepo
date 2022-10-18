import React from 'react'
import './Inputwithlabel.css'

const Inputwithlabel = ({inputType,placeHolder,labelname,styles}) => {
  return (
    
    <div className='input-with-label-container'>
        <div className='input-with-label-main-container'>
            <h3 className='label-for-form'>{labelname}</h3>
            <input className='' type={inputType} placeholder={placeHolder} style={{styles}} />
        </div>
    </div>
  )
}

export default Inputwithlabel
