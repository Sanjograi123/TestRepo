import React from 'react'
import Labels from '../Labels/Labels'

const Datafortrending = ({TrendingData}) => {
  return (
   
    <div className='trending-container'>
    <Labels labelName='Trending'/>
    <div className='trending-main-container'>
        {TrendingData.map((each,index)=>(
          <div className='trending-list-title-container'>
                
            <><div className='list-container'>

                {TrendingData.indexOf(each)}

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

export default Datafortrending
