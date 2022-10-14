import React, { useState } from 'react'
import Labels from '../../Shared/Labels/Labels';

import './EditorsPickAndTrending.css'
const EditorsPickAndTrending = ({EditorsPickData}) => {
  const [datas]=useState(EditorsPickData.slice(0,1))
  
 
  return (
  <div className='editor-pick-and-trending-container'>
<Labels labelName="Editor's Pick"/>

<div className="editor-pick-and-trending-main-container">
      <div className='editor-pick-container'>
        <div className='editor-pick-left'>
          <p>It's me left</p>

        </div>
        <div className='editor-pick-right'>
          <p>It's me right</p>
        </div>

      </div>



</div>

<Labels labelName='Trending'/>



  </div>
  )
};

export default EditorsPickAndTrending;
