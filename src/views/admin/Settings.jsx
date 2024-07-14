import { DynamicHelmet, UserNavigation, SettingsComponent } from "@/components";

const Settings = () => {
  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 min-h-screen w-full">
      <DynamicHelmet
        title="Settings Page!"
        description="Manage all settings."
        keywords="Settings"
      />

      <UserNavigation />

      <SettingsComponent />
    </div>
  );
};

export default Settings;
