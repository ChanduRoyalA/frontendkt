import React from 'react'
import person1 from "../assets/person1.svg";
import person3 from "../assets/person3.svg";
import person2 from "../assets/person2.svg";
import yellowArrow from '../assets/yellowArrow.svg'

const Section3 = () => {
  return (
    <div className="bg-[#2B2730] text-white px-16 mt-[10%] md:mt-[10%] lg:mt-[1%]">
      <h1 className="text-3xl md:text-5xl font-bold">
        <span className="text-[#FFB84C]">Get direct</span>
        <br /> knowledge and insight.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center h-auto md:h-1/2 mt-10 gap-10 md:px-20">
        <div className="w-screen flex justify-center  md:w-fit md:h-fit px-10 md:px-0">
          <img src={person1} className="h-full" />
        </div>
        <div className=" w-screen flex justify-center md:w-fit md:h-fit px-10  md:px-0">
          <img src={person2} className="h-full" />
        </div>
        <div className="w-screen flex justify-center md:w-fit md:h-fit px-10  md:px-0">
          <img src={person3} className="h-full" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center px-10 gap-10 md:gap-0 py-20">
        <div className="flex flex-col md:flex-row  gap-10">
          <div className="text-center">
            <p className="text-[#FFB84C] text-2xl md:text-4xl font-bold">300</p>
            <p>Creator</p>
          </div>
          <div className="text-center">
            <p className="text-[#FFB84C] text-2xl md:text-4xl font-bold">
              14.4k
            </p>
            <p>Creator</p>
          </div>
          <div className="text-center">
            <p className="text-[#FFB84C] text-2xl md:text-4xl font-bold">
              9.11k
            </p>
            <p>Creator</p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-row">
          <p>
            Explore the
            <br className="md:flex hidden" /> marketplace
          </p>
          <img src={yellowArrow} height={40} width={40} />
        </div>
      </div>
    </div>
  );
}

export default Section3
