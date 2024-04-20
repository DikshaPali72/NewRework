import "./Discover.css";
import React from "react";
import diec from "../images/discover/disc.png";

const Discover = () => {
  return (
    <>
      <div className="bg-slate-50 flex justify-evenly max-sm:flex-wrap ">
        <div className="mt-20 mb-20">
          <div className="content-center ml-5  ">
            <h1 className=" text-5xl font-bold font-sans  text-violet-800 mt-10 max-md:max-w-full">
              Discover the Future of
              <span className=" font-sans font-normal">
                {" "}
                Talent <br />
                Assessment!
              </span>
            </h1>
          </div>
          <div className=" mt-12 text-xl ml-5">
            {" "}
            Facing challenges in traditional hiring?
            <br />
            Uncover the costs, pitfalls, and the game-changing role of
            Generative AI in <br /> recruitment.
          </div>
          <div className=" ml-5 mt-12">
            <span className=" text-lg font-bold  ">
              🔍 Inside this Whitepaper:
            </span>
            <ul className="text-lg ml-8 list-disc">
              <li>Manual vs. Machine-based hiring: Costs & Challenges.</li>
              <li>The truth about &quot;Interview as a Service.&quot;</li>
              <li>
                Generative AI: The simple explanation. Optimize Your Hiring
                Process Today!
              </li>
            </ul>
          </div>
          <div className=" text-5xl font-bold font-sans ml-8  max-md:max-w-full">
        <button className=" px-12 py-4 mt-16 text-2xl font-medium md:text-center  text-white rounded-3xl border-2 border-violet-800 border-solid hover:text-violet-800 bg-violet-800   hover:bg-white max-md:px-5 max-md:mt-10">
        Download Now for Smarter Recruitment
        </button>
      </div>
        </div>
        <div className=" mt-20 mb-20">
          <img className=" mr-5" src={diec} alt="pic" />
        </div>
      </div>
    </>
  );
};

export default Discover;
