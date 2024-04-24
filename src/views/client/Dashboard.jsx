import React from "react";
import DynamicHelmet from "../../components/DynamicHelmet";

const Dashboard = () => {
  return (
    <div>
      <DynamicHelmet
        title="KITFT - Users Account"
        description="Organize all your events and activities with your user's account. With this account you get to enjoy more application features."
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
