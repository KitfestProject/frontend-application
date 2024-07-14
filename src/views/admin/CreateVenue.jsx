import {
  DynamicHelmet,
  UserNavigation,
  CreateVenue as CreateVenueComponent,
} from "@/components";

const CreateVenue = () => {
  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 h-auto min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Create Venues"
        description="Create an event and manage them."
      />
      <UserNavigation />

      <CreateVenueComponent />
    </div>
  );
};

export default CreateVenue;
