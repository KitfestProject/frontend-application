import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";

const CustomDropdown = ({ data, title, outline }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="custom-dropdown relative">
      <div
        className={`w-full flex text-base justify-between items-center gap-3 z-10 cursor-pointer px-4 ${
          !outline
            ? "w-full md:w-[200px] py-2 bg-primary dark:bg-darkGray text-slate-100 rounded-md"
            : "w-full md:w-[200px] py-2 border text-primary dark:bg-darkGray border-primary rounded-md"
        }`}
        onClick={toggleDropdown}
      >
        <span>{selectedOption ? selectedOption : title}</span>
        <span className="text-xs">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <ul className="dropdown-options absolute w-full md:w-[200px] bg-white dark:bg-darkGray shadow-lg rounded-md mt-2 max-h-60 overflow-auto z-20">
          {data.map((option) => (
            <li
              key={option}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

CustomDropdown.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  outline: PropTypes.bool,
};

export default CustomDropdown;
