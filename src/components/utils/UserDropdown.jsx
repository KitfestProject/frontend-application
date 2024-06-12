import { Link } from "react-router-dom";
import ProfileAvatar from "@/assets/profile-avatar.jpeg";
import useAuthStore from "@/store/UseAuthStore";
import { useRef, useEffect, useState } from "react";

const UserDropdown = () => {
  const { user, logout } = useAuthStore();
  const [showDropdown, setShowDropdown] = useState(false);
  const userDropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      userDropdownRef.current &&
      !userDropdownRef.current.contains(event.target)
    ) {
      setShowDropdown(false);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={userDropdownRef}
      onClick={toggleDropdown}
      className="hidden md:flex justify-center items-center gap-2 relative w-[280px]"
    >
      <ProfileSection user={user} />
      <DropdownMenu showDropdown={showDropdown} logout={logout} />
    </div>
  );
};

const ProfileSection = ({ user }) => (
  <>
    <div className="hover:bg-lightGray dark:hover:bg-gray/10 dark:hover:shadow-primaryLight p-2 hover:shadow-md rounded-full transition ease-in-out delay-150 cursor-pointer">
      <img
        src={ProfileAvatar}
        className="w-[50px] rounded-full"
        alt="Profile Avatar"
      />
    </div>
    <div className="cursor-pointer">
      <h5 className="text-primary dark:text-slate-100 font-bold">
        Hi, {user?.name || "Jane Wangui"}
      </h5>
      <p className="text-gray text-sm">
        {user?.email || "janewangui@gmail.com"}
      </p>
    </div>
  </>
);

const DropdownMenu = ({ showDropdown, logout }) => {
  const dropdownClasses = `absolute top-[83px] left-5 w-full h-auto ${
    showDropdown ? "" : "hidden"
  }`;
  return (
    <div className={dropdownClasses}>
      <div className="w-full h-full bg-white dark:bg-darkGray rounded-md shadow-md dark:shadow-gray dark:shadow-sm">
        <DropdownLinks logout={logout} />
      </div>
    </div>
  );
};

const DropdownLinks = ({ logout }) => (
  <div className="flex flex-col">
    <DropdownLink to="/sales-dashboard" label="Dashboard" />
    <DropdownLink to="/user-dashboard" label="Profile" />
    <DropdownLink to="/settings" label="Settings" />
    <LogoutLink logout={logout} />
    <BecomeOrganizerButton />
  </div>
);

const DropdownLink = ({ to, label }) => (
  <Link
    to={to}
    className="border-b border-gray/10 hover:bg-primary/10 dark:hover:bg-gray/20 p-2"
  >
    <h5 className="text-primary dark:text-slate-100 font-semibold cursor-pointer p-1">
      {label}
    </h5>
  </Link>
);

const LogoutLink = ({ logout }) => (
  <div
    onClick={logout}
    className="hover:bg-primary/10 dark:hover:bg-gray/20 p-2 mb-2"
  >
    <h5 className="text-primary dark:text-slate-100 font-semibold cursor-pointer p-1">
      Logout
    </h5>
  </div>
);

const BecomeOrganizerButton = () => (
  <button className="bg-[#c4745f] hover:bg-primaryLight rounded-md text-slate-100 cursor-pointer p-2 mx-2 mb-2">
    Become Organizer
  </button>
);

export default UserDropdown;
