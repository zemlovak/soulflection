import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router";

import "./MainLayout.css";

export const MainLayout = () => {
  return (
    <>
      <header className="flex flex-row justify-between items-center mx-10 mt-8 sm:mt-10 w-full">
        <Link to={"/"}><img src="src/assets/icons/user-circle.svg" /></Link>
        <nav className="w-full h-6">
          <ul className="flex justify-around">
            <Link to={'/journal'}>
              <li className="ml-8 mr-2 hover:font-semibold">journaling</li>
            </Link>
            <Link>
              <li className="ml-2 mr-2 hover:font-semibold">meditation</li>
            </Link>
            <Link>
              <li className="ml-2 mr-2 hover:font-semibold">breathwork</li>
            </Link>
            <Link>
              <li className="ml-2 mr-8 hover:font-semibold">yoga</li>
            </Link>
          </ul>
        </nav>
        <div className="search-box min-w-16 max-w-32 w-full min-h-8 bg-cyan-dark opacity-25 rounded-2xl"></div>
      </header>
      <main className="flex flex-col justify-start items-center my-8 sm:my-10">
        <Outlet />
      </main>
      <footer className="mb-4 sm:mb-6 ">&copy; 2024 | OnePixel Vision</footer>
    </>
  );
};

export default MainLayout;
