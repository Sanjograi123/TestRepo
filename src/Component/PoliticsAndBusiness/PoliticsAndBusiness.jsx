import React from 'react';

import { PoliticsData,BusinessData } from '../../DummyData/DummyData';
import Dataforpolitics from '../../Shared/PoliticsData/Dataforpolitics';
import './PoliticsAndBusiness.css'
import Dataforbusiness from '../../Shared/BusinessData/Dataforbusiness';

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
