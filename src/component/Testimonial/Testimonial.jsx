import "./Testimonial.css";

import React from "react";
import person1 from "../images/testimonial/person1.png";
import person2 from "../images/testimonial/person2.png";
import person3 from "../images/testimonial/person3.png";

const Testimonial = () => {
  return (
    <>
      <div className="bg-white justify-evenly pb-32">
        <div className="content-center  ml-5  ">
          <h1 className="  text-5xl font-bold font-sans md:ml-28  text-violet-800 mt-16 max-md:max-w-full">
            Customer
            <span className=" font-sans text-black font-normal">
              {" "}
              Testimonials
            </span>
          </h1>

          <p className=" max-sm:ml-5  text-lg font-normal md:ml-28 mt-2">
            What others has say About Us
          </p>
        </div>
        <div className=" flex justify-evenly mt-20 md:mx-24  ">
          <div className="flex max-md:flex-wrap justify-evenly  ">
            <div className="bg-violet-100 hover:bg-white shadow-md shadow-violet-100 hover:shadow-none  m-2   max-md:m-5 rounded-xl">
              <div className=" m-5">
                {" "}
                <p className="text-lg ">
                  “Rework has been a great way to make the hiring process easier
                  and faster. We've been able to save money and time, and the
                  recruiters have been able to find the best employers leads.
                  Highly recommend! “
                </p>
              </div>
              <div className=" m-5 justify-normal flex items-center">
                {" "}
                <div className="h-12   w-12 ">
                  <img className=" h-12   w-12 " src={person1} alt="person" />
                </div>
                <div className="ml-5  text-3xl text-violet-800">
                  <p> Theresa Webb</p>
                  <span className=" text-lg font-normal text-gray-500 ">
                    HR Manager, Amazon
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-evenly m-2  max-md:m-5 ">
              <div className="bg-violet-100 hover:bg-white shadow-md shadow-violet-100 hover:shadow-none  rounded-xl">
                <div className=" m-5">
                  {" "}
                  <p className="text-lg ">
                    “Rework has been a great way to make the hiring process
                    easier and faster. We've been able to save money and time,
                    and the recruiters have been able to find the best employers
                    leads. Highly recommend! ““ Rework has been a great way to
                    make the hiring process easier and faster. Highly recommend!
                    “
                  </p>
                </div>
                <div className=" m-5 justify-normal flex items-center">
                  {" "}
                  <div className="h-12   w-12 ">
                    <img className=" h-12   w-12 " src={person2} alt="person" />
                  </div>
                  <div className="ml-5  text-3xl text-violet-800">
                    <p> Savannah Nguyen</p>
                    <span className=" text-lg font-normal text-gray-500 ">
                      HR Manager, Microsoft
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-evenly  m-2  max-md:m-5 ">
              <div className="bg-violet-100 hover:bg-white shadow-md shadow-violet-100 hover:shadow-none   rounded-xl ">
                <div className="m-5">
                  {" "}
                  <p className="text-lg ">
                    “Rework has been a great way to make the hiring process
                    easier and faster. We've been able to save money and time,
                    and the recruiters have been able to find the best employers
                    leads. Highly recommend! “
                  </p>
                </div>
                <div className=" m-5 justify-normal flex items-center">
                  {" "}
                  <div className="h-12   w-12 ">
                    <img className=" h-12   w-12 " src={person1} alt="person" />
                  </div>
                  <div className="ml-5  text-3xl text-violet-800">
                    <p> Theresa Webb</p>
                    <span className=" text-lg font-normal text-gray-500 ">
                      HR Manager, Amazon
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex max-md:flex-wrap justify-evenly md:mx-24  ">
          <div className="flex justify-evenly m-2  max-md:m-5">
            <div className="bg-violet-100 hover:bg-white shadow-md shadow-violet-100 hover:shadow-none   rounded-xl ">
              <div className=" m-5">
                {" "}
                <p className="text-lg ">
                  “Rework has been a great way to make the hiring process easier
                  and faster. We've been able to save money and time, and the
                  recruiters have been able to find the best employers leads.
                  Highly recommend! ““ Rework has been a great way to make the
                  hiring process easier and faster. Highly recommend! “
                </p>
              </div>
              <div className=" m-5 justify-normal flex items-center">
                {" "}
                <div className="h-12   w-12 ">
                  <img className=" h-12   w-12 " src={person3} alt="person" />
                </div>
                <div className="ml-5  text-3xl text-violet-800">
                  <p> Ronald Richards</p>
                  <span className=" text-lg font-normal text-gray-500 ">
                    HR Manager, Google
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-violet-100 hover:bg-white shadow-md shadow-violet-100 hover:shadow-none  m-2   max-md:m-5 rounded-xl ">
            <div className=" m-5">
              {" "}
              <p className="text-lg ">
                “Rework has been a great way to make the hiring process easier
                and faster. We've been able to save money and time, and the
                recruiters have been able to find the best employers leads.
                Highly recommend! “
              </p>
            </div>
            <div className=" m-5 justify-normal flex items-center">
                {" "}
                <div className="h-12   w-12 ">
                  <img className=" h-12   w-12 " src={person3} alt="person" />
                </div>
                <div className="ml-5  text-3xl text-violet-800">
                  <p> Ronald Richards</p>
                  <span className=" text-lg font-normal text-gray-500 ">
                    HR Manager, Google
                  </span>
                </div>
              </div>
          </div>
          <div className="flex justify-evenly m-2  max-md:m-5">
            <div className="bg-violet-100 hover:bg-white shadow-md shadow-violet-100 hover:shadow-none  rounded-xl ">
              <div className=" m-5">
                {" "}
                <p className="text-lg ">
                  “Rework has been a great way to make the hiring process easier
                  and faster. We've been able to save money and time, and the
                  recruiters have been able to find the best employers leads.
                  Highly recommend! ““ Rework has been a great way to make the
                  hiring process easier and faster. Highly recommend! “
                </p>
              </div>
              <div className=" m-5 justify-normal flex items-center">
                {" "}
                <div className="h-12   w-12 ">
                  <img className=" h-12   w-12 " src={person3} alt="person" />
                </div>
                <div className="ml-5  text-3xl text-violet-800">
                  <p> Ronald Richards</p>
                  <span className=" text-lg font-normal text-gray-500 ">
                    HR Manager, Google
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
