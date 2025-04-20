import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { MdBookmarkAdd } from "react-icons/md";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const menu = (
    <>
      <li>
        <NavLink to="/" className={
            ({isActive}) => isActive? "text-blue-600 border-b-2 rounded-none": ''
        }>Home</NavLink>
      </li>
      <li>
        <NavLink to="/about" className={
            ({isActive}) => isActive? "text-blue-600 border-b-2 rounded-none": ''
        }>About</NavLink>
      </li>
      <li>
        <NavLink to="/cart" className={
            ({isActive}) => isActive? "text-blue-600 border-b-2 rounded-none": ''
        }>
          <FaCartPlus size={20} />
        </NavLink>
      </li>
      <li>
        <NavLink to="/favorite" className={
            ({isActive}) => isActive? "text-blue-600 border-b-2 rounded-none": ''
        }>
          <MdBookmarkAdd size={20} />
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar max-w-[1688px] mx-auto bg-base-100 p-0">
      {/* NavBar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg font-semibold"
          >
            {
                menu
            }
          </ul>
        </div>
        <Link to="/" className="text-2xl font-bold">
          FlagshipFaceOff
        </Link>
      </div>

      {/* Navbar End */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold flex gap-1">
            {
                menu
            }
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
