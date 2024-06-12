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

  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      onClick={handleShowDropdown}
      className="hidden md:flex justify-center items-center gap-2 relative"
    >
      <div className="hover:bg-lightGray dark:hover:bg-primaryTransparent dark:hover:shadow-primaryLight p-2 hover:shadow-md rounded-full transition ease-in-out delay-150 cursor-pointer">
        <img src={ProfileAvatar} className="w-[50px] rounded-full" alt="" />
      </div>

      <div className="cursor-pointer">
        <h5 className="text-primary dark:text-slate-100 font-bold">
          Hi, {user?.name || "Jane Wangui"}
        </h5>
        <p className="text-gray text-sm">
          {user?.email || "janewangui@gmail.com"}
        </p>
      </div>

      <div
        ref={userDropdownRef}
        className={`absolute top-[83px] left-5 w-full h-auto ${
          showDropdown ? "" : "hidden"
        }`}
      >
        <div className="w-full h-full bg-white dark:bg-darkGray rounded-md shadow-md dark:shadow-gray dark:shadow-sm">
          {/* Links */}
          <div className="flex flex-col">
            {/* Navigate to dashboard */}
            <Link
              to="/sales-dashboard"
              className="border-b border-gray/10 hover:bg-primary/10 p-2"
            >
              <h5 className="text-primary dark:text-slate-100 font-semibold cursor-pointer p-1">
                Dashboard
              </h5>
            </Link>

            {/* Navigate to profile */}
            <Link
              to="/user-dashboard"
              className="border-b border-gray/10 hover:bg-primary/10 p-2"
            >
              <h5 className="text-primary dark:text-slate-100 font-semibold cursor-pointer p-1">
                Profile
              </h5>
            </Link>

            {/* Navigate to settings */}
            <Link
              to="/settings"
              className="border-b border-gray/10 hover:bg-primary/10 p-2"
            >
              <h5 className="text-primary dark:text-slate-100 font-semibold cursor-pointer p-1">
                Settings
              </h5>
            </Link>

            {/* Logout */}
            <div
              onClick={() => logout()}
              className="hover:bg-primary/10 p-2 mb-2"
            >
              <h5 className="text-primary dark:text-slate-100 font-semibold cursor-pointer p-1">
                Logout
              </h5>
            </div>

            {/* Become Organizer */}
            <button className="bg-[#c4745f] hover:bg-primaryLight rounded-md text-slate-100 cursor-pointer p-2 mx-2 mb-2">
              Become Organizer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDropdown;
