import React from 'react'
import Logo from '../assets/Logo.svg'
import socialIcons from '../assets/socialcons.svg'

const Footer = () => {
    return (
        <div className="flex justify-between flex-col md:flex-row  items-center gap-10 md:gap-0 h-auto mt-[10vh] pt-5 py-20">
          <div className="flex justify-between flex-col  order-2 md:order-1 gap-3 md:gap-16">
            <img src={Logo} />
            <img src={socialIcons} />
          </div>
          <div className="self-start md:self-auto flex flex-col md:flex-row gap-8 md:gap-20 order-1 md:order-2">
            <div className="h-fit flex justify-normal flex-col gap-2">
              <h1 className="font-bold text-lg">About</h1>
              <p>How it works</p>
              <p>Company</p>
              <p>Help & Support</p>
            </div>
            <div className="h-fit flex justify-normal flex-col gap-2">
              <h1 className="font-bold text-lg">For creators</h1>
              <p>How can i get paid</p>
              <p>Become a creator</p>
            </div>
            <div className="h-fit flex justify-normal flex-col gap-2">
              <h1 className="font-bold text-lg">Learn</h1>
              <p>Blog</p>
              <p>Cookies policy</p>
              <p>Privacy policy</p>
            </div>
            <div className="h-32 flex justify-normal flex-col gap-2">
              <h1 className="font-bold text-lg">Support</h1>
              <p>Service status</p>
              <p>Report abuse</p>
              <p>Dispute a payment</p>
            </div>
          </div>
        </div>
    );
}

export default Footer
