import React from 'react'
import person1 from "../assets/person1.svg";
import person3 from "../assets/person3.svg";
import person2 from "../assets/person2.svg";
import yellowArrow from '../assets/yellowArrow.svg'

const Section3 = () => {
  return (
    <div className="Section3">
      <h1 className="text-3xl md:text-5xl font-bold">
        <span className="text-[#FFB84C]">Get direct</span>
        <br /> knowledge and insight.
      </h1>
      <div className="imgDivSection3">
        <div className="imgCardSection3">
          <img src={person1} className="w-full" />
        </div>
        <div className="imgCardSection3">
          <img src={person2} className="w-full" />
        </div>
        <div className="imgCardSection3">
          <img src={person3} className="w-full" />
        </div>
      </div>
      <div className="SectionTextMainDiv">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="text-center">
            <p className="textDivSection3">300</p>
            <p>Creator</p>
          </div>
          <div className="text-center">
            <p className="textDivSection3">14.4k</p>
            <p>Creator</p>
          </div>
          <div className="text-center">
            <p className="textDivSection3">9.11k</p>
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
