import React from "react";
import bannerImg from "../../assets/banner.png";

const Hero = () => {
  return (
    <div className="md:p-24">
      <img src={bannerImg} className="w-full mx-auto md:max-w-md" alt="" />
      <div className="text-center space-y-4">
        <h1 className="text-7xl font-thin">Browse, Search, View, Buy</h1>
        <p className="text-gray-600">
          Best place to browse, search, view details and purchase of top
          flagship phones <br/> of the current time - FlagshipFaceOff
        </p>
        <form className="flex flex-col md:flex-row items-center justify-center gap-3">
          <input className="w-2/3 h-14 px-5 bg-white shadow border-2 border-gray-300 rounded focus:outline-0 focus:shadow-md" type="text" placeholder="Search Mobile By Name" />
          <button class="relative inline-block text-lg group">
            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span class="relative">Search</span>
            </span>
            <span
              class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
