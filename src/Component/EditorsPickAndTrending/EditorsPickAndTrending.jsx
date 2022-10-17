import React, { useState } from 'react'
import Labels from '../../Shared/Labels/Labels';

import './EditorsPickAndTrending.css'
const EditorsPickAndTrending = ({EditorsPickData}) => {
  const [datas]=useState(EditorsPickData.slice(0,1))
  
 
  return (
    <>   <div className='outer-container'>
    <div className='editor-pick-and-trending-container'>
      <div className='editor-pick-and-trending-main-container'>
        <div className='editor-pick-container'>
          <div className='gggg'><Labels labelName="Editor's Pick"/></div>
          <div className='editor-pick-main-container'>
            <div className='editor-left-cobtainer'>
              {datas.map((each,index)=>(
                <div className='editor-left-figure'>
                  <figure>
                    <img src={each.img} className="editor-pic"/>
                  </figure>
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
                <><div className='editir-pick-right-figure'>
                  <figure>
                    <img src={each.img} className='editor-pic'></img>
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
                  </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
   </div></>
  )
};

export default EditorsPickAndTrending;
