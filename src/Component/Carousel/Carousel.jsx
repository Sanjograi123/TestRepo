import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Carousel=({DataFromCarousel=[]}) =>{

  const settings = {
    dots: true,
    infinite:false ,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };


  return (
    <>
    <Slider {...settings}>
      {DataFromCarousel.map((each, index)  => (
        <div className="maincontainer">
          <div className="innercontainer">
            <div className="details">
              {/* <h1>{each.name}</h1> */}
              <figure>
                <img
                  src={each.image}
                  className="imagefromCarousel"
                  alt="image1"
                />
              </figure>
              <div className="title">
                <h3>{each?.title}</h3>
              </div>
              <div className="DescriptionContainer">
                <p>{each?.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </>
  )
}

export default Carousel