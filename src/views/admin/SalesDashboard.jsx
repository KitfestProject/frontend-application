import React from "react";
import { ThemeChanger, DynamicHelmet, UserNavigation } from "../../components";

const SalesDashboard = () => {
  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 min-h-screen w-full">
      <DynamicHelmet
        title="Sales Dashboard"
        description="Manage your sales and view your sales dashboard."
        keywords="Sales Dashboard"
      />

      <UserNavigation />

      <ThemeChanger />
    </div>
  );
};

export default SalesDashboard;
