import React from "react";

const PrimaryButton = ({ title, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="btn bg-primary text-slate-100 hover:bg-darkGray hover:border-primary py-3 px-8 rounded cursor-pointer transition ease-in-out delay-150"
    >
      <p className="text-[18px] font-normal tracking-tighter">{title}</p>
    </button>
  );
};

export default PrimaryButton;
