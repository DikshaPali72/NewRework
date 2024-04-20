import React from "react";
import "./Brand.css";
import pic1 from "../images/googlle.png";
import pic2 from "../images/amazon.png";
import pic3 from "../images/nokia.png";
import pic4 from "../images/spotify.png";
import pic5 from "../images/microsoft.png";

function Brand() {
  return (
    <div id="brand" class=" flex flex-col py-12 bg-violet-100  ">
      <p class="text-violet-400 opacity-80 font-sans font-semibold  sm:pb-[10px] lg:pb-[16px] sm:text-base lg:text-2xl text-center">
        Hire for 1000+ Brands Including
      </p>
      <div class="flex flex-wrap justify-evenly px-8 lg:gap-10 mt-5 mx-2  max-w-full">
        <div class="col-sm-12 col-xs-12 col-md-12 col-lg-2 col-xl-2 p-4 d-flex justify-content-around">
          {" "}
          <img className="mt-2" src={pic1} alt="" />
        </div>
        <div class="col-sm-12 col-xs-12 col-md-12 col-lg-2 col-xl-2 p-4 d-flex justify-content-around">
          {" "}
          <img className="mt-2" src={pic2} alt="" />
        </div>
        <div class="col-sm-12 col-xs-12 col-md-12 col-lg-2 col-xl-2 p-4 d-flex justify-content-around">
          {" "}
          <img className="mt-2" src={pic3} alt="" />
        </div>
        <div class="col-sm-12 col-xs-12 col-md-12 col-lg-2 col-xl-2 p-4 d-flex justify-content-around">
          {" "}
          <img className="mt-2" src={pic4} alt="" />
        </div>
        <div class="col-sm-12 col-xs-12 col-md-12 col-lg-2 col-xl-2 p-4 d-flex justify-content-around">
          {" "}
          <img className="mt-2" src={pic5} alt="" />
        </div>
        <div class="col-sm-12 col-xs-12 col-md-12 col-lg-2 col-xl-2 p-4 d-flex justify-content-around">
          {" "}
          <img className="mt-2" src={pic1} alt="" />
        </div>
        <div class="col-sm-12 col-xs-12 col-md-12 col-lg-2 col-xl-2 p-4 d-flex justify-content-around">
          {" "}
          <img className="mt-2" src={pic2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Brand;
