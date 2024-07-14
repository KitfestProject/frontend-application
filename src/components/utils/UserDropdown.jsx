import useAuthStore from "@/store/UseAuthStore";
import { useRef, useEffect, useState } from "react";
import { DropdownMenu, ThemeSwitcher, ProfileSection } from "@/components";

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
    <>
      <div className="hidden md:flex items-center">
        {/* Theme Changer */}
        <ThemeSwitcher />

        <div
          ref={userDropdownRef}
          onClick={toggleDropdown}
          className="hidden md:flex justify-center items-center gap-1 relative w-[280px]"
        >
          <ProfileSection user={user} />
          <DropdownMenu showDropdown={showDropdown} logout={logout} />
        </div>
      </div>
    </>
  );
};

export default UserDropdown;
