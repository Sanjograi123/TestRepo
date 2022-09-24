import React from 'react';
import './PoliticsAndBusiness.css'

const PoliticsAndBusiness = ({PoliticsData}) => {
  return (
    <>
    <div className='politics-and-business-container'>
    <div className='politics-and-business-main-container'>
        {PoliticsData.map((each,index)=>(
           
                <div className='politics-data-container'>
                    <figure>
                        <img src={each.img} className="politics-image" alt='politics-image'/>

                    </figure>
                    <div className='title-description-container'>
                        <div className='title-section'>
                            <h4>{each.title}</h4>
                        </div>
                        <div className='description-section'>
                            <p>{each.description}</p>
                        </div>
                    </div>



                </div>
                
                
             
        ))}
        <div className='trending-container'>
            <label>Trending</label>
        </div>
    </div>
    </div>
    
    
    </>
          
  )
}

export default PoliticsAndBusiness
