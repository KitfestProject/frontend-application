import PropTypes from "prop-types";
import useThemeStore from "@/store/UseThemeStore";
import { Link, useNavigate } from "react-router-dom";
import {
  PrimaryButton,
  RightDrawer,
  MobileNavLinksComponent,
} from "@/components";
import ProfileAvatar from "@/assets/profile-avatar.jpeg";
import { BiLogOut } from "react-icons/bi";
import useAuthStore from "@/store/UseAuthStore";

const MobileNavigation = ({ isNavOpen, handleToggleNav }) => {
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const isDarkMode = useThemeStore(
    (state) =>
      state.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
  );
  const drawerWidth = "100%";
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  return (
    <div>
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
              <MobileNavLinksComponent />
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
            <div className="items-center gap-2 border-t border-gray p-3 w-full">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-2">
                  <img
                    src={ProfileAvatar}
                    alt={"Profile Avatar"}
                    className="w-[50px] h-[50px] object-cover rounded-full"
                  />
                  <div className="">
                    <p className="text-base font-semibold dark:text-slate-100">
                      Hi, {user?.name || "Jane Doe"}
                    </p>
                    <p className="text-sm dark:text-slate-100">
                      {user?.email || "janedoe@gmail.com"}
                    </p>
                  </div>
                </div>

                {/* Logout Button */}
                <div
                  onClick={logout}
                  className="rounded bg-red-500 p-2 shadow-md"
                >
                  <BiLogOut className="text-slate-200 text-3xl" />
                </div>
              </div>
            </div>
          )}
        </div>
      </RightDrawer>
    </div>
  );
};

MobileNavigation.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  handleToggleNav: PropTypes.func.isRequired,
};

export default MobileNavigation;
