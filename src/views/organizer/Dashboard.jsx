import React from "react";
import DynamicHelmet from "../../components/DynamicHelmet";

const Dashboard = () => {
  return (
    <div>
      <DynamicHelmet
        title="KITFT - Organizer Dashboard"
        description="Do more with your organizer dashboard. Create your own events and manage them all in one place."
      />
      <div className="">
        <h1 className="text-5xl font-[800] tracking-tight">
          Welcome to organizer dashboard
        </h1>
      </div>
    </div>
  );
};

export default Dashboard;
