import {
  DynamicHelmet,
  UserNavigation,
  EditVenueComponent,
} from "@/components";

const EditVenue = () => {
  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 h-auto min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Edit Blog"
        description="Edit venue details page!"
      />
      <UserNavigation />

      <EditVenueComponent />
    </div>
  );
};

export default EditVenue;
