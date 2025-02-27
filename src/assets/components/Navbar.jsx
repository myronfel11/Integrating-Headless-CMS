import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    if (!nav) {
      setNav(true);
    }
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-emerald-400">Myron</h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "text-emerald-400" : "text-white"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink
            to="/company"
            className={({ isActive }) =>
              isActive ? "text-emerald-400" : "text-white"
            }
          >
            Company
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink
            to="/resources"
            className={({ isActive }) =>
              isActive ? "text-emerald-400" : "text-white"
            }
          >
            Resources
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-emerald-400" : "text-white"
            }
          >
            Products
          </NavLink>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-900 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-emerald-400">Myron</h1>
        <ul className="pt-24 uppercase">
          <li className="p-4 border-b border-gray-600">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "text-emerald-400" : "text-white"
              }
              onClick={closeNav}
            >
              Home
            </NavLink>
          </li>
          <li className="p-4 border-b border-gray-600">
            <NavLink
              to="/company"
              className={({ isActive }) =>
                isActive ? "text-emerald-400" : "text-white"
              }
              onClick={closeNav}
            >
              Company
            </NavLink>
          </li>
          <li className="p-4 border-b border-gray-600">
            <NavLink
              to="/resources"
              className={({ isActive }) =>
                isActive ? "text-emerald-400" : "text-white"
              }
              onClick={closeNav}
            >
              Resources
            </NavLink>
          </li>
          <li className="p-4 border-b border-gray-600">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "text-emerald-400" : "text-white"
              }
              onClick={closeNav}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
