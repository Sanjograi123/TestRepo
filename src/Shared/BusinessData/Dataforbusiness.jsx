import React from 'react'
import Labels from '../Labels/Labels'

const Dataforbusiness = ({BusinessData}) => {
  return (
   
    <div className='business-container'>
    <Labels labelName='Business'/>
    
        {BusinessData.map((each,index)=>(
          <div className='business-main-container' key={index}>
          <><div className='business-figure-container'>
          <figure>
            <img src={each.img}
            className="business-images" alt='business-pics'/>

          </figure>
          
          </div>  
        
            <div className='business-title-description-container'>
              <div className='business-title-container'>
              <h5>{each?.title}</h5>
              </div>
               
                
                <div className='business-description'>
                  <p>{each.description}</p>
                </div>
                </div>
               
                </>
                </div>
        ))}
    
    </div>
        
  )
}

export default Dataforbusiness
