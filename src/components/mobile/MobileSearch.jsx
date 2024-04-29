import React, { useState } from "react";
import BottomDrawer from "../utils/BottomDrawer";
import { Link } from "react-router-dom";
import useThemeStore from "../../store/UseThemeStore";
import { BiSearchAlt2 } from "react-icons/bi";

const MobileSearch = ({ handleToggleSearchArea, isSearchOpen }) => {
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const isDarkMode = useThemeStore(
    (state) =>
      state.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
  );
  const drawerHeight = "100vh";

  return (
    <div>
      <BottomDrawer
        isOpen={isSearchOpen}
        onClose={handleToggleSearchArea}
        drawerHeight={drawerHeight}
      >
        <div className="p-3 flex justify-between items-center border-b border-gray">
          {/* Logo */}
          <Link to="/" className="cursor-pointer">
            <img
              src={
                isDarkMode
                  ? "/images/kitft-logo-dark.png"
                  : "/images/kitft-logo-light.png"
              }
              alt="logo"
              className="w-[150px] h-[50px] object-contain"
            />
          </Link>

          {/* Action Button */}
          <div className="flex items-center gap-3"></div>
        </div>

        {/* Search Input */}
        <div className="m-3 p-1 rounded-full bg-[#f1f5f9] dark:bg-darkGray dark:text-slate-100 dark:border-slate-500 border border-gray flex gap-1 items-center">
          <BiSearchAlt2 className="text-gray text-3xl ml-2" />
          <input
            type="text"
            placeholder="Search for events..."
            className="w-full p-3 font-light bg-[#f1f5f9] dark:bg-darkGray rounded-full dark:text-slate-100 dark:border-slate-500 border-none focus:outline-none"
          />
        </div>
      </BottomDrawer>
    </div>
  );
};

export default MobileSearch;
