import { Link } from "react-router-dom";
import { SystemPreferencesTable, UserPreferencesTable } from "@/components";

const SettingsOverview = () => {
  return (
    <div className="w-full md:w-[75%]">
      <div className="flex justify-between items-center border-b border-gray/20 pb-3">
        <div className="flex justify-between items-start">
          <div className="">
            <div className="flex items-center gap-2 mb-1 text-sm">
              <p className="text-gray tracking-tight">Account</p>
              <span className="text-gray-500">/</span>
              <p className="text-gray-500 tracking-tight">Artists</p>
            </div>

            <h1 className="text-2xl font-bold text-dark dark:text-slate-100">
              System Settings
            </h1>
          </div>
        </div>
      </div>

      {/* Create Button */}
      <div className="">
        {/* System Preferences Table */}
        <SystemPreferencesTable />

        {/* User Preferences Table */}
        <UserPreferencesTable />
      </div>
    </div>
  );
};

export default SettingsOverview;
