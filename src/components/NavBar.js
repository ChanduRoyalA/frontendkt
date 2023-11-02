import { PiDotsNineLight } from "react-icons/pi";

const NavBar = () => {
  return (
    <nav className="flex mx-16 justify-between items-center pt-10">
      <div className="flex gap-8 items-center">
        <h1 className=" text-2xl font-bold">
          yodora<span className="text-[#FFB84C]">.</span>
        </h1>
        <div className="md:flex gap-8 hidden font-medium">
          <p>Explore</p>
          <p>Company</p>
          <p>Support</p>
        </div>
      </div>
      <div className="md:flex hidden gap-4 items-center">
        <p>Become a member</p>
        <button className="bg-[#2B2730] rounded-full text-white py-2 px-6">
          Sign in
        </button>
      </div>
      <div className="md:hidden">
        <PiDotsNineLight
          style={{ fontSize: "35px" }}
        />
      </div>
    </nav>
  );
}

export default NavBar
