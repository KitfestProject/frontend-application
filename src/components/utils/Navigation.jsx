import { useEffect, useState } from "react";
import UniversalButton from "./UniversalButton";
import { motion, useAnimation } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  BiBell,
  BiLogOut,
  BiSearch,
  BiSolidUser,
  BiSearchAlt2,
  BiMenuAltRight,
} from "react-icons/bi";
import useThemeStore from "../../store/UseThemeStore";
import RightDrawer from "../../components/utils/RightDrawer";
import BottomDrawer from "../../components/utils/BottomDrawer";
import PrimaryButton from "./PrimaryButton";
import ProfileAvatar from "../../../public/images/profile-avatar.jpeg";

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

  const [isNavOpen, setNavOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const drawerWidth = "100%";
  const drawerHeight = "100vh";

  const handleToggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const handleToggleSearchArea = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <motion.div
      style={navStyle}
      variants={variants}
      initial="hidden"
      animate={controls}
    >
      <div className="bg-white dark:bg-darkGray shadow-md dark:border-b dark:border-slate-500">
        <div className="container mx-auto flex justify-between items-center py-3 mb:py-5">
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
          <div className="hidden md:flex gap-4">
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

          <div className="md:hidden flex gap-3 items-center">
            {/* Search */}
            <div className="items-center gap-4">
              <BiSearch
                onClick={handleToggleSearchArea}
                className="text-gray text-3xl dark:text-slate-100"
              />
            </div>

            {/* Mobile Homager */}
            <div className="rounded">
              <BiMenuAltRight
                onClick={handleToggleNav}
                className="text-gray text-3xl dark:text-slate-100"
              />
            </div>
          </div>

          {/* Action Button */}
          <div className="hidden md:flex justify-center items-center gap-4">
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

      {/* Mobile Navigation Drawer */}
      <RightDrawer
        isOpen={isNavOpen}
        onClose={handleToggleNav}
        drawerWidth={drawerWidth}
      >
        <div className="p-3 flex flex-col justify-between h-full">
          <div className="">
            {/* Logo */}
            <div className="border-b border-gray pb-3">
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
            </div>

            {/* Links */}
            <div className="mt-5">
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
          </div>

          {/* Action Button */}
          <div className="mt-5 hidden gap-3 items-center border-t border-gray pt-3">
            <PrimaryButton
              title="Login"
              handleClick={() => navigate("/login")}
              classes="w-full"
            />
            <UniversalButton
              title="Sign Up"
              handleClick={() => navigate("/signup")}
              classes="w-full mt-3"
            />
          </div>

          <div className="flex items-center gap-2 border-t border-gray pt-3 w-full">
            <img
              src={ProfileAvatar}
              alt={"Profile Avatar"}
              className="w-[50px] h-[50px] object-cover rounded-full"
            />
            <div className="flex justify-between items-center w-full">
              <div className="">
                <p className="text-base font-semibold dark:text-slate-100">
                  Dennis Otieno
                </p>
                <p className="text-sm dark:text-slate-100">
                  otienodennis29@gmail.com
                </p>
              </div>

              {/* Logout Button */}
              <div className="rounded bg-red-500 p-2 shadow-md">
                <BiLogOut className="text-slate-200 text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </RightDrawer>

      {/* Search Drawer */}
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
    </motion.div>
  );
};

export default Navigation;
