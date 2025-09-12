import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

const NavBar = () => {
  const [user, setuser] = useState("");
  const ulItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About </NavLink>
      </li>
      <li>
        <NavLink to="/allproduct">All Product </NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contacat </NavLink>
      </li>
      
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm ">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {ulItems}
          </ul>
        </div>
        <a className="text-xl hover:bg-primary hover:text-white rounded-3xl ">Ecommerch site</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{ulItems}</ul>
      </div>
      <div className="navbar-end flex ">
        <div class="flex gap-2">
          <form className="flex items-center border rounded-3xl px-3 ">
            <input
              type="text"
              placeholder="search what you need"
              name="inp"
              required
              className="focus:outline-none "
            />

            <button
              type="submit"
              className="hover:bg-gray-200 mr-[-11px]  px-5 rounded-3xl"
            >
              {" "}
              <IoIosSearch size={30} />
            </button>
          </form>
          {user ? (
            <div class="dropdown dropdown-end">
              <div
                tabindex="0"
                role="button"
                class="btn btn-ghost btn-circle avatar"
              >
                <div class="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabindex="0"
                class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a class="justify-between">
                    Profile
                    <span class="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={()=>setuser(false)}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <h1 className="btn btn-primary text-lg  rounded-3xl" onClick={()=>setuser(true)}>create an account</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
