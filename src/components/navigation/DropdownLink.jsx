import { Link } from "react-router-dom";

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

export default DropdownLink;
