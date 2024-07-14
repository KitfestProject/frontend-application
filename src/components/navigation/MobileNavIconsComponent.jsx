import PropTypes from "prop-types";
import { BiMenuAltRight, BiSearch } from "react-icons/bi";
import { ThemeSwitcher } from "@/components";

const MobileNavIconsComponent = ({
  handleToggleSearchArea,
  handleToggleNav,
}) => {
  return (
    <div className="md:hidden flex gap-3 items-center">
      {/* Theme Switcher */}
      <ThemeSwitcher />

      {/* Search */}
      <div className="items-center gap-4">
        <BiSearch
          onClick={handleToggleSearchArea}
          className="text-gray text-3xl dark:text-slate-100"
        />
      </div>

      {/* Mobile Homager */}
      <div className="rounded">
        <BiMenuAltRight
          onClick={handleToggleNav}
          className="text-gray text-3xl dark:text-slate-100"
        />
      </div>
    </div>
  );
};

MobileNavIconsComponent.propTypes = {
  handleToggleSearchArea: PropTypes.func.isRequired,
  handleToggleNav: PropTypes.func.isRequired,
};

export default MobileNavIconsComponent;
