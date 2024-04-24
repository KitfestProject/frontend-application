import { useEffect, useState } from "react";
import UniversalButton from "./UniversalButton";
import { motion, useAnimation } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { BiBell, BiSolidUser } from "react-icons/bi";
import useThemeStore from "../../store/UseThemeStore";

const Navigation = () => {
  const navigate = useNavigate();
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const navStyle = {
    position: "sticky",
    top: 0,
    background: "#111727",
    zIndex: 100,
  };

  const controls = useAnimation();

  const isDarkMode = useThemeStore(
    (state) => state.theme === "dark" || state.theme === "system"
  );

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  useEffect(() => {
    const handleDarkModeChange = () => {
      setIsDarkMode(darkQuery.matches);
    };

    darkQuery.addEventListener("change", handleDarkModeChange);

    return () => {
      darkQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, [darkQuery]);

  useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const variants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      style={navStyle}
      variants={variants}
      initial="hidden"
      animate={controls}
    >
      <div className="mb-3 -mt-2 bg-white dark:bg-darkGray shadow-md dark:border-b dark:border-slate-500">
        <div className="container mx-auto flex justify-between items-center py-5">
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
          {/* Links */}
          <div className="flex gap-4">
            <Link to="/">
              <div className="hover:bg-lightGray dark:hover:shadow-md dark:hover:bg-primaryTransparent p-2 rounded dark:hover:shadow-primaryLight">
                <h5 className="text-primary dark:text-slate-100 font-bold cursor-pointer">
                  Home
                </h5>
              </div>
            </Link>
            <Link to="/about">
              <div className="hover:bg-lightGray dark:hover:shadow-md dark:hover:bg-primaryTransparent p-2 rounded dark:hover:shadow-primaryLight">
                <h5 className="text-primary dark:text-slate-100 font-bold cursor-pointer">
                  About
                </h5>
              </div>
            </Link>
            <Link to="/events">
              <div className="hover:bg-lightGray dark:hover:shadow-md dark:hover:bg-primaryTransparent p-2 rounded dark:hover:shadow-primaryLight">
                <h5 className="text-primary dark:text-slate-100 font-bold cursor-pointer">
                  Event
                </h5>
              </div>
            </Link>
            <Link to="/artists">
              <div className="hover:bg-lightGray dark:hover:shadow-md dark:hover:bg-primaryTransparent p-2 rounded dark:hover:shadow-primaryLight">
                <h5 className="text-primary dark:text-slate-100 font-bold cursor-pointer">
                  Artist
                </h5>
              </div>
            </Link>
            <Link to="/contact">
              <div className="hover:bg-lightGray dark:hover:shadow-md dark:hover:bg-primaryTransparent p-2 rounded dark:hover:shadow-primaryLight">
                <h5 className="text-primary dark:text-slate-100 font-bold cursor-pointer">
                  Contact
                </h5>
              </div>
            </Link>
          </div>

          {/* Action Button */}
          <div className="flex justify-center items-center gap-4">
            <div className="hover:bg-lightGray dark:hover:bg-primaryTransparent dark:hover:shadow-primaryLight hover:shadow-md p-2 rounded-full transition ease-in-out delay-150 cursor-pointer">
              <BiBell className="text-themeGray dark:text-white text-3xl hover:text-primary" />
            </div>

            <div className="hover:bg-lightGray dark:hover:bg-primaryTransparent dark:hover:shadow-primaryLight p-2 hover:shadow-md rounded-full transition ease-in-out delay-150 cursor-pointer">
              <BiSolidUser
                onClick={() => navigate("/login")}
                className="text-themeGray dark:text-white text-3xl hover:text-primary"
              />
            </div>
            <div className="cursor-pointer">
              <h5 className="text-primary dark:text-slate-100 font-bold">
                Hi, User
              </h5>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navigation;
