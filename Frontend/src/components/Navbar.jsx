import React from "react";
import { useState,useEffect } from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

function Navbar() {
  const [authUser, setAuthUser] = useAuth();

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
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/course">Course</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
      <li>
        <a>About</a>
      </li>
    </>
  );
  
  // theme handling: 'light' | 'dark'
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // initialize theme from localStorage or system preference
    const saved = localStorage.getItem('theme')
    if (saved) {
      setTheme(saved)
      applyTheme(saved)
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
      applyTheme('dark')
    } else {
      setTheme('light')
      applyTheme('light')
    }
  }, [])

  function applyTheme(t) {
    const root = document.documentElement
    if (!root) return
    if (t === 'dark') {
      root.classList.add('dark')
      // daisyUI: set data-theme to dark
      try { root.setAttribute('data-theme','dark') } catch(e){}
    } else {
      root.classList.remove('dark')
      try { root.setAttribute('data-theme','light') } catch(e){}
    }
  }

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    applyTheme(next)
    try { localStorage.setItem('theme', next) } catch(e){}
  }
  return (
    <div
      className={` max-w-screen-2xl container mx-auto md:px-20 px-4 dark:text-white fixed top-0 left-0 right-0 z-50 bg-base-100 dark:bg-slate-800 border-b border-base-200 dark:border-slate-700 ${
        sticky
          ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-800 dark:text-white duration-300 transition-all ease-in-out"
          : ""
      }`}
    >
      <div className="navbar">
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems}
              <li className="mt-2 px-1">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="toggle toggle-md toggle-primary theme-controller" checked={theme==='dark'} onChange={toggleTheme} />
                  <span className="text-sm">Theme</span>
                </div>
              </li>
            </ul>
          </div>
          <a className="text-2xl font-bold cursor-pointer">epathShala</a>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          <div className="hidden md:block mr-1.5">
              <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                className="grow bg-white text-slate-900 placeholder-slate-400 border border-base-300 rounded-md px-2 py-1 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400"
                placeholder="Search"
              />
              <kbd className="kbd kbd-sm">⌘</kbd>
              <kbd className="kbd kbd-sm">K</kbd>
            </label>
          </div>
          <div className="mx-2 hidden lg:flex">
            <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="pt-1"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                type="checkbox"
                value="synthwave"
                className="toggle toggle-md toggle-primary theme-controller"
                checked={theme==='dark'}
                onChange={toggleTheme}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="pt-1"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>

          {authUser ? (<Logout />) : (  

           <div>
            <a className="btn hover:bg-slate-600"
            onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }>
                    Login
                    </a>
                    <Login/>
          </div> 
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
