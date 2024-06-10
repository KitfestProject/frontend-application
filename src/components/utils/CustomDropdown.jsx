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
    <div ref={dropdownRef} className="custom-dropdown">
      <div
        className={`flex text-base justify-center items-center gap-3 z-10 cursor-pointer ${
          !outline
            ? "w-full md:w-[200px] py-2 bg-primary dark:bg-darkGray text-slate-100 rounded-md"
            : "w-full md:w-[200px] py-2 border text-primary dark:bg-darkGray border-primary rounded-md"
        }`}
        onClick={toggleDropdown}
      >
        <span>{selectedOption ? selectedOption : title}</span>
        <span className="text-xs">{isOpen ? " ▲" : " ▼"}</span>
      </div>
      {isOpen && (
        <ul className="dropdown-options">
          {data.map((option) => (
            <li key={option} onClick={() => handleOptionClick(option)}>
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
