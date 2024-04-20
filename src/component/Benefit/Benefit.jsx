import React from "react";
import "./Benefit.css";
import pic1 from "../images/ic1.png";
import pic2 from "../images/ic2.png";
import pic3 from "../images/ic3.png";
import pic4 from "../images/ic4.png";
import pic5 from "../images/ic5.png";
import pic6 from "../images/ic6.png";

const Benefit = () => {
  return (
    <>
      <div>
        <h1 className=" text-5xl font-bold font-sans text-center text-violet-800 mt-24  max-md:max-w-full">
          Our Amazing Benefits{" "}
          <span className=" font-normal">Helpful For Your Hiring</span>
        </h1>

        <div className="mt-24 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5  max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full   hover:bg-violet-100">
              <div className="max-md:mt-10 ml-5 ">
                <img loading="lazy" src={pic1} className="w-[50px]" />
                <div className="mt-5 text-2xl font-bold text-violet-800">
                  <span className="font-bold text-violet-800">60%</span>
                  <br />
                  <span className="text-violet-800 font-normal">
                    Cost Reduce
                  </span>
                </div>
                <div className="mt-5 text-base leading-7 text-stone-900">
                  Zero overhead in the hiring process - promise! Source top
                  quality candidates for some of the best companies
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full    hover:bg-violet-100">
              <div className="flex flex-col ml-5 max-md:mt-10">
                <img
                  loading="lazy"
                  src={pic2}
                  className="aspect-square w-[50px]"
                />
                <div className="mt-5 text-2xl  text-violet-800">
                  <span className="text-violet-800 font-bold">50% Faster</span>
                  <br />
                  <span className="text-violet-800 ">Recruitment by TAT</span>
                </div>
                <div className="mt-5 text-base leading-7 text-stone-900">
                  Zero overhead in the hiring process - promise! Source top
                  quality candidates for some of the best companies
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full   hover:bg-violet-100">
              <div className="flex flex-col grow ml-5 max-md:mt-10">
                <img
                  loading="lazy"
                  src={pic3}
                  className="aspect-square w-[50px]"
                />
                <div className="mt-5 text-2xl  text-violet-800">
                  <span className="font-bold text-violet-800">
                    Highly Contextualized{" "}
                  </span>
                  <br />
                  <span className="text-violet-800 ">Interview</span>
                </div>
                <div className="mt-5 text-base leading-7 text-stone-900">
                  Al models generate highly contextualized interviews for the
                  candidates based on your Company profile, Job description and
                  Candidates CV.
                </div>
              </div>
            </div>
          </div>
          <div className="mt-11 w-full max-md:mt-10  max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full  hover:bg-violet-100">
                <div className="flex flex-col ml-5 grow max-md:mt-10">
                  <img
                    loading="lazy"
                    src={pic4}
                    className="w-12 aspect-square"
                  />
                  <div className="mt-5 text-2xl  text-violet-800">
                    <span className="font-bold text-violet-800">
                      Automated{" "}
                    </span>
                    <br />
                    <span className="text-violet-800 ">Scheduling</span>
                  </div>
                  <div className="mt-5 text-base leading-7 text-stone-900">
                    Email & WhatsApp based communication for interview
                    scheduling with automated reminders.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full   hover:bg-violet-100">
                <div className="flex flex-col ml-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src={pic5}
                    className="aspect-square w-[50px]"
                  />
                  <div className="mt-5 text-2xl text-violet-800">
                    <span className="font-bold text-violet-800">
                      AI generated Interviews
                    </span>
                    <br />
                    <span className="text-violet-800 ">On what matters</span>
                  </div>
                  <div className="mt-5 text-base leading-7 text-stone-900">
                    0 manual interventions, completely seamless experience for
                    the candidates.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full   hover:bg-violet-100">
                <div className="flex ml-5 flex-col grow max-md:mt-10">
                  <img
                    loading="lazy"
                    src={pic6}
                    className="aspect-square w-[50px]"
                  />
                  <div className="mt-5 text-2xl text-violet-800">
                    <span className="font-bold text-violet-800">in-built</span>
                    <br />
                    <span className="text-violet-800 ">ATS</span>
                  </div>
                  <div className="mt-5 text-base leading-7 text-stone-900">
                    To manage all of your candidates & Credo verified CVs.
                    Integrations with other ATS coming soon.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Benefit;
