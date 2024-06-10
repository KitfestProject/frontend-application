import {
  ThemeChanger,
  DynamicHelmet,
  UserNavigation,
  SystemUsersComponent,
} from "@/components";

const UsersScreen = () => {
  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 min-h-screen w-full">
      <DynamicHelmet
        title="Users Management Page!"
        description="Manage all users. You are accessing this page as an admin."
        keywords="Users"
      />

      <UserNavigation />

      <SystemUsersComponent />

      <ThemeChanger />
    </div>
  );
};

export default UsersScreen;
