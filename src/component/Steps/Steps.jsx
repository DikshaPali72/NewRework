import "./Steps.css";
import step from "../images/Step1.png";
import step2 from "../images/Step2.png";
import step3 from "../images/Steps3.png";

const Steps = () => {
  return (
    <>
      <div className="content-center  mb-20">
        <h1 className=" text-5xl font-bold font-sans text-center text-violet-800 mt-24  max-md:max-w-full">
          How Our System <span className=" font-normal">Operates</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center ">
        <img
          className="my-8 mx-0 border-2 hover:border-violet-400"
          src={step}
          alt="step1"
        />
        <img
          className="   border-2 hover:border-violet-400"
          src={step2}
          alt="step2"
        />
        <img
          className="my-8 mx-0 border-2 hover:border-violet-400 "
          src={step3}
          alt="step3"
        />
      </div>

      <div className=" text-5xl font-bold font-sans text-center text-violet-800  max-md:max-w-full">
        <button className=" px-8 py-4 mt-14 text-lg font-medium text-center text-violet-800 rounded-xl border-2 border-violet-800 border-solid  bg-neutral-100  hover:text-white hover:bg-violet-800 max-md:px-5 max-md:mt-10">
          Get Started
        </button>
      </div>
    </>
  );
};

export default Steps;
