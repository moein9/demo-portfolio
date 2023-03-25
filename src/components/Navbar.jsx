import React, { useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Navbar = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  function handleNightMode() {
    setIsNightMode(!isNightMode);
  }

  return (
    <>
      <nav
        className={`${
          isNightMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
        } flex py-10 mb-12  justify-between items-center` +" rounded-lg p-8"}
      >
        <div className="flex justify-between items-center">
          <img
            className="w-8"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
            alt="Workflow"
          />
          <h1 className="text-xl pr-4 m-4 font-extrabold font-mono">
            Moein Portfolio
          </h1>
        </div>

        <ul className="flex items-center">
          <li>
            {isNightMode ? (
              <BsFillSunFill
                className="cursor-pointer text-2xl"
                onClick={handleNightMode}
              />
            ) : (
              <BsFillMoonStarsFill
                className="cursor-pointer text-2xl"
                onClick={handleNightMode}
              />
            )}
          </li>
          <li>
            <a
              className={`${
                isNightMode
                  ? "bg-gray-800 text-white"
                  : "bg-gradient-to-r from-cyan-700 to-teal-600 text-white"
              } px-4 py-4 rounded-md ml-8`}
              href="#"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
