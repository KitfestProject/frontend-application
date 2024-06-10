import { Link } from "react-router-dom";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { userInterests } from "@/components/data/StaticData";
import useThemeStore from "@/store/UseThemeStore";
import {
  ModalLarge,
  UserDropdown,
  MobileSearch,
  SelectLocation,
  SelectInterests,
  MobileNavigation,
  TopNavigationMenu,
} from "@/components";

const Navigation = () => {
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const isDarkMode = useThemeStore(
    (state) =>
      state.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
  );
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
            <UserDropdown />
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
