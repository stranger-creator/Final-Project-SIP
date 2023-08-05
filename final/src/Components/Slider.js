import "./Slider.css"
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from "./Images/img1.jpg"
import image2 from "./Images/img2.jpg"
import image3 from "./Images/img3.avif"
function Slider() {
  return (
<div class="carousel-wrapper" className="bg-dark px-0">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src={image1} alt="" />
                </div>
                <div>
                    <img src={image2} alt="" />
                </div>
                <div>
                    <img src={image3} alt="" />
                </div>
            </Carousel>
        </div>
  )
}

export default Slider
