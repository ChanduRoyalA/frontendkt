import React from 'react'
import oneone from "../assets/oneone.svg"


const Section1 = () => {
  return (
    <section className="mx-16 my-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <h1 className="text-4xl md:text-5xl font-bold w-fit">
          Learn from your
          <br/> favorite creators
          <br /> about
          <span className="text-[#FFB84C]"> fantasy reports</span>
        </h1>
        <div className="mt-8 md:mt-0 self-end md:self-auto">
          <img src={oneone} className="h-28 w-28 md:h-52 md:w-52" />
        </div>
      </div>
    </section>
  );
}

export default Section1
