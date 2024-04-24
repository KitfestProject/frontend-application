import React from "react";

const UniversalButton = ({ title, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="btn bg-secondary hover:text-slate-100 text-slate-100 hover:bg-darkGray hover:border-secondary py-2 px-8 rounded cursor-pointer transition ease-in-out delay-150"
    >
      <p className="text-[18px] font-normal tracking-tighter">{title}</p>
    </button>
  );
};

export default UniversalButton;
