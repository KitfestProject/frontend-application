import { Link, useLocation } from "react-router-dom";
import { BecomeOrganizerButton } from "@/components";
import useAuthStore from "@/store/UseAuthStore";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import { useState } from "react";
import toast from "react-hot-toast";

const NavLink = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to}>
      <div
        className={`${
          isActive
            ? "border-b-2 border-primary bg-lightGray dark:bg-primary dark:border-none"
            : ""
        } hover:bg-lightGray dark:hover:shadow-md dark:hover:bg-primaryTransparent p-2 rounded dark:hover:shadow-primaryLight`}
      >
        <h5
          className={`text-primary dark:text-gray font-semibold cursor-pointer ${
            isActive && "dark:text-white"
          }`}
        >
          {label}
        </h5>
      </div>
    </Link>
  );
};

const AccountLinks = () => {
  const { user } = useAuthStore();
  const role = user?.role;
  const { userBecomeOrganizer } = useServerSideQueries();
  const [loading, setLoading] = useState(false);

  const handleBecomeOrganizer = async () => {
    setLoading(true);
    const { success, message } = await userBecomeOrganizer();

    if (!success) {
      setLoading(false);
      toast.error(message, {
        duration: 4000,
        position: "bottom-right",
      });
      return;
    }

    setLoading(false);
    toast.success(message, {
      duration: 4000,
      position: "bottom-right",
    });
  };

  const navItems = [
    role === "admin" || role === "organizer"
      ? { to: "/sales-dashboard", label: "Dashboard" }
      : null,
    { to: "/user-dashboard", label: "Profile" },
    { to: "/settings", label: "Settings" },
  ].filter(Boolean); // Filter out null entries

  return (
    <div className="flex-col gap-5 md:hidden">
      {navItems.map((item) => (
        <NavLink key={item.to} to={item.to} label={item.label} />
      ))}

      {/* Become Organizer Button */}
      {role === "user" ? (
        <div className="mt-5 pt-3 border-t border-gray/30">
          <BecomeOrganizerButton
            handleClick={handleBecomeOrganizer}
            loading={loading}
          />
        </div>
      ) : null}
    </div>
  );
};

export default AccountLinks;
