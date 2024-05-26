import React from "react";
import PrimaryButton from "./PrimaryButton";

const SearchComponent = ({ classes, title }) => {
  return (
    <div className={`${classes}`} align="center">
      <div className="max-w-[500px] bg-white rounded shadow-md">
        <div className="flex items-center ml-5">
          {/* Search Icons */}
          <ion-icon
            name="search-outline"
            style={{ fontSize: "25px", color: "#732e1c" }}
            className="text-primary"
          ></ion-icon>

          {/* Search Input border-r-2 border-primary */}
          <div className="flex-1">
            <input
              type="text"
              placeholder={title}
              className="w-full h-[50px] p-2 rounded-md outline-none text-dark dark:text-dark"
            />
          </div>

          {/* Location Input */}
          {/* <div className="flex-1">
            <div className="flex items-center gap-2 pl-2">
              <ion-icon
                name="location-outline"
                style={{ fontSize: "30px", color: "#732e1c" }}
                className="text-primary"
              ></ion-icon>
              <input
                type="text"
                placeholder="Nairobi, Ke"
                className="w-full h-[50px] p-3 rounded-md outline-none text-dark dark:text-dark"
              />
            </div>
          </div> */}

          {/* Search Button */}
          <PrimaryButton title="Search" classes={"mr-1"} />
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
