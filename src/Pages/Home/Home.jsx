import React from 'react'
import Carousel from '../../Component/Carousel/Carousel'
import { CarouselData } from '../../DummyData/DummyData'
import './home.css'

const Home=()=> {
  return (
    <>
    <div className='Home-container'>
      <div className='main-container'>
        <div className='post-container'>
        <Carousel DataFromCarousel={CarouselData}/>
        </div>
      </div>
    </div>
    
    </>
    
  )
}

export default Home