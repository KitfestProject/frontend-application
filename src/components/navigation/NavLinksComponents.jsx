import { Link, useLocation } from "react-router-dom";

const NavLinksComponents = () => {
  const location = useLocation();

  return (
    <div className="hidden md:flex gap-4">
      <Link to="/">
        <div
          className={`${
            location.pathname === "/"
              ? "border-b-2 border-primary bg-lightGray"
              : ""
          } hover:bg-lightGray dark:hover:shadow-md dark:hover:bg-primaryTransparent p-2 rounded dark:hover:shadow-primaryLight`}
        >
          <h5 className="text-primary dark:text-slate-100 font-bold cursor-pointer">
            Home
          </h5>
        </div>
      </Link>
      <Link to="/about-us">
        <div
          className={`${
            location.pathname === "/about-us"
              ? "border-b-2 border-primary bg-lightGray"
              : ""
          } hover:bg-lightGray dark:hover:shadow-md dark:hover:bg-primaryTransparent p-2 rounded dark:hover:shadow-primaryLight`}
        >
          <h5 className="text-primary dark:text-slate-100 font-bold cursor-pointer">
            About
          </h5>
        </div>
      </Link>
      <Link to="/events">
        <div
          className={`${
            location.pathname === "/events"
              ? "border-b-2 border-primary bg-lightGray"
              : ""
          } hover:bg-lightGray dark:hover:shadow-md dark:hover:bg-primaryTransparent p-2 rounded dark:hover:shadow-primaryLight`}
        >
          <h5 className="text-primary dark:text-slate-100 font-bold cursor-pointer">
            Event
          </h5>
        </div>
      </Link>
      <Link to="/artists">
        <div
          className={`${
            location.pathname === "/artists"
              ? "border-b-2 border-primary bg-lightGray"
              : ""
          } hover:bg-lightGray dark:hover:shadow-md dark:hover:bg-primaryTransparent p-2 rounded dark:hover:shadow-primaryLight`}
        >
          <h5 className="text-primary dark:text-slate-100 font-bold cursor-pointer">
            Artist
          </h5>
        </div>
      </Link>
      <Link to="/blogs">
        <div
          className={`${
            location.pathname === "/blogs"
              ? "border-b-2 border-primary bg-lightGray"
              : ""
          } hover:bg-lightGray dark:hover:shadow-md dark:hover:bg-primaryTransparent p-2 rounded dark:hover:shadow-primaryLight`}
        >
          <h5 className="text-primary dark:text-slate-100 font-bold cursor-pointer">
            Blogs
          </h5>
        </div>
      </Link>
      <Link to="/contact-us">
        <div
          className={`${
            location.pathname === "/contact-us"
              ? "border-b-2 border-primary bg-lightGray"
              : ""
          } hover:bg-lightGray dark:hover:shadow-md dark:hover:bg-primaryTransparent p-2 rounded dark:hover:shadow-primaryLight`}
        >
          <h5 className="text-primary dark:text-slate-100 font-bold cursor-pointer">
            Contact
          </h5>
        </div>
      </Link>
    </div>
  );
};

export default NavLinksComponents;
