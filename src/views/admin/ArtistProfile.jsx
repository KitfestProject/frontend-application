import {
  DynamicHelmet,
  UserNavigation,
  ArtistProfileComponent,
} from "@/components";

const ArtistProfile = () => {
  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Artist Profile"
        description="View your profile and manage them."
      />
      <UserNavigation />

      <ArtistProfileComponent />
    </div>
  );
};

export default ArtistProfile;
