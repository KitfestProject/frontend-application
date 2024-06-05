import {
  MdDashboard,
  MdEvent,
  MdPeople,
  MdMenuBook,
  MdLocationOn,
  MdQueueMusic,
  MdAnalytics,
} from "react-icons/md";
import { FaTicket } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const DashboardSidebar = () => {
  const location = useLocation();
  const path = location.pathname;

  const getActiveClass = (menuPath) =>
    path === menuPath
      ? "bg-primary/50 border-r-4 border-primary text-slate-100"
      : "border-b border-slate-200 dark:border-slate-700 text-dark";

  return (
    <div className="w-[25%] hidden md:block">
      <div className="sticky top-[120px]">
        <div className="bg-[#F5F5F5] dark:bg-darkGray rounded-md pb-3">
          {/* Title Area */}
          <div className="p-5">
            <h1 className="text-2xl font-bold text-dark dark:text-slate-100 mt-5">
              Menu
            </h1>
          </div>

          {/* Menu Area */}
          <div className="">
            <ul>
              <Link to="/sales-dashboard">
                <li
                  className={`hover:bg-primary/50 ${getActiveClass(
                    "/sales-dashboard"
                  )} hover:text-slate-100 dark:text-slate-100 hover:border-r-4 hover:border-primary py-3 px-5`}
                >
                  <span className="text-lg flex items-center gap-2">
                    <MdDashboard className="text-primary" /> Overview
                  </span>
                </li>
              </Link>

              <Link to="/my-events">
                <li
                  className={`hover:bg-primary/50 ${getActiveClass(
                    "/my-events"
                  )} hover:text-slate-100 dark:text-slate-100 hover:border-r-4 hover:border-primary py-3 px-5`}
                >
                  <span className="text-lg flex items-center gap-2">
                    <MdEvent className="text-primary" /> Events
                  </span>
                </li>
              </Link>

              <Link to="/tickets">
                <li
                  className={`hover:bg-primary/50 ${getActiveClass(
                    "/tickets"
                  )} hover:text-slate-100 dark:text-slate-100 hover:border-r-4 hover:border-primary py-3 px-5`}
                >
                  <span className="text-lg flex items-center gap-2">
                    <FaTicket className="text-primary" /> Tickets
                  </span>
                </li>
              </Link>

              <Link to="/users">
                <li
                  className={`hover:bg-primary/50 ${getActiveClass(
                    "/users"
                  )} hover:text-slate-100 dark:text-slate-100 hover:border-r-4 hover:border-primary py-3 px-5`}
                >
                  <span className="text-lg flex items-center gap-2">
                    <MdPeople className="text-primary" /> Users
                  </span>
                </li>
              </Link>

              <Link to="/auth-blogs">
                <li
                  className={`hover:bg-primary/50 ${getActiveClass(
                    "/auth-blogs"
                  )} hover:text-slate-100 dark:text-slate-100 hover:border-r-4 hover:border-primary py-3 px-5`}
                >
                  <span className="text-lg flex items-center gap-2">
                    <MdMenuBook className="text-primary" /> Blogs
                  </span>
                </li>
              </Link>

              <Link to="/venues">
                <li
                  className={`hover:bg-primary/50 ${getActiveClass(
                    "/venues"
                  )} hover:text-slate-100 dark:text-slate-100 hover:border-r-4 hover:border-primary py-3 px-5`}
                >
                  <span className="text-lg flex items-center gap-2">
                    <MdLocationOn className="text-primary" />
                    Venues
                  </span>
                </li>
              </Link>

              <Link to="/my-artist-profile">
                <li
                  className={`hover:bg-primary/50 ${getActiveClass(
                    "/my-artist-profile"
                  )} hover:text-slate-100 dark:text-slate-100 hover:border-r-4 hover:border-primary py-3 px-5`}
                >
                  <span className="text-lg flex items-center gap-2">
                    <MdQueueMusic className="text-primary" /> Artists
                  </span>
                </li>
              </Link>

              <Link to="/reports">
                <li
                  className={`py-3 px-5 hover:bg-primary/50 ${getActiveClass(
                    "/reports"
                  )} hover:text-slate-100 hover:border-r-4 hover:border-primary dark:text-slate-100 border-none`}
                >
                  <span className="text-lg flex items-center gap-2">
                    <MdAnalytics className="text-primary" /> Reports & Analytics
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
