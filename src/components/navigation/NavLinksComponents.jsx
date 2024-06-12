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
        <h5 className="text-primary dark:text-slate-100 font-bold cursor-pointer">
          {label}
        </h5>
      </div>
    </Link>
  );
};

const NavLinksComponents = () => {
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About" },
    { to: "/events", label: "Event" },
    { to: "/artists", label: "Artist" },
    { to: "/blogs", label: "Blogs" },
    { to: "/contact-us", label: "Contact" },
  ];

  return (
    <div className="hidden md:flex gap-4">
      {navItems.map((item) => (
        <NavLink key={item.to} to={item.to} label={item.label} />
      ))}
    </div>
  );
};

export default NavLinksComponents;
