import PropTypes from "prop-types";
import useThemeStore from "@/store/UseThemeStore";
import useAuthStore from "@/store/UseAuthStore";
import { Link, useNavigate } from "react-router-dom";
import {
  RightDrawer,
  AccountLinks,
  PrimaryButton,
  MobileNavLinksComponent,
  LoggedInUserProfileMobile,
} from "@/components";

const MobileNavigation = ({ isNavOpen, handleToggleNav }) => {
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const isDarkMode = useThemeStore(
    (state) =>
      state.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
  );
  const drawerWidth = "100%";
  const navigate = useNavigate();
  const { user } = useAuthStore();

  return (
    <div>
      <RightDrawer
        isOpen={isNavOpen}
        onClose={handleToggleNav}
        drawerWidth={drawerWidth}
      >
        <div className="p-3 flex flex-col justify-between h-full">
          {/* Logo */}
          <div className="border-b border-gray/30 pb-3">
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

            {/* Site Menus */}
            <div className="h-[100vh-180px] overflow-y-scroll">
              {/* Links */}
              <div className="mt-5">
                {/* Website Links */}
                <div className="border-b border-gray/30 pb-3 mb-5">
                  <h5 className="font-semibold text-xl text-dark dark:text-slate-100 tracking-tighter">
                    Website Links
                  </h5>
                </div>

                <MobileNavLinksComponent />

                {/* User Account Links */}
                {user !== null && (
                  <>
                    <div className="border-b border-gray/30 pb-3 mb-5 mt-5">
                      <h5 className="font-semibold text-xl text-dark dark:text-slate-100 tracking-tighter">
                        My Account
                      </h5>
                    </div>

                    <AccountLinks />
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Action Button */}
          {user === null && (
            <div className="mt-5 flex gap-3 items-center border-t border-gray pt-3">
              <PrimaryButton
                title="Sign In"
                handleClick={() => navigate("/auth-login")}
                classes="w-full flex justify-center items-center"
              />
            </div>
          )}

          {/* Profile Section */}
          {user !== null && (
            <div className="items-center gap-2 border-t border-gray/30 p-3 w-full">
              <LoggedInUserProfileMobile />
            </div>
          )}
        </div>
      </RightDrawer>
    </div>
  );
};

MobileNavigation.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
};

export default MobileNavigation;
