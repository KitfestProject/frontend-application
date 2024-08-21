import { useState } from "react";
import useAuthStore from "@/store/UseAuthStore";
import { BiCustomize, BiMenuAltRight } from "react-icons/bi";
import { userInterests, locations } from "@/components/data/StaticData";
import {
  ThemeSwitcher,
  ModalLarge,
  UserDropdown,
  MobileSearch,
  AdminNavDrawer,
  SelectLocation,
  SelectInterests,
  MobileNavigation,
  TopNavigationMenu,
  NavigationLogoComponent,
} from "@/components";

const Navigation = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isAdminNavOpen, setAdminNavOpen] = useState(false);
  const { user } = useAuthStore();

  const navStyle = {
    position: "sticky",
    top: 0,
    background: "#111727",
    zIndex: 100,
  };

  const handleToggleAdminNav = () => setAdminNavOpen(!isAdminNavOpen);

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
        <div className="bg-white dark:bg-darkGray shadow-md dark:border-b dark:border-gray/10">
          <div className="container mx-auto flex justify-between items-center py-3">
            {/* Logo */}
            <NavigationLogoComponent />

            {/* Mobile Elements */}
            <div className="md:hidden flex gap-3 items-center">
              {/* Theme Switcher */}
              <ThemeSwitcher />

              {/* Mobile Homager */}
              <div className="rounded">
                <BiMenuAltRight
                  onClick={handleToggleNav}
                  className="text-gray text-3xl dark:text-slate-100"
                />
              </div>

              <div className="rounded">
                <BiCustomize
                  onClick={handleToggleAdminNav}
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

        {/* Admin Mobile Navigation Drawer  */}
        <AdminNavDrawer
          isNavOpen={isAdminNavOpen}
          handleToggleNav={handleToggleAdminNav}
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
      </div>
    </>
  );
};

export default Navigation;
