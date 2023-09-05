import "./Slider.css"
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from "./Images/img1.jpg"
import image2 from "./Images/img2.jpg"
import image3 from "./Images/img3.avif"
import { Link } from "react-router-dom";
function Slider() {
  return (
<div class="carousel-wrapper" className=" px-0 mt-3">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                <h2>
                        </h2>
                    <img className="s1" src={image1} alt="" />
                    <div class="carousel-caption d-none d-md-block">
                    <div className="desc"><h5 className="text-black">Capture Unlimited varieties of food</h5></div>
                         <Link className="btn btn-warning mt-3" to="/recipes">Make it myself</Link>
                     </div>
                </div>
                <div>
                    <img className="s1" src={image2} alt="" />
                    <div class="carousel-caption d-none d-md-block">
                        <div className="desc"><h5 className="text-black">Capture Unlimited varieties of food</h5></div>
                         <Link className="btn btn-warning mt-3">Make it myself</Link>
                     </div>
                </div>
                <div>
                    <img className="s1" src={image3} alt="" />
                    <div class="carousel-caption d-none d-md-block">
                    <div className="desc"><h5 className="text-black">Capture Unlimited varieties of food</h5></div>
                         <Link className="btn btn-warning mt-3">Make it myself</Link>
                     </div>
                </div>
            </Carousel>
        </div>
  )
}

export default Slider
