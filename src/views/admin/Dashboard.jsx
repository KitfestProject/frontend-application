import React from "react";
import DynamicHelmet from "../../components/DynamicHelmet";

const Dashboard = () => {
  return (
    <div className="">
      <DynamicHelmet
        title="KITFT - Administrator Dashboard"
        description="Manage all users and activities happening on the platform. This section is for administrators only."
      />

      <div className="">
        <h1 className="text-5xl font-[800] tracking-tight">
          Welcome to administrators dashboard
        </h1>
      </div>
    </div>
  );
};

export default Dashboard;
