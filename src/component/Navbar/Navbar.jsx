import "./Navbar.css";
import rew from "../images/logo.png";
import React from "react";

const Navbar = () => {
  // const navToggle = document.getElementById("navToggle");
  // const navbarDefault = document.getElementById("navbarDefault");

  // navToggle.addEventListener("click", () => {
  //   navbarDefault.classList.toggle();
  // });

  return (
    <div>
      <nav className="bg-transparent md:bg-white 2xl:py-[16px] py-8 fixed top-0 w-screen left-0 z-50   ease-in-out">
        <div class="flex items-center justify-between  lg:px-[2%] xl:px-[7%]">
          <div class=" md:shadow-none flex justify-between items-center px-[6%] md:px-0 w-full py-5 2xl:py-[20px] md:py-0 bg-white md:bg-transparent fixed md:relative md:w-fit top-0">
            <a href="#">
              <img className="" src={rew} alt="" />
            </a>
            <button
              data-collapse-toggle="navbar-default"
              id="navToggle"
              target="#navbar-default"
              type="button"
              class=" inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="true"
            >
              <span className="sr-only">open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            class="relative w-full opacity-100 md:block md:w-auto duration-300 z-50 mt-3 md:mt-0 md:right-auto ease-out hidden "
            id="navbarDefault"
          >
            <ul class="flex flex-col ml-4  items-center lg:gap-x-[20px] md:gap-x-[12px] gap-y-0 md:p-0 mt-[20px] border border-gray-100 rounded-lg md:flex-row md:mt-0 md:border-0 bg-[#f9f1ff] md:bg-transparent font-gilroy-Regular 2xl:text-[20px] lg:text-[14px] xl:text-[16px] md:text-[12px] text-[16px] font-normal py-9 md:py-0 text-center">
              <li class="border-b-[2px]  w-screen md:w-fit md:border-none border-[#fffefe] pb-4 md:pb-0">
                <a
                  href="#"
                  aria-current="page"
                  class="block py-2 px-3 font-sans text-gray-400 rounded hover:text-violet-800  hover:underline font-bold md:hover:bg-transparent md:hover:text-violet-800 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Talent Finder
                </a>
              </li>
              <li class="border-b-[2px] w-screen md:w-fit md:border-none border-[#fffefe] pb-4 md:pb-0">
                <a
                  href="#"
                  class="block py-2 px-3  font-sans text-gray-400 rounded  hover:text-violet-800  hover:underline font-bold md:hover:bg-transparent md:hover:text-violet-800 md:p-0  md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  For Recruiters
                </a>
              </li>
              <li class="border-b-[2px] w-screen md:w-fit md:border-none border-[#fffefe] pb-4 md:pb-0">
                <a
                  href="#"
                  class="block py-2 px-3 font-sans text-gray-400 rounded  hover:text-violet-800  hover:underline font-bold md:hover:bg-transparent md:hover:text-violet-800 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  For Employers
                </a>
              </li>
              <li class="border-b-[2px] w-screen md:w-fit md:border-none border-[#fffefe] pb-4 md:pb-0">
                <a
                  href="#"
                  class="block py-2 px-3 font-sans text-gray-400 rounded  hover:text-violet-800  hover:underline font-bold md:hover:bg-transparent md:hover:text-violet-800 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About Us
                </a>
              </li>
              <li class="border-b-[2px] w-screen md:w-fit md:border-none border-[#fffefe] pb-4 md:pb-0">
                <a
                  href="#"
                  class="block py-2 px-3 font-sans text-gray-400 rounded  hover:text-violet-800  hover:underline font-bold md:hover:bg-transparent md:hover:text-violet-800 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Company
                </a>
              </li>
              <div class="flex md:flex-row flex-col justify-center md:gap-2 lg:gap-2 xl:gap-4 lg:pl-[0px] xl:pl-[20px] md:pl-[10px] pl-0 mt-1 md:mt-0">
                <button class="border-b-[2px] w-screen md:w-fit md:border-none border-[#fffefe] mbmd:mb-7 pb-4 md:pb-0 ">
                  <a
                    href="#"
                    class="text-violet-800 m-3  border-violet-800 hover:text-white hover:bg-violet-800 border-2  focus:ring-4 focus:outline-none  font-sans rounded-xl text-lg px-8 py-2.5   text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Log In
                  </a>
                </button>
                <button class="border-b-[2px] w-screen md:w-fit md:border-none border-[#fffefe] pb-4 md:pb-0">
                  <a
                    href="#"
                    class="text-white m-3  bg-violet-800 border-2 border-violet-800 hover:bg-white hover:text-violet-800 hover:border-violet-800  focus:outline-none font-sans rounded-xl  text-lg px-8 py-2.5  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Get Started
                  </a>
                </button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
