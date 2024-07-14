import { Link, useLocation } from "react-router-dom";
import { BecomeOrganizerButton } from "@/components";

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
  const navItems = [
    { to: "/sales-dashboard", label: "Dashboard" },
    { to: "/user-dashboard", label: "Profile" },
    { to: "/settings", label: "Settings" },
  ];

  return (
    <div className="flex-col gap-5 md:hidden">
      {navItems.map((item) => (
        <NavLink key={item.to} to={item.to} label={item.label} />
      ))}

      {/* Become Organizer Button */}
      <div className="mt-5 pt-3 border-t border-gray/30">
        <BecomeOrganizerButton />
      </div>
    </div>
  );
};

export default AccountLinks;
