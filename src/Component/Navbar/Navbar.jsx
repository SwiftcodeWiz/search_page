import React, { useState } from 'react';
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" pt-2">
      <div className="  flex justify-between items-center">
        <h1 className="font-bold text-2xl text-orange-500">List</h1>
        <div className="md:flex md:w-1/2 md:justify-center">
        <svg className="absolute  h-5 w-6 text-gray-400 hover:text-gray-500 s-icon" xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
    <input type="text" placeholder="Find (almost) anything" className="border border-gray-200 rounded-2xl py-1 px-2 pl-10 w-96 outline-none search" />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} `}>
          <ul className="md:flex items-center space-x-4 ">
            <li>
              <a href="#" className="text-blue-700  hover:text-gray-300">
                Item 1
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700  hover:text-gray-300">
                Item 2
              </a>
            </li>
            <li>
              <button className="hover:bg-blue-700 border text-gray-900 rounded-3xl bg-gray-100 py-2 px-4">
              Login or Sign up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
