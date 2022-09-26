import React from 'react';
import Labels from '../../Shared/Labels/Labels';
import { PoliticsData,TrendingData } from '../../DummyData/DummyData';
import Dataforpolitics from '../../Shared/PoliticsData/Dataforpolitics';
import './PoliticsAndBusiness.css'
import Datafortrending from '../../Shared/TrendingData/Datafortrending';

const PoliticsAndBusiness = () => {
  return (

      <div className='politics-and-business-container'>
    <div className='politics-and-business-main-container'>
        <Dataforpolitics PoliticsData={PoliticsData}/>
       <Datafortrending TrendingData={TrendingData}/>
    </div>
    </div>
    
    
          
  )
}

export default PoliticsAndBusiness
