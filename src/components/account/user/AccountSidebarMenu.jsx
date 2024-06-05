import React from "react";
import {
  FaBell,
  FaLock,
  FaHeart,
  FaPencil,
  FaTicket,
  FaCircleUser,
  FaRightFromBracket,
} from "react-icons/fa6";
import ProfileAvatar from "../../../assets/profile-avatar.jpeg";
import { Link, useLocation } from "react-router-dom";

const AccountSidebarMenu = () => {
  const location = useLocation();

  return (
    <div className="w-[25%] hidden md:block">
      <div className="sticky top-[120px]">
        <h1 className="text-2xl font-bold text-dark dark:text-slate-100">
          My Profile
        </h1>

        <div className="bg-[#F5F5F5] dark:bg-darkGray rounded-md pb-5">
          {/* Account Profile */}
          <div className="flex justify-center my-5">
            <div className="flex flex-col gap-3 items-center justify-center mt-10">
              {/* Profile Avatar */}
              <img
                src={ProfileAvatar}
                alt="profile"
                className="w-[130px] h-[130px] rounded-full object-cover mt-5"
              />

              <div className="">
                <h3 className="text-2xl text-center font-semibold text-primary dark:text-slate-100">
                  Jane Wangui
                </h3>

                <p className="text-sm text-center font-light text-dark dark:text-slate-200 mb-3">
                  janewangui@gmail.com
                </p>

                <div className="flex gap-5 justify-between">
                  {/* Total Purchases */}
                  <div className="flex gap-2 px-4 py-2 items-center bg-light dark:bg-dark rounded-md">
                    <h4 className="text-sm text-primary dark:text-slate-100">
                      10
                    </h4>
                    <p className="text-sm text-primary dark:text-slate-200">
                      Purchases
                    </p>
                  </div>

                  {/* Total Reviews */}
                  <div className="flex gap-2 px-4 py-2 items-center bg-light dark:bg-dark rounded-md">
                    <h4 className="text-sm text-primary dark:text-slate-100">
                      5
                    </h4>
                    <p className="text-sm text-primary dark:text-slate-200">
                      Reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Menu */}
          <div className="dark:bg-darkGray rounded-md dark:border dark:border-slate-700">

            {/* Menu list */}
            <ul className="">
              <Link to="/user-dashboard">
                <li
                  className={`flex items-center gap-3 py-3 px-5 ${
                    location.pathname === "/user-dashboard"
                      ? "account-nav-active"
                      : ""
                  } cursor-pointer`}
                >
                  <span className="text-primary dark:text-slate-100">
                    <FaTicket className="text-xl inline mr-2" />
                    My Tickets
                  </span>
                </li>
              </Link>
              <Link to="/change-profile-photo">
                <li
                  className={`flex items-center gap-3 py-3 px-5 ${
                    location.pathname === "/change-profile-photo"
                      ? "account-nav-active"
                      : ""
                  } account-nav cursor-pointer`}
                >
                  <span className="text-primary dark:text-slate-100">
                    <FaCircleUser className="text-xl inline mr-2" />
                    Change Photo
                  </span>
                </li>
              </Link>
              <Link to="/notifications">
                <li
                  className={`flex items-center gap-3 ${
                    location.pathname === "/notifications"
                      ? "account-nav-active"
                      : ""
                  } py-3 px-5 account-nav cursor-pointer`}
                >
                  <span className="text-primary dark:text-slate-100">
                    <FaBell className="text-xl inline mr-2" />
                    Notifications
                  </span>
                </li>
              </Link>
              <Link to="/update-profile">
                <li
                  className={`flex items-center gap-3 ${
                    location.pathname === "/update-profile"
                      ? "account-nav-active"
                      : ""
                  } py-3 px-5 account-nav cursor-pointer`}
                >
                  <span className="text-primary dark:text-slate-100">
                    <FaPencil className="text-xl inline mr-2" />
                    Update Profile
                  </span>
                </li>
              </Link>
              <Link to="/my-wishlist">
                <li
                  className={`flex items-center gap-3 ${
                    location.pathname === "/my-wishlist"
                      ? "account-nav-active"
                      : ""
                  } py-3 px-5 account-nav cursor-pointer`}
                >
                  <span className="text-primary dark:text-slate-100">
                    <FaHeart className="text-xl inline mr-2" />
                    My Wishlist
                  </span>
                </li>
              </Link>
              <Link to="/change-password">
                <li
                  className={`flex items-center gap-3 ${
                    location.pathname === "/change-password"
                      ? "account-nav-active"
                      : ""
                  } py-3 px-5 account-nav cursor-pointer`}
                >
                  <span className="text-primary dark:text-slate-100">
                    <FaLock className="text-xl inline mr-2" />
                    Change Password
                  </span>
                </li>
              </Link>
              <li className="flex items-center gap-3 py-3 px-5 account-nav cursor-pointer">
                <span className="text-primary dark:text-slate-100">
                  <FaRightFromBracket className="text-xl inline mr-2" />
                  Logout
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSidebarMenu;
