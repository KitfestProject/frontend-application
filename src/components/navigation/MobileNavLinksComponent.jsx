import { Link, useLocation } from "react-router-dom";

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

const MobileNavLinksComponent = () => {
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About" },
    { to: "/events", label: "Event" },
    { to: "/artists", label: "Artist" },
    { to: "/blogs", label: "Blogs" },
    { to: "/site-venues", label: "Venues" },
    { to: "/contact-us", label: "Contact" },
  ];

  return (
    <div className="flex-col gap-5 md:hidden">
      {navItems.map((item) => (
        <NavLink key={item.to} to={item.to} label={item.label} />
      ))}
    </div>
  );
};

export default MobileNavLinksComponent;
