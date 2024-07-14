import React from "react";

const UniversalOutlineButton = ({ title, handleClick, classes }) => {
  return (
    <button
      onClick={handleClick}
      className={`border-solid border-2 text-primary hover:text-white border-primary bg-slate-100 hover:bg-primary py-2 px-8 rounded cursor-pointer dark:text-dark transition ease-in-out delay-150 ${classes} text-[18px] font-normal tracking-tighter`}
    >
      {title}
    </button>
  );
};

export default UniversalOutlineButton;
