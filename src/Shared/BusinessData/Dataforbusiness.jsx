import React from 'react'
import Labels from '../Labels/Labels'

const Dataforbusiness = ({BusinessData}) => {
  return (
   
    <div className='business-container'>
    <Labels labelName='Business'/>
    <div className='trending-main-container'>
        {BusinessData.map((each,index)=>(
          <div className='trending-list-title-container'>
                
            <><div className='list-container'>

                {BusinessData.indexOf(each)}

            </div>
            <div className='Trending-title-container'>
                <h5>{each.title}</h5>
                </div></>


                </div>

        ))}
    </div>
    </div>
        
  )
}

export default Dataforbusiness
