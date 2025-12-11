import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import cover1 from "../../assets/Cover1.png";
import Cover2 from "../../assets/Cover2.png";
import cover3 from "../../assets/Cover3.png";

const Banner = () => {
  return (
    <div className="md:flex items-center w-11/12 mx-auto text-center">
      <div className="flex-1">
        <h1 className="font-bold md:text-5xl text-4xl font-primary text-accent">
          Country's <span className="text-[#2d3748]">#1</span> Tuition <br />{" "}
          Matching Platform
        </h1>
        <p className="font-secondary font-medium text-[#757575] text-3xl mt-3">
          Find Best Tutor And Tuition Here.
        </p>
      </div>
      <div className="flex-1 cover">
        <Carousel autoPlay={true} infiniteLoop={true}>
          <div>
            <img src={cover1} />
          </div>
          <div>
            <img src={Cover2} />
          </div>
          <div>
            <img src={cover3} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
