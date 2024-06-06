import React from "react";

const OverViewTitle = ({ title, breadcrumbTitle }) => {
  return (
    <div className="w-full md:w-[75%] px-5">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-3 text-sm">
        <p className="text-gray tracking-tight">Account</p>
        <span className="text-gray-500">/</span>
        <p className="text-gray-500 tracking-tight">{breadcrumbTitle}</p>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-dark dark:text-slate-100 mb-10">
        {title}
      </h1>
    </div>
  );
};

export default OverViewTitle;
