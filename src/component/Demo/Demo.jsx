import React from "react";
import "./Demo.css";
import pic from "../images/tick.png";
import pic2 from "../images/tick2.png";
import pic3 from "../images/Screen.png";

function Demo() {
  return (
    <>
      <div id="dem" className=" bg-white mt-28">
        <div className="self-stretch  font-sans  bg-white max-md:max-w-full ">
          <div className="flex flex-col items-center py-8 pl-20 bg-white max-md:pl-5">
            <div className="mt-5 w-full max-w-[1313px] max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <span className="text-6xl font-bold   text-violet-800 ">
                    Power Up Your Hiring
                  </span>
                
                  <div className="mt-5 text-5xl  bg-white text-violet-800">
                    with Rework.
                  </div>

                  <div className="self-stretch mt-3  font-sans   bg-white text-zinc-900 ">
                    <p>
                    Empower your business with cutting-edge A.I. technology,
                    simplified processes, and top-tier talent connections.
                    Rework is your strategic partner in redefining how you hire
                    </p>
                  </div>

                  <div className=" ">
                    <button
                      className="justify-center px-14 py-5 mt-9 text-2xl font-sans 
                       bg-violet-800 rounded-3xl shadow-lg text-white hover:bg-white hover:text-violet-800
                       hover:border-violet-800 border-2 max-md:px-5"
                    >
                      Book A Demo
                    </button>
                  </div>
                  <div className=" bg-white mt-6 ">
                    <img src={pic} alt="pic" />
                    <img src={pic2} alt="pic2" />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src={pic3}
                    className="grow w-full rounded-full aspect-[1.23] max-md:max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Demo;
