import React from 'react';

import { PoliticsData,BusinessData } from '../../DummyData/DummyData';
import Dataforpolitics from '../../Shared/PoliticsData/Dataforpolitics';
import Dataforbusiness from '../../Shared/BusinessData/Dataforbusiness';
import './PoliticsAndBusiness.css'



const PoliticsAndBusiness = () => {
  return (

      <div className='politics-and-business-container'>
    <div className='politics-and-business-main-container'>
        <Dataforpolitics PoliticsData={PoliticsData}/>
       <Dataforbusiness BusinessData={BusinessData}/>
    </div>
    </div>
    
    
          
  )
}

export default PoliticsAndBusiness
