import React from "react";
import { Link } from "react-router-dom";
import Logo from "../image/Logo.svg";

export const NavigationBar = () => {
  return (
    <nav className="flex justify-between px-8 md:px-16 py-4 border-b-2 border-slate-300">
      <div className="flex">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex">
        <Link
          to={"/arsip"}
          className="border-solid border-4 rounded-full px-5 p-1 font-bold text-md hover:bg-green-500 hover:border-green-500 hover:text-white"
        >
          Arsip
        </Link>
      </div>
    </nav>
  );
};
