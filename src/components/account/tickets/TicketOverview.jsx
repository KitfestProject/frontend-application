import React from "react";

const TicketOverview = () => {
  return (
    <div className="w-full md:w-[75%]">
      <div className="flex justify-between items-start border-b border-slate-200 pb-5">
        <div className="">
          <div className="flex items-center gap-2 mb-1 text-sm">
            <p className="text-gray tracking-tight">Account</p>
            <span className="text-gray-500">/</span>
            <p className="text-gray-500 tracking-tight">Tickets</p>
          </div>

          <h1 className="text-2xl font-bold text-dark dark:text-slate-100">
            Ticket Management
          </h1>
        </div>

        <div className=""></div>
      </div>
    </div>
  );
};

export default TicketOverview;
