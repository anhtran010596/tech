import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const navLinks = [
    {
      name: "Home",
      path: "#",
    },
    {
      name: "Games",
      path: "#",
    },
    {
      name: "News",
      path: "#",
    },
    {
      name: "Math",
      path: "#",
    },
    {
      name: "Company",
      path: "#",
    },
    {
      name: "Events",
      path: "#",
    },
    {
      name: "Partners",
      path: "#",
    },
  ];
  const [menuIcon, setMenuIcon] = useState(false);
  const handleMenuIcon = () => setMenuIcon((prevState) => !prevState);
  return (
    <div className="w-full h-full flex justify-end items-center">
      <ul className="md:flex items-center gap-5 hidden">
        {navLinks.map((nav, index) => (
          <li
            key={index}
            className="group text-white/50 lg:text-[18px] text-[16px] hover:text-white uppercase transition-all duration-100 relative"
          >
            <a href={nav.path}>{nav.name}</a>
            <div className="hidden group-hover:block w-full h-[2px] bg-white absolute -bottom-[38px] left-0"></div>
          </li>
        ))}
      </ul>

      <div className="flex md:hidden justify-end items-center">
        <div className="z-30" onClick={handleMenuIcon}>
          {menuIcon ? (
            <IoClose
              size={35}
              className="text-white/50 hover:text-white cursor-pointer"
            />
          ) : (
            <LuMenu
              size={25}
              className="text-white/50 hover:text-white cursor-pointer"
            />
          )}
        </div>
      </div>

      <div
        className={`w-full h-screen absolute top-0 left-0 bg-slate-800 justify-center items-center ${
          menuIcon ? "flex" : "hidden"
        }`}
      >
        <ul className="text-center">
          {navLinks.map((nav, index) => (
            <li
              key={index}
              className="text-white/50 text-[18px] hover:text-white uppercase py-4 text-2xl transition-all duration-100"
              onClick={handleMenuIcon}
            >
              <a href={nav.path}>{nav.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
