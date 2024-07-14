import { DropdownLinks } from "@/components";

const DropdownMenu = ({ showDropdown, logout }) => {
  const dropdownClasses = `absolute top-[75px] left-5 w-full h-auto ${
    showDropdown ? "" : "hidden"
  }`;
  return (
    <div className={dropdownClasses}>
      <div className="w-full h-full bg-white dark:bg-darkGray rounded-md shadow-md dark:shadow-gray dark:shadow-sm">
        <DropdownLinks logout={logout} />
      </div>
    </div>
  );
};

export default DropdownMenu;
