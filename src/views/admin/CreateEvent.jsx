import {
  DynamicHelmet,
  UserNavigation,
  CreateEventComponent,
} from "@/components";

const CreateEvent = () => {
  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 h-auto min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Create Event"
        description="Create an event and manage them."
      />
      <UserNavigation />

      <CreateEventComponent />
    </div>
  );
};

export default CreateEvent;
