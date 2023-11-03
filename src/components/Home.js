import React from 'react'
import NavBar from './NavBar';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';

const Home = () => {
    return (
      <div className="h-auto font-[poppins] md:bg-[#F6F6F6] text-[#2B2730]">
        <NavBar />
        <Section1 />
        <Section2 />
      </div>
    );
}

export default Home
