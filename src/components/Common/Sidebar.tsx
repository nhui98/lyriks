import { logo } from "@assets/index";
import { links } from "@constants/genres";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const NavLinks = ({ handleClick }: NavLinksProps) => (
  <div className="mt-10 ">
    {links.map(({ icon: Icon, name, to }) => (
      <NavLink
        to={to}
        key={name}
        className={`my-8 flex flex-row items-center justify-start text-sm font-medium text-gray-400 hover:text-cyan-400`}
        onClick={() => handleClick && handleClick()}
      >
        <Icon className="mr-2 h-6 w-6" />
        {name}
      </NavLink>
    ))}
  </div>
);

interface NavLinksProps {
  handleClick: () => void;
}

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="hidden w-[240px] flex-col bg-[#191624] py-10 px-4 md:flex">
        <img src={logo} alt="logo" className="h-14 w-full object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>

      <div className="absolute top-6 right-3 block md:hidden">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="mr-2 h-6 w-6 text-white"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="mr-2 h-6 w-6 text-white"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>

      <div
        className={`p6 absolute top-0 z-10 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg transition-all duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <img src={logo} alt="logo" className="h-14 w-full object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
