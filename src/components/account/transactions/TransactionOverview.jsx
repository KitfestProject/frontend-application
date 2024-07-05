import React from "react";
import TransactionTable from "./TransactionTable";

const TransactionOverview = () => {
  return (
    <div className="w-full md:w-[75%]">
      <div className="flex justify-between items-start border-b border-gray/30 pb-5">
        <div className="">
          <div className="flex items-center gap-2 mb-1 text-sm">
            <p className="text-gray tracking-tight">Account</p>
            <span className="text-gray-500">/</span>
            <p className="text-gray-500 tracking-tight">Transactions</p>
          </div>

          <h1 className="text-2xl font-bold text-dark dark:text-slate-100">
            Transaction Management
          </h1>
        </div>
      </div>

      {/* Venues Overview Table */}
      <div className="w-full mt-10">
        <h1 className="text-xl font-semibold text-dark dark:text-slate-100 pb-3">
          Transactions List
        </h1>

        <TransactionTable />
      </div>
    </div>
  );
};

export default TransactionOverview;
