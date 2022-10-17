import React from 'react'
import Carousel from '../../Component/Carousel/Carousel'
import EditorsPickAndTrending from '../../Component/EditorsPickAndTrending/EditorsPickAndTrending';
import PoliticsAndBusiness from '../../Component/PoliticsAndBusiness/PoliticsAndBusiness'
import { CarouselData ,EditorsPickData,TrendingData} from '../../DummyData/DummyData'
import './Home.css';

const Home=()=> {
  return (
    <>
    <div className='Home-container'>
      <div className='main-container'>
        <div className='post-container'>
        <Carousel DataFromCarousel={CarouselData}/>
         <EditorsPickAndTrending EditorsPickData={EditorsPickData} TrendingData={TrendingData} />

         <PoliticsAndBusiness/>
        </div>
       
    


        </div>
        </div>
      
   
    
    </>
    
  )
}

export default Home