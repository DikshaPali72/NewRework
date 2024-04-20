import "./Price.css";

import React from "react";
import right from "../images/Price/right.png";
import wrong from "../images/Price/wrong.png";

const Price = () => {
  return (
    <div class="row-auto  bg-white mt-24  ">
      <div className="content-center   ">
        <h1 className=" text-5xl font-bold font-sans text-center text-violet-800 mt-14 max-md:max-w-full">
          Choose Your Simple,{" "}
          <span className=" font-sans font-normal">Transparent Pricing </span>
        </h1>
      </div>

      <div  className="flex flex-wrap  bg-white justify-evenly my-7  ">
        <div  className="bg-neutral-100 shadow-black hover:shadow-2xl mt-20 ">
          <div className=" text-center   mt-7 ">
            <p className="text-2xl font-semibold text-violet-800  ">1 Month</p>
          </div>
          <div className=" text-center mt-4 ">
            <p className="font-bold text-5xl">
              ₹199.00<span className="font-medium text-lg">/month</span>{" "}
            </p>
          </div>
          <p className="mx-12 mt-12  text-center text-violet-800  font-semibold text-xl  ">
            Suitable for companies with
            <br />
            5-10 openings
          </p>

          <div className="flex mx-5 mt-3">
            <div className="flex">
              <img className=" mr-5 h-6" src={right} alt="right" />
            </div>
            <span>10 interview-ready candidates</span>
          </div>
          <div className="flex mx-5 mt-2">
            <div className="flex">
              <img className=" mr-5 h-6 " src={right} alt="right" />
            </div>
            <span>Unlimited job postings</span>
          </div>
          <div className="flex mx-5 mt-2">
            <div className="flex">
              <img className=" mr-5 h-6 " src={right} alt="right" />
            </div>
            <span>
              Receive pre-vetted profiles
              <br />
              within 48 hours
            </span>
          </div>
          <div className="flex mx-5  mt-2">
            <div className="flex">
              <img className=" mr-5 h-6 " src={wrong} alt="right" />
            </div>
            <span>Dedicated account manager</span>
          </div>
          <div className="flex mx-5 mt-2 ">
            <img className=" mr-5 h-6" src={wrong} alt="right" />

            <span>
              Assistance with interview
              <br />
              scheduling
            </span>
          </div>
          <div className="flex mx-5 mt-2 mb-10">
            <div className="flex">
              <img className=" mr-5 h-6 " src={wrong} alt="right" />
            </div>
            <span>Custom reports</span>
          </div>

          <div className=" text-center px-2 py-10 max-md:max-w-full">
            <a
              className=" bg-violet-800 px-24 rounded-xl py-4 text-white  hover:text-violet-800  hover:border-violet-800 hover:bg-white border-2 text-lg max-[299px]:px-5  "
              href="#"
            >
              Get Started
            </a>
          </div>
        </div>
        <div  className="bg-neutral-100 shadow-black hover:shadow-2xl mt-20 ">
          <div className=" text-center   mt-7 ">
            <p className="text-2xl font-semibold text-violet-800  ">3 Month</p>
          </div>
          <div className=" text-center mt-4 ">
            <p className="font-bold text-5xl">
              ₹149.00<span className="font-medium text-lg">/month</span>{" "}
            </p>
          </div>
          <p className="mx-12 mt-12  text-center text-violet-800  font-semibold text-xl  ">
            Suitable for companies with
            <br />
            5-10 openings
          </p>

          <div className="flex mx-5 mt-3">
            <div className="flex">
              <img className=" mr-5 h-6" src={right} alt="right" />
            </div>
            <span>10 interview-ready candidates</span>
          </div>
          <div className="flex mx-5 mt-2">
            <div className="flex">
              <img className=" mr-5 h-6 " src={right} alt="right" />
            </div>
            <span>Unlimited job postings</span>
          </div>
          <div className="flex mx-5 mt-2">
            <div className="flex">
              <img className=" mr-5 h-6 " src={right} alt="right" />
            </div>
            <span>
              Receive pre-vetted profiles
              <br />
              within 48 hours
            </span>
          </div>
          <div className="flex mx-5  mt-2">
            <div className="flex">
              <img className=" mr-5 h-6 " src={wrong} alt="right" />
            </div>
            <span>Dedicated account manager</span>
          </div>
          <div className="flex mx-5 mt-2 ">
            <img className=" mr-5 h-6" src={wrong} alt="right" />

            <span>
              Assistance with interview
              <br />
              scheduling
            </span>
          </div>
          <div className="flex mx-5 mt-2 mb-10">
            <div className="flex">
              <img className=" mr-5 h-6 " src={wrong} alt="right" />
            </div>
            <span>Custom reports</span>
          </div>

          <div className=" text-center px-2 py-10 max-md:max-w-full">
            <a
              className=" bg-violet-800 px-24 rounded-xl py-4  hover:text-violet-800 hover:border-violet-800 hover:bg-white border-2 text-white text-lg max-[299px]:px-5  "
              href="#"
            >
              Get Started
            </a>
          </div>
        </div>
        <div  className="bg-neutral-100 shadow-black hover:shadow-2xl mt-20 ">
          <div className=" text-center   mt-7 ">
            <p className="text-2xl font-semibold text-violet-800  ">6 Month</p>
          </div>
          <div className=" text-center mt-4 ">
            <p className="font-bold text-5xl">
              ₹169.00<span className="font-medium text-lg">/month</span>{" "}
            </p>
          </div>
          <p className="mx-12 mt-12  text-center text-violet-800  font-semibold text-xl  ">
            Suitable for companies with
            <br />
            5-10 openings
          </p>

          <div className="flex mx-5 mt-3">
            <div className="flex">
              <img className=" mr-5 h-6" src={right} alt="right" />
            </div>
            <span>10 interview-ready candidates</span>
          </div>
          <div className="flex mx-5 mt-2">
            <div className="flex">
              <img className=" mr-5 h-6 " src={right} alt="right" />
            </div>
            <span>Unlimited job postings</span>
          </div>
          <div className="flex mx-5 mt-2">
            <div className="flex">
              <img className=" mr-5 h-6 " src={right} alt="right" />
            </div>
            <span>
              Receive pre-vetted profiles
              <br />
              within 48 hours
            </span>
          </div>
          <div className="flex mx-5  mt-2">
            <div className="flex">
              <img className=" mr-5 h-6 " src={wrong} alt="right" />
            </div>
            <span>Dedicated account manager</span>
          </div>
          <div className="flex mx-5 mt-2 ">
            <img className=" mr-5 h-6" src={wrong} alt="right" />

            <span>
              Assistance with interview
              <br />
              scheduling
            </span>
          </div>
          <div className="flex mx-5 mt-2 mb-10">
            <div className="flex">
              <img className=" mr-5 h-6 " src={wrong} alt="right" />
            </div>
            <span>Custom reports</span>
          </div>

          <div className=" text-center px-2 py-10 max-md:max-w-full">
            <a
              className=" bg-violet-800 px-24 rounded-xl py-4 text-white text-lg max-[299px]:px-5 hover:text-violet-800 hover:border-violet-800 hover:bg-white border-2 "
              href="#"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      <div className=" text-5xl  font-bold font-sans text-center text-violet-800  max-md:max-w-full">
        <button className=" px-8 py-4 mt-14 mb-11 text-lg font-medium text-center text-violet-800 rounded-xl border-2 border-violet-800 border-solid  bg-neutral-100  hover:text-white hover:bg-violet-800 max-md:px-5 max-md:mt-10">
          Book a Demo
        </button>
      </div>
      
    </div>
  );
};

export default Price;
