import {
  DynamicHelmet,
  UserNavigation,
  NotificationComponent,
} from "@/components";

const Notifications = () => {
  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - My Notifications"
        description="Get all your notifications in one place. This will help you stay updated with all the activities on your account."
      />
      <UserNavigation />

      <NotificationComponent />
    </div>
  );
};

export default Notifications;
