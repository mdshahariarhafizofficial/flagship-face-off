import React, { useEffect, useState } from "react";
import Phone from "./Phone";
import { MdSystemSecurityUpdateWarning } from "react-icons/md";

const PhonesContainer = ({ phones }) => {
    const [phonesData, setPhonesData] = useState([]);
    const [showAll, setShowAll]= useState(false);
    useEffect(()=>{
        showAll? setPhonesData(phones): setPhonesData(phones.slice(0,6));
    },[phones, showAll])
  return (
    <div className="p-5 md:pb-24">
      <div className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
        phonesData.map((phone) => (
          <Phone key={phone.id} phone={phone}></Phone>
        ))
        }
      </div>
 
        <div className={`${ phones.length === 0 ? '': 'hidden' } flex items-center justify-center font-bold text-red-500 text-5xl text-center`}>
          <MdSystemSecurityUpdateWarning size={80}></MdSystemSecurityUpdateWarning>
          <h1>Phone Not Found!</h1>
        </div>

      <div className={`${ phones.length < 6 ? 'hidden': '' }`}>
        <button onClick={() => {
          setShowAll(!showAll)
          showAll && window.scrollTo(0, 400)
          }} className={`relative inline-block text-lg group`}>
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">{showAll? 'Show Less': 'Show More'}</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </button>
      </div>
    </div>
  );
};

export default PhonesContainer;
