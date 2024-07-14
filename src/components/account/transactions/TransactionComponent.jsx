import React from "react";
import { DashboardSidebar, TransactionOverview } from "@/components";

const TransactionComponent = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="flex gap-10">
        <div className="w-[25%] hidden md:block">
          <DashboardSidebar />
        </div>

        <TransactionOverview />
      </div>
    </section>
  );
};

export default TransactionComponent;
