import React, { useState } from 'react'
import Labels from '../../Shared/Labels/Labels';
import Dataforbusiness from '../../Shared/BusinessData/Dataforbusiness';

import './EditorsPickAndTrending.css'
const EditorsPickAndTrending = ({EditorsPickData}) => {
  const [datas]=useState(EditorsPickData.slice(0,1))
  
 
  return (
    <div className='editor-pick-and-trending-main-cntainer'>
      <div className='editor-pick-container'>
        <Labels labelName="Editor's Choice"/>
        <div className='editor-main-container'>
          {datas.map((each,index)=>(
            <div className="editor-left" key={index}>
            <figure>
              <img src={each.img} className="editor-pic" alt='editor-pic'/>
            </figure>
            <div className='title-and-description-container'>
            <h5>{each.title}</h5>
            <p>{each.description}</p>  
            </div>
                   
          </div>

          ))}
        
        <div className='right-editor'>
          {EditorsPickData.map((each,index)=>(
          <><div className='figure-title-container'>
            <div className='editor-figure-container'>
             <figure>
              <img src={each.img} className="editor-pic" alt='editor-pic'>

              </img>
             </figure>
            </div>
            <div className='editor-title-container'>
              <h3>{each.title}</h3>
            </div>
          </div></>
          ))}
          
        </div>
        </div>
       
        </div>
        <div className='Trending-container'>
          <Labels labelName="Trending"/>
        </div>
    </div>
  )
};

export default EditorsPickAndTrending;
