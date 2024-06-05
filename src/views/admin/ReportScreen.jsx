import {
  ThemeChanger,
  DynamicHelmet,
  UserNavigation,
  ReportsComponent,
} from "../../components";

const ReportScreen = () => {
  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 min-h-screen w-full">
      <DynamicHelmet
        title="Report Management Page!"
        description="Manage all reports. You are accessing this page as an admin."
        keywords="Reports"
      />

      <UserNavigation />

      <ReportsComponent />

      <ThemeChanger />
    </div>
  );
};

export default ReportScreen;
