import {
  MdEvent,
  MdPeople,
  MdMenuBook,
  MdAnalytics,
  MdDashboard,
  MdLocationOn,
  MdQueueMusic,
  MdCategory,
} from "react-icons/md";
import { FaGears, FaTicket, FaMoneyBill } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import useAuthStore from "@/store/UseAuthStore";

const DashboardSidebar = () => {
  const location = useLocation();
  const path = location.pathname;
  const { user } = useAuthStore();
  const pagePath = "/" + path.split("/")[1];

  const role = user?.role;

  const getActiveClass = (menuPath) =>
    path === menuPath || pagePath === menuPath
      ? "bg-primary/50 dark:bg-gray border-r-4 border-primary text-slate-100"
      : "border-b border-slate-200 dark:border-gray/30 text-dark";

  const menuItems = [
    { path: "/sales-dashboard", label: "Overview", icon: MdDashboard },
    { path: "/categories-create", label: "Categories", icon: MdCategory },
    { path: "/my-events", label: "Events", icon: MdEvent },
    { path: "/tickets", label: "Tickets", icon: FaTicket },
    { path: "/users", label: "Users", icon: MdPeople },
    { path: "/auth-blogs", label: "Blogs", icon: MdMenuBook },
    { path: "/venues", label: "Venues", icon: MdLocationOn },
    { path: "/my-artist-profile", label: "Artists", icon: MdQueueMusic },
    // { path: "/reports", label: "Reports & Analytics", icon: MdAnalytics },
    { path: "/transactions", label: "Transactions", icon: FaMoneyBill },
    { path: "/settings", label: "Settings", icon: FaGears },
  ];

  const filteredMenuItems =
    role === "organizer"
      ? menuItems.filter(
          (item) =>
            ![
              "/users",
              "/auth-blogs",
              "/venues",
              "/my-artist-profile",
            ].includes(item.path)
        )
      : menuItems;

  return (
    <div className="sticky top-[120px]">
      <div className="bg-[#F5F5F5] dark:bg-gray/20 rounded-md pb-3">
        {/* Title Area */}
        <div className="p-5">
          <h1 className="text-2xl font-bold text-dark dark:text-slate-100">
            Menu
          </h1>
        </div>

        {/* Menu Area */}
        <div className="dark:border dark:border-gray/30 rounded">
          <ul>
            {filteredMenuItems.map((item) => (
              <Link to={item.path} key={item.path}>
                <li
                  className={`hover:bg-primary/50 ${getActiveClass(
                    item.path
                  )} hover:text-slate-100 dark:hover:bg-gray dark:text-slate-100 hover:border-r-4 hover:border-primary py-3 px-5`}
                >
                  <span className="text-md flex items-center gap-2">
                    <item.icon className="text-primary dark:text-slate-100" />{" "}
                    {item.label}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
