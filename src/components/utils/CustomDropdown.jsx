import React, { useState } from "react";

const CustomDropdown = ({ data, title, outline }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown">
      <div
        className={`dropdown-header flex text-base justify-center items-center gap-3 z-10 cursor-pointer ${
          !outline
            ? "w-[200px] h-[50px] bg-themeGray dark:bg-darkGray text-slate-100 rounded-md"
            : "w-[200px] h-[50px] border text-themeGray dark:bg-darkGray border-themeGray rounded-md"
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

export default CustomDropdown;
