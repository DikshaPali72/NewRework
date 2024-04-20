import "./Stories.css";

import React from "react";
import story1 from "../images/stories/story1.png";
import story2 from "../images/stories/story2.png";
import story3 from "../images/stories/story3.png";

const Stories = () => {
  return (
    <div className="bg-white">
      <div className="content-center  ">
        <h1 className=" text-5xl font-bold font-sans text-center text-violet-800 mt-24  max-md:max-w-full">
          Success <span className=" font-normal">Stories</span>
        </h1>
      </div>
      <div className=" md:flex p-10 justify-evenly items-center py-10 ">
        <div className="bg-neutral-100 shadow-xl  hover:shadow-none hover:bg-neutral-200 m-5 mb-10 rounded-t-2xl rounded-b-2xl ">
          <div className="">
            <img className="w-full  rounded-t-2xl" src={story1} alt="" />
          </div>
          <div className="m-5 font-semibold text-2xl">
            {" "}
            Rework has been a great way to make the hiring process easier and
            faster.
          </div>
          <div className="text-gray-500  text-xl  rounded-b-2xl m-5 pb-5">
            {" "}
            “We ve been able to save money and time, and the recruiters have
            been able to find the best employers leads. Highly recommend! “
          </div>
        </div>
        <div className="bg-neutral-100 shadow-xl hover:shadow-none hover:bg-neutral-200 mb-10 m-5 rounded-t-2xl rounded-b-2xl ">
          <div className="">
            <img className="w-full  rounded-t-2xl" src={story2} alt="" />
          </div>
          <div className="m-5 font-semibold text-2xl ">
            {" "}
            Rework has been a great way to make the hiring process easier and
            faster.
          </div>
          <div className="text-gray-500  text-xl m-5 rounded-b-2xl pb-5">
            {" "}
            “We ve been able to save money and time, and the recruiters have
            been able to find the best employers leads. Highly recommend! “
          </div>
        </div>
        <div className="bg-neutral-100 shadow-xl hover:bg-neutral-200 hover:shadow-none m-5 mb-10 rounded-t-2xl rounded-b-2xl ">
          <div className=" rounded-t-2xl ">
            <img className="w-full rounded-t-2xl  " src={story3} alt="" />
          </div>
          <div className=" m-5 font-semibold text-2xl">
            {" "}
            Rework has been a great way to make the hiring process easier and
            faster.
          </div>
          <div className="text-gray-500  text-xl  rounded-b-2xl m-5 pb-5">
            {" "}
            “We ve been able to save money and time, and the recruiters have
            been able to find the best employers leads. Highly recommend! “
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
