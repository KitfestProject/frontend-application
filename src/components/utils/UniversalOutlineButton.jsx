import React from "react";

const UniversalOutlineButton = ({ title, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="border-solid border-2 text-primary hover:text-white border-primary bg-slate-100 hover:bg-primary py-2 px-8 rounded cursor-pointer transition ease-in-out delay-150"
    >
      <p className="text-[18px] font-normal tracking-tighter">{title}</p>
    </button>
  );
};

export default UniversalOutlineButton;
