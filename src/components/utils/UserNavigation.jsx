import ModalLarge from "./ModalLarge";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import MobileSearch from "../mobile/MobileSearch";
import { userInterests } from "../data/StaticData";
import useThemeStore from "../../store/UseThemeStore";
import { BiMenuAltRight } from "react-icons/bi";
import { FaBell } from "react-icons/fa6";

import MobileNavigation from "../mobile/MobileNavigation";
import SelectLocation from "../authentication/SelectLocation";
import SelectInterests from "../authentication/SelectInterests";
import TopNavigationMenu from "./TopNavigationMenu";
import ProfileAvatar from "../../assets/profile-avatar.jpeg";

const Navigation = () => {
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const isDarkMode = useThemeStore(
    (state) =>
      state.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
  );
  const location = useLocation();
  const [isNavOpen, setNavOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const options = [
    {
      id: 1,
      name: "Kenya",
    },
    {
      id: 2,
      name: "Uganda",
    },
    {
      id: 3,
      name: "Tanzania",
    },
    {
      id: 4,
      name: "Rwanda",
    },
    {
      id: 5,
      name: "Burundi",
    },
    {
      id: 6,
      name: "South Sudan",
    },
    {
      id: 7,
      name: "Ethiopia",
    },
    {
      id: 8,
      name: "Somalia",
    },
  ];

  const navStyle = {
    position: "sticky",
    top: 0,
    background: "#111727",
    zIndex: 100,
  };

  const handleToggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const handleToggleSearchArea = () => {
    setSearchOpen(!isSearchOpen);
  };

  const toggleShowModel = () => {
    setShowModel(!showModel);
  };

  const handleChangeStep = () => {
    if (currentStep === 1) {
      setCurrentStep(currentStep + 1);
    } else {
      toggleShowModel();
    }
  };

  return (
    <>
      <TopNavigationMenu />

      <div style={navStyle}>
        <div className="bg-white dark:bg-darkGray shadow-md dark:border-b dark:border-slate-700">
          <div className="container mx-auto flex justify-between items-center py-3">
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

            {/* Account Links */}
            <div className="hidden md:flex gap-4">
              <Link to="/user-dashboard">
                <div
                  className={`hover:bg-lightGray ${
                    location.pathname === "/user-dashboard"
                      ? "bg-slate-200 dark:bg-primary"
                      : ""
                  } dark:hover:shadow-md dark:hover:bg-primaryTransparent p-2 rounded dark:hover:shadow-primaryLight`}
                >
                  <h5 className="text-primary dark:text-slate-100 font-bold cursor-pointer">
                    Dashboard
                  </h5>
                </div>
              </Link>
              <Link to="/my-events">
                <div
                  className={`hover:bg-lightGray ${
                    location.pathname === "/my-events" ||
                    location.pathname === "/create-event"
                      ? "bg-slate-200 dark:bg-primary"
                      : ""
                  } dark:hover:shadow-md dark:hover:bg-primaryTransparent p-2 rounded dark:hover:shadow-primaryLight`}
                >
                  <h5 className="text-primary dark:text-slate-100 font-bold cursor-pointer">
                    My Events
                  </h5>
                </div>
              </Link>
              <Link to="/my-artist-profile">
                <div
                  className={`hover:bg-lightGray ${
                    location.pathname === "/my-artist-profile"
                      ? "bg-slate-200 dark:bg-primary"
                      : ""
                  } dark:hover:shadow-md dark:hover:bg-primaryTransparent p-2 rounded dark:hover:shadow-primaryLight`}
                >
                  <h5 className="text-primary dark:text-slate-100 font-bold cursor-pointer">
                    My Artist Profile
                  </h5>
                </div>
              </Link>
            </div>

            {/* Mobile Elements */}
            <div className="md:hidden flex gap-3 items-center">
              {/* Mobile Homager */}
              <div className="rounded">
                <BiMenuAltRight
                  onClick={handleToggleNav}
                  className="text-gray text-3xl dark:text-slate-100"
                />
              </div>
            </div>

            {/* User Profile */}
            <div className="hidden md:flex justify-center items-center gap-2">
              <div className="hover:bg-lightGray dark:hover:bg-primaryTransparent dark:hover:shadow-primaryLight hover:shadow-md p-2 rounded-full transition ease-in-out delay-150 cursor-pointer">
                <FaBell className="text-themeGray dark:text-white text-2xl hover:text-primary" />
              </div>

              <div className="hover:bg-lightGray dark:hover:bg-primaryTransparent dark:hover:shadow-primaryLight p-2 hover:shadow-md rounded-full transition ease-in-out delay-150 cursor-pointer">
                <img
                  src={ProfileAvatar}
                  className="w-[50px] rounded-full"
                  alt=""
                />
              </div>

              <div className="cursor-pointer">
                <h5 className="text-primary dark:text-slate-100 font-bold">
                  Jane Wangui
                </h5>
                <p className="text-gray text-sm">janewangui@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <MobileNavigation
          isNavOpen={isNavOpen}
          handleToggleNav={handleToggleNav}
        />

        {/* Mobile Search */}
        <MobileSearch
          handleToggleSearchArea={handleToggleSearchArea}
          isSearchOpen={isSearchOpen}
        />

        {/* Register Model */}
        {showModel && (
          <ModalLarge onClose={toggleShowModel}>
            {currentStep === 1 && (
              <SelectInterests
                userInterests={userInterests}
                handleChangeStep={handleChangeStep}
              />
            )}

            {currentStep === 2 && (
              <SelectLocation
                options={options}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                handleChangeStep={handleChangeStep}
              />
            )}
          </ModalLarge>
        )}
      </div>
    </>
  );
};

export default Navigation;
