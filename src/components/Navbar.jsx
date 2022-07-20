import React, { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggleNav = () => {
    setShow(!show);
  };
  return (
    <nav className="navbar w-full flex md:justify-center  md:items-center px-2 md:px-6 relative">
      <ul className="hidden md:flex justify-around content-center ">
        <NavItem to="#home">Home</NavItem>
        <NavItem to="#about">About</NavItem>
        <NavItem to="#news">News</NavItem>
        <NavItem to="#favourite">Favourite Games</NavItem>
        <NavItem to="#contact">Contact</NavItem>
      </ul>
      <div
        className={show ? "mobile-nav is-active relative" : "mobile-nav"}
      >
        <div className="flex justify-start">
          <button className="hamburger-menu" onClick={toggleNav}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </button>
        </div>
        <div
          className={
            " h-0 dropdown transition-all transform duration-1000  " +
            (show ? "h-auto " : " ")
          }
        >
          {show && <NavMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const NavMenu = () => {
  return (
    <ul className=" ">
      <NavItem to="#home">Home</NavItem>
      <NavItem to="#about">About</NavItem>
      <NavItem to="#news">News</NavItem>
      <NavItem to="#favourite">Favourite Games</NavItem>
      <NavItem to="#contact">Contact</NavItem>
    </ul>
  );
};

const NavItem = ({ to, ...props }) => {
  return (
    <li className="py-4 px-8  text-white cursor-pointer font-semibold md:font-normal  hover:text-gray-500 text-center">
      <a href={to} className="text-center">
        {props.children}
      </a>
    </li>
  );
};
