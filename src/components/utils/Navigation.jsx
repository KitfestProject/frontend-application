import { useEffect, useState } from "react";
import { userInterests } from "../data/StaticData";
import { motion, useAnimation } from "framer-motion";
import useAuthStore from "@/store/UseAuthStore";
import { locations } from "@/components/data/StaticData";
import {
  ModalLarge,
  UserDropdown,
  MobileSearch,
  PrimaryButton,
  SelectLocation,
  SelectInterests,
  MobileNavigation,
  TopNavigationMenu,
  NavLinksComponents,
  MobileNavIconsComponent,
  NavigationLogoComponent,
} from "@/components";

const Navigation = () => {
  const controls = useAnimation();
  const [isNavOpen, setNavOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const { user } = useAuthStore();

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
            <NavigationLogoComponent />

            {/* Links */}
            <NavLinksComponents />

            <MobileNavIconsComponent
              handleToggleSearchArea={handleToggleSearchArea}
              handleToggleNav={handleToggleNav}
            />

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
                options={locations}
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
