import PropTypes from "prop-types";
import { PrimaryButton } from "@/components";

const SearchComponent = ({ classes, title, handleClick }) => {
  return (
    <div className={`${classes}`} align="center">
      <div className="max-w-[600px] bg-white rounded shadow-md">
        <div className="flex items-center ml-5 cursor-pointer py-1">
          {/* Search Icons */}
          <ion-icon
            name="search-outline"
            style={{ fontSize: "25px", color: "#732e1c" }}
            className="text-primary"
          ></ion-icon>

          {/* Search Input */}
          <div className="flex-1">
            <input
              onClick={handleClick}
              readOnly
              type="text"
              placeholder={title}
              className="w-full h-[50px] p-2 outline-none text-dark dark:text-dark border-r-2 border-primary"
            />
          </div>

          {/* Location Input */}
          <div className="w-1/4">
            <div className="flex items-center pl-2">
              <ion-icon
                name="location-outline"
                style={{ fontSize: "30px", color: "#732e1c" }}
                className="text-primary"
              ></ion-icon>
              <input
                readOnly
                onClick={handleClick}
                type="text"
                placeholder="Nairobi, Kenya"
                className="w-full h-[50px] p-3 rounded-md outline-none text-dark dark:text-dark"
              />
            </div>
          </div>

          {/* Search Button */}
          <PrimaryButton
            title="Search"
            classes={"mr-1"}
            onClick={handleClick}
          />
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
