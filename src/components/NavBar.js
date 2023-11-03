import Logo from '../assets/Logo.svg'
import menuIcon from "../assets/menuIcon.svg";

const NavBar = () => {
  return (
    <nav className="flex mx-16 justify-between items-center pt-10">
      <div className="flex gap-8 items-center">
        <img src={Logo} />
        <div className="md:flex gap-8 hidden font-medium">
          <p>Explore</p>
          <p>Company</p>
          <p>Support</p>
        </div>
      </div>
      <div className="md:flex hidden gap-4 items-center">
        <p className=" font-medium">Become a member</p>
        <button className="bg-[#2B2730] text-white rounded-full py-2 px-6">
          Sign in
        </button>
      </div>
      <div className="md:hidden">
        <img src={menuIcon} />
      </div>
    </nav>
  );
}

export default NavBar
