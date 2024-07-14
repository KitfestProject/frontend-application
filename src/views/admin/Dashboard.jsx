import {
  DynamicHelmet,
  UserNavigation,
  UserDashboardComponent,
} from "@/components";

const Dashboard = () => {
  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - My Account"
        description="Organize all your events and activities with your user's account. With this account you get to enjoy more application features."
      />
      <UserNavigation />

      <UserDashboardComponent />
    </div>
  );
};

export default Dashboard;
