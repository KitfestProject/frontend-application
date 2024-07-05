import React from "react";
import { DashboardSidebar, TransactionOverview } from "@/components";

const TransactionComponent = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="flex gap-10">
        <DashboardSidebar />

        <TransactionOverview />
      </div>
    </section>
  );
};

export default TransactionComponent;
