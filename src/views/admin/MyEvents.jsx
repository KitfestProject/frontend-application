import { DynamicHelmet, UserNavigation, MyEventsComponent } from "@/components";

const MyEvents = () => {
  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - My Events"
        description="View your events and manage them."
      />
      <UserNavigation />

      <MyEventsComponent />
    </div>
  );
};

export default MyEvents;
