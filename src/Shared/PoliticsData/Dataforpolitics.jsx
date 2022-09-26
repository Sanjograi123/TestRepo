import React from 'react'

import Labels from '../Labels/Labels'
const Dataforpolitics = ({PoliticsData}) => {
  return (
    <div>
      <div className='politics-container'>
            <Labels labelName='POLITICS'/>
            {PoliticsData.map((each,index) => (
                
                <>
                <div className='politics-data-container' key={index}>
                      <div className='figure-container'>
                        
                    <figure>
                        <img src={each?.img}
                            className='politics-image'
                            alt='politics' />

                    </figure>
                    </div> 

                
                <div className='title-and-description-container'>
                    <div className='title-section'>
                        <h5>{each?.title}</h5>
                    </div>
                    <div className='description-section'>
                        <p>{each?.description}</p>
                    </div>

                </div>
                </div>
                </>
                
            ))}
        </div>
    </div>
  )
}

export default Dataforpolitics
