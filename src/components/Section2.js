import React from 'react'
import mainImg from '../assets/mainImg.svg'
import Section3 from './Section3';
import Section4 from './Section4';
const Section2 = () => {
    return (
      <>
        <div className="flex flex-col h-[100vh] bg-[#FFFFFF] md:bg-[#F6F6F6] relative">
          <div className="self-center absolute h-[50vh] top-[0%] px-5 z-10">
            <img src={mainImg} className="h-full" />
          </div>
          <div className="flex-grow bg-[#2B2730] relative top-[25%] pt-[25%]">
            <Section3 />
            <Section4/>
          </div>
        </div>
      </>
    );
}

export default Section2


    //  <>
    //     <div className="flex flex-col h-[100vh] bg-[#FFFFFF] md:bg-[#F6F6F6] relative">
    //       <div className="self-center absolute h-1/2 top-[25%] px-5">
    //         <img src={mainImg} className="h-full" />
    //       </div>
    //       <div className="h-1/2"></div>
    //       <div className="h-1/2 bg-[#2B2730]"></div>
    //     </div>
    //   </>

