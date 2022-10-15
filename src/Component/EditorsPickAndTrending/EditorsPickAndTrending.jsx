import React, { useState } from 'react'
import Labels from '../../Shared/Labels/Labels';

import './EditorsPickAndTrending.css'
const EditorsPickAndTrending = ({EditorsPickData}) => {
  const [datas]=useState(EditorsPickData.slice(0,1))
  
 
  return (
  <div className='editor-pick-and-trending-container'>


<div className="editor-pick-and-trending-main-container">
<Labels labelName="Editor's Pick"/>
      <div className='editor-pick-container'>
        {datas.map((each,index)=>(
        <div className='editor-pick-left'>
          
            <><div className='figure-container'>
              <figure>
                <img src={each.img} className='editors-pic' alt='editors-pic'></img>

              </figure>

            </div>
            <div className='editor-title-description-container'>
            <div className='editor-title-container'>
             <h4>{each.title}</h4> 
             </div>
             <div className='editor-description-container'>
              <p>{each.description}</p>
              </div>


            </div>
            
              </>
              </div>

          ))}
          

        
        <div className='editor-pick-right'>
        {EditorsPickData.map((each,index)=>(
          <div className='figure-title-container-right'>
              <div className='figure-right'>
                <figure>
                  <img src={each.img} className='editor-pic' alt='editor-pic'></img>
                </figure>
              </div>
              <div className='title-container-right'>
                <h4>{each.title}</h4>
              </div>

          </div>
          

            ))}
           
          
        </div>

      </div>

      

</div>



<div className='trending-container'>
<Labels labelName='Trending'/>

  <p>Its me trending</p>
</div>
  </div>
  )
};

export default EditorsPickAndTrending;
