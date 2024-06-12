import PropTypes from "prop-types";
import { PrimaryButton } from "@/components";

const SearchComponent = ({ classes, title, handleClick }) => {
  const renderIcon = (name, size, color) => (
    <ion-icon
      name={name}
      style={{ fontSize: size, color }}
      className="text-primary"
    ></ion-icon>
  );

  const renderInput = (placeholder, additionalClasses) => (
    <input
      readOnly
      onClick={handleClick}
      type="text"
      placeholder={placeholder}
      className={`w-full h-[50px] p-2 outline-none text-dark dark:text-dark placeholder:text-dark ${additionalClasses}`}
    />
  );

  return (
    <div className={classes} align="center">
      <div className="max-w-[800px] bg-white rounded shadow-md">
        <div className="flex items-center ml-5 cursor-pointer py-1">
          {/* Search Icon */}
          {renderIcon("search-outline", "25px", "#732e1c")}

          {/* Search Input */}
          <div className="flex-1">
            {renderInput(title, "border-r-2 border-primary")}
          </div>

          {/* Location Input */}
          <div className="w-[30%]">
            <div className="flex items-center px-5">
              {renderIcon("location-outline", "30px", "#732e1c")}
              {renderInput("Nairobi, Kenya", "p-3 rounded-md")}
            </div>
          </div>

          {/* Search Button */}
          <PrimaryButton title="Search" classes="mr-1" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

SearchComponent.propTypes = {
  classes: PropTypes.string,
  title: PropTypes.string,
  handleClick: PropTypes.func,
};

export default SearchComponent;
