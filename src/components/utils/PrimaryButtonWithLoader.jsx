import React from "react";

const PrimaryButtonWithLoader = ({
  title,
  handleClick,
  classes,
  loading,
  icon = null,
}) => {
  return (
    <button
      onClick={handleClick}
      className={`btn bg-primary text-slate-100 hover:bg-darkGray dark:text-white dark:bg-darkGray hover:border-primary py-2 px-5 md:px-8 rounded cursor-pointer transition ease-in-out delay-150 text-[18px] font-normal tracking-tighter ${classes}`}
    >
      {loading ? (
        <>{icon}</>
      ) : (
        <>
          {title} <span className="">{icon}</span>
        </>
      )}
    </button>
  );
};

export default PrimaryButtonWithLoader;
