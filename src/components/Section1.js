import React from 'react'
import oneone from "../assets/oneone.svg"


const Section1 = () => {
  return (
    <section className="mx-16 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-2">
        <h1 className="text-3xl md:text-5xl font-bold w-fit">
          Learn from your
          <br /> favorite creators
          <br /> about
          <span className="text-[#FFB84C]"> fantasy reports</span>
        </h1>
        <div className="mt-12 md:mt-7">
          <img src={oneone} className="h-28 w-28 md:h-52 md:w-52" />
        </div>
      </div>
    </section>
  );
}

export default Section1
