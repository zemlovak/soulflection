import React from "react";
import { Link, Outlet } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import { Navbar } from "../components/Navbar";
import { SearchBox } from "../components/SearchBox";

import "./MainLayout.css";
import UserDropdown from "../components/UserDropdown";

export const MainLayout = () => {
  return (
    <>
      <header className="flex flex-row justify-between items-center mt-8 sm:mt-10 w-full">
        <UserDropdown/>
        <Navbar />
        <SearchBox />
      </header>
      <main className="my-8 sm:my-10">
        <Outlet />
      </main>
      <footer className="mb-4 sm:mb-6 text-center">
        &copy; 2024 | OnePixel Vision
      </footer>
    </>
  );
};

export default MainLayout;
