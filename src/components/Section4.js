import React from 'react'
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from "../assets/icon3.svg";
import icon4 from '../assets/icon4.svg'
import Footer from './Footer';

const Section4 = () => {
    return (
      <div className="md:bg-[#F6F6F6] bg-[#FFFFFF] px-16">
        <div className="h-fit py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 ">
          <div className="w-fit">
            <h1 className="text-3xl md:text-5xl font-bold">
              Why become a<br />
              creator?
            </h1>
            <p className="Section4SmallText my-3">
              Engage with your supporter and subscriber to sell your skills,
              <br />
              knowledge and passions
            </p>
            <button className="bg-[#2B2730] text-white btn">
              Become a creator
            </button>
          </div>
          <div className="Section4_2Div">
            <div className="Section4_2TextDiv md:mb-4">
              <div className="flex justify-center">
                <img src={icon1} />
              </div>
              <h1 className="font-bold text-lg my-2">Engagement</h1>
              <p>Engage on a deeper level with the fans that matter most.</p>
            </div>
            <div className="Section4_2TextDiv ">
              <div className="flex justify-center">
                <img src={icon2} />
              </div>
              <h1 className="font-bold text-lg my-2">Autonomy </h1>
              <p>Full autonomy on when and who you talk to.</p>
            </div>
            <div className="Section4_2TextDiv ">
              <div className="flex justify-center">
                <img src={icon3} />
              </div>
              <h1 className="font-bold text-lg my-2">Free</h1>
              <p>No monthly fee or sign-up fee</p>
            </div>
            <div className="Section4_2TextDiv ">
              <div className="flex justify-center">
                <img src={icon4} />
              </div>
              <h1 className="font-bold text-lg my-2">Earn</h1>
              <p>Add a new source of income that you can control</p>
            </div>
          </div>
        </div>
        <div className=" h-fit flex justify-center">
          <div className="bg-[#2B2730] w-full text-white text-center py-10  rounded-2xl">
            <h1 className="text-xl md:text-3xl font-bold">
              Engage without limits
            </h1>
            <p className="Section4SmallText my-3">
              Join a growing community and talk directly with your favorites
              creators
            </p>
            <button className="bg-[#FFB84C] text-[#2B2730] btn">
              Get Started
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default Section4
