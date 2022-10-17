import React, { useState } from 'react'
import Labels from '../../Shared/Labels/Labels';

import './EditorsPickAndTrending.css'
const EditorsPickAndTrending = ({EditorsPickData,TrendingData}) => {
  const [datas]=useState(EditorsPickData.slice(0,1))
  
 
  return (
    <>   <div className='outer-container'>
    <div className='editor-pick-and-trending-container'>
      <div className='editor-pick-and-trending-main-container'>
        <div className='editor-pick-container'>
          <div className='editor-pick'><Labels labelName="Editor's Pick"/></div>
          <div className='editor-pick-main-container'>
            <div className='editor-left-container'>
              {datas.map((each,index)=>(
                <div className='editor-left-main-container' key={index}>
                  <div className='editor-left-figure'>
                  <figure>
                    <img src={each.img} className="editor-pic"/>
                  </figure>
                  </div>
                  <div className='editor-left-title-description-container'>
                    <div className='editor-left-title'>
                      <h4>{each.title}</h4>
                    </div>
                    <div className='editor-left-description-container'>
                      <p>{each.description}</p>
                    </div>
                  </div>
                  
                </div>
              ))}

            </div>
            
            <div className='editor-pick-right-container'>
              {EditorsPickData.map((each,index)=>(
                <>
                <div className='editor-pick-right-main-container'>
                <div className='editir-pick-right-figure'>
                  <figure>
                    <img src={each.img} className='editor-pics'></img>
                  </figure>
                </div>
                <div className='editor-right-title-description-container'>
                  <div className='editor-right-title'>
                    <h4>{each.title}</h4>
                  </div>
                  <div className='editor-right-description-container'>
                    <p>{each.description}</p>
                  </div>
                  </div>
                </div>
                  </>
              ))}
            </div>
          </div>
        </div>
       
        <div className='trending-container'>
        <div className=''><Labels labelName='Trending'/></div>
          {TrendingData.map((each,index)=>(
            <div className='trending-title-container'>
              <h5>{each.title}</h5>
            </div>
          ))}
          <p>it's me trending</p>
        </div>
      </div>
    </div>
   </div></>
  )
};

export default EditorsPickAndTrending;
