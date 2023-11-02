import React from 'react'
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from "../assets/icon3.svg";
import icon4 from '../assets/icon4.svg'

const Section4 = () => {
    return (
      <>
        <div className="h-fit  px-16 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
          <div className="w-fit">
            <h1 className="text-3xl md:text-5xl font-bold">
              Why become a <br />
              creator?
            </h1>
            <p className="text-[15px] my-3">
              Engage with your supporter and subscriber to sell your skills,
              <br />
              knowledge and passions
            </p>
            <button className="bg-[#2B2730] rounded-full text-white py-2 px-6">
              Become a creator
            </button>
          </div>
          <div className="flex flex-col flex-nowrap md:flex-row md:flex-wrap gap-5 md:gap-0 items-center md:items-start">
            <div className="w-full text-center md:w-1/2 h-1/2 px-4 md:mb-2">
              <div className="flex justify-center">
                <img src={icon1} />
              </div>
              <h1 className="font-bold text-lg my-2">Engagement</h1>
              <p>Engage on a deeper level with the fans that matter most.</p>
            </div>
            <div className="w-full text-center md:w-1/2 h-1/2 px-4 ">
              <div className="flex justify-center">
                <img src={icon2} />
              </div>
              <h1 className="font-bold text-lg my-2">Autonomy </h1>
              <p>Full autonomy on when and who you talk to.</p>
            </div>
            <div className="w-full text-center md:w-1/2 h-1/2 px-4 ">
              <div className="flex justify-center">
                <img src={icon3} />
              </div>
              <h1 className="font-bold text-lg my-2">Free</h1>
              <p>No monthly fee or sign-up fee</p>
            </div>
            <div className="w-full text-center md:w-1/2 h-1/2 px-4 ">
              <div className="flex justify-center">
                <img src={icon4} />
              </div>
              <h1 className="font-bold text-lg my-2">Earn</h1>
              <p>Add a new source of income that you can control</p>
            </div>
          </div>
        </div>
        <div className=" h-fit flex justify-center">
          <div className="bg-[#2B2730] w-1/2 text-white text-center py-10  rounded-2xl">
            <h1 className="text-3xl font-bold">Engage without limits</h1>
            <p className="my-3 text-[15px]">
              Join a growing community and talk directly with your favorites
              creators
            </p>
            <button className="bg-[#FFB84C] rounded-full text-[#2B2730] py-2 px-6">
              Get Started
            </button>
          </div>
            </div>
            <div className='h-[50vh]'>

            </div>
      </>
    );
}

export default Section4
