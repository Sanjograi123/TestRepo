import React from 'react'
import Labels from '../../Shared/Labels/Labels';

import './EditorsPickAndTrending.css'
const EditorsPickAndTrending = ({EditorsPickData}) => {
  return (
    <>
   { EditorsPickData.map((each,index)=>(
      <div className='EditorsPickAndTrending-container' key={index}>
      <div className='EditorsPickAndTrending-main-container'>
        <div className='EditorsPick-main-container'>
          <div className='EditorsPick-left-container'>
            <label>Editor's Choice</label>
            <figure>
              <img src={each.img} alt=''/>
            </figure>
            <h3>{each.title}</h3>
            <p>{each.description}</p>
          </div>
          <div className='EditorsPick-right-container'>
            <div className='EditorsPick-right-details-container'>

            <figure>
              <img src={each.img} alt=''  className='image-from-props'/>
            </figure>
            <h3>{each.title}</h3>
            <p>{each.description}</p>
           
            
              </div>
          </div>
          

        </div>
        <div className='Trending-container'>
          <label>Trending</label>
        
        </div>
      </div>
      </div>
      
    ))};
  </> 
   
  );
};

export default EditorsPickAndTrending;
