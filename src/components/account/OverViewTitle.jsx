import React from "react";

const OverViewTitle = ({ title, breadcrumbTitle }) => {
  return (
    <div className="w-full md:w-[75%]">
      {/* Breadcrumb */}
      <div className="border-b border-gray/30 pb-2">
        <div className="flex items-center gap-2 mb-1 text-sm">
          <p className="text-gray tracking-tight">Account</p>
          <span className="text-gray-500">/</span>
          <p className="text-gray-500 tracking-tight">{breadcrumbTitle}</p>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-dark dark:text-slate-100">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default OverViewTitle;
