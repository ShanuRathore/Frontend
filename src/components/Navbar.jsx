import React, { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import SearchContext from "../Context/searchcontext";

function Navbar() {

 const { term, setTerm } = useContext(SearchContext);
 const [inputValue, setInputValue] = useState("");
 
   const submitHandler = (e) => {
    e.preventDefault();
    setTerm(inputValue);
  }

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li className="text-orange-400 hover:text-red-700 hover:scale-110 duration-200 ">
        <Link to="/">Home</Link>
      </li>
      <li className="text-orange-400 hover:text-red-700 hover:scale-110 duration-200">
        <Link to="/about">About</Link>
      </li>
      <li className=" text-orange-400 hover:text-red-700 hover:scale-110 duration-200">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="text-orange-400 hover:text-red-700 hover:scale-110 duration-200">
        <Link to="/features">Features</Link>
      </li>
    </>
  );

  return (
    <div
      className={`max-w-screen-2xl shadow-md container mx-auto md:px-8 px-2  fixed top-0 left-0 right-0 z-50  bg-gradient-light dark:bg-gradient-dark 
                            ${sticky
          ? " sticky-navbar shadow-2xl bg-slate-700 duration-300 transition-all ease-in-out "
          : ""
        }
                        `}
    >
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-7 dark:text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="font-semibold menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-gradient-light dark:bg-gradient-dark "
            >
              {navItems}
            </ul>
          </div>
          <div className="flex  items-center gap-4">
            <img
              className="md:h-14 md:w-16 h-10 w-12 md:order-1 order-2 md:block hidden hover:scale-110 duration-300"
              src="/healthy-food.png"
              alt=""
            />
            <p className="cursor-pointer md:text-2xl text-lg md:font-bold text-orange-500  font-semibold md:order-2 order-1  w-56 hover:scale-105 hover:underline duration-200">
              Mom's Recipes
            </p>
          </div>
        </div>
        <div className="navbar-end gap-2">
          <div className="navbar-center hidden lg:flex mr-4 ">
            <ul className=" cursor-pointer gap-6 menu-horizontal px-1 font-medium text-lg ">
              {navItems}
            </ul>
          </div>

          <div className=" md:block hidden ">
            <label className=" px-4 py-1 border-orange-200 border-2 gap-2 flex items-center rounded-full">
              <form className="flex" onSubmit={submitHandler}>
                <input
                  type="text"
                  className=" flex bg-transparent outline-none text-black dark:text-white"
                  placeholder="Search"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit"><i><svg
                  type="submit"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="orange"
                  className="w-6 h-6 opacity-60"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg></i></button>

              </form>
            </label>
          </div>
          <label className="swap swap-rotate text-orange-500 hover:text-red-700 duration-200">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />

            {/* sun icon */}
            <svg
              className="swap-off fill-current md:w-7 md:h-7 w-6 h-6 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on fill-current md:w-7 md:h-7 w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          <div className="">
            <button className=" md:px-3 md:py-1 px-1 py-1 rounded-lg  text-white bg-orange-500 hover:bg-orange-700 hover:scale-105 duration-200 hover:ease-in-out md:w-20 w-20 text-lg font-bold cursor-pointer">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
