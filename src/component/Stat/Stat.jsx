import "./Stat.css";

import React from "react";

const Stat = () => {
  return (
    <div className=" flex justify-evenly max-md:flex-col md:p-20 ">
      <div className=" ml-5 mr-10">
        {" "}
        <div className="content-center mt-8  p-5 ">
          <h1 className=" text-5xl font-semibold font-sans  text-violet-800 max-md:max-w-full">
            How Rework AI has been a good{" "}
            <span className=" font-sans font-normal">
              Hiring platform for Companies
            </span>
          </h1>
        </div>
      </div>
      <div className="  justify-evenly  text-center md:flex ">
        {" "}
        <div className=" mt-8  md:border-r-4 border-violet-800 p-5 ">
          <h1 className="text-5xl font-bold font-sans   text-violet-800 mb-6 ">
            80%
          </h1>
          <span className="text-lg ">
            {" "}
            Reduction in your recruitment TAT with the access to a wider talent
            pool on the platform
          </span>
        </div>
        <div className="">
          {" "}
          <div className=" mt-8  md:border-r-4 border-violet-800 p-5 ">
            <h1 className="text-5xl font-bold font-sans   text-violet-800 mb-6 ">
              50%
            </h1>
            <span className="text-lg ">
              {" "}
              Streamline your budgeting and save money while finding the top
              candidates
            </span>
          </div>
        </div>
        <div className=" flex-none">
          {" "}
          <div className=" mt-8  p-5 mr-5   ">
            <h1 className="text-5xl font-bold font-sans   text-violet-800 mb-6 ">
              10k
            </h1>
            <h1 className="text-lg  ">
              {" "}
              Certified sourcing <br /> partners’ expertise
            </h1>
          </div>
          </div>

      </div>
    </div>
  );
};

export default Stat;
