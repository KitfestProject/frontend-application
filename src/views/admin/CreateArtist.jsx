import {
  DynamicHelmet,
  UserNavigation,
  CreateArtistComponent,
} from "@/components";

const CreateArtist = () => {
  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 h-auto min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Create Artists"
        description="Create New Artists"
      />
      <UserNavigation />

      <CreateArtistComponent />
    </div>
  );
};

export default CreateArtist;
