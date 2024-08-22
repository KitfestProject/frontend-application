import useThemeStore from "@/store/UseThemeStore";
import useAuthStore from "@/store/UseAuthStore";
import { Link, useNavigate } from "react-router-dom";
import {
  RightDrawer,
  DashboardSidebar,
  AccountSidebarMenu,
  LoggedInUserProfileMobile,
} from "@/components";

const AdminNavDrawer = ({ isNavOpen, handleToggleNav }) => {
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const isDarkMode = useThemeStore(
    (state) =>
      state.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
  );
  const drawerWidth = "100%";
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const role = user?.role;

  return (
    <RightDrawer
      isOpen={isNavOpen}
      onClose={handleToggleNav}
      drawerWidth={drawerWidth}
    >
      <div className="flex flex-col justify-between h-full relative overflow-y-scroll">
        {/* Logo */}
        <div className="">
          <div className="border-b border-gray/30 p-3 mb-5 sticky top-0 w-full z-[99999] bg-white dark:bg-darkGray">
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

          {/* Admin & User Accounts Section */}
          <div className="mt-5 p-3">
            {/* User Account Links */}
            <div className="">
              <AccountSidebarMenu />
            </div>

            {/* Admin Links */}
            {
              // Only show the admin icon if the user is an admin
              role === "admin" ||
                (role === "organizer" ? (
                  <div className="mt-10">
                    <h5 className="font-semibold text-xl text-dark dark:text-slate-100 tracking-tighter border-b border-gray/30 pb-3 mb-5">
                      Admin Dashboard Menu
                    </h5>
                    <DashboardSidebar />
                  </div>
                ) : null)
            }
          </div>
        </div>
      </div>
    </RightDrawer>
  );
};

export default AdminNavDrawer;
