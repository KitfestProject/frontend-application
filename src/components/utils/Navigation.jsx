import ModalLarge from "./ModalLarge";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MobileSearch from "../mobile/MobileSearch";
import { userInterests } from "../data/StaticData";
import { motion, useAnimation } from "framer-motion";
import useThemeStore from "../../store/UseThemeStore";
import { BiSearch, BiMenuAltRight } from "react-icons/bi";
import MobileNavigation from "../mobile/MobileNavigation";
import SelectLocation from "../authentication/SelectLocation";
import SelectInterests from "../authentication/SelectInterests";
import TopNavigationMenu from "./TopNavigationMenu";
import DarkLogo from "../../assets/kitft-logo-dark.png";
import LightLogo from "../../assets/kitft-logo-light.png";
import useAuthStore from "../../store/UseAuthStore";
import UserDropdown from "./UserDropdown";
import PrimaryButton from "./PrimaryButton";

const Navigation = () => {
  const controls = useAnimation();
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
  const { user } = useAuthStore();

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

  useEffect(() => {
    controls.start("visible");
    // console.log(userInterests);
  }, [controls]);

  const variants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
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

      <motion.div
        style={navStyle}
        variants={variants}
        initial="hidden"
        animate={controls}
      >
        <div className="bg-white dark:bg-darkGray shadow-md dark:border-b dark:border-slate-700">
          <div className="container mx-auto flex justify-between items-center py-3">
            {/* Logo */}
            <Link to="/" className="cursor-pointer">
              <img
                src={isDarkMode ? DarkLogo : LightLogo}
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
              <Link to="/about-us">
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
              <Link to="/blogs">
                <div className="hover:bg-lightGray dark:hover:shadow-md dark:hover:bg-primaryTransparent p-2 rounded dark:hover:shadow-primaryLight">
                  <h5 className="text-primary dark:text-slate-100 font-bold cursor-pointer">
                    Blogs
                  </h5>
                </div>
              </Link>
              <Link to="/contact-us">
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
            {user === null && (
              <div className="hidden md:block">
                <PrimaryButton
                  title={`Register Now!`}
                  handleClick={toggleShowModel}
                />
              </div>
            )}

            {/* User Profile */}
            {user !== null && <UserDropdown />}
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
      </motion.div>
    </>
  );
};

export default Navigation;
