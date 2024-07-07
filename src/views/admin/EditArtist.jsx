import {
  ThemeChanger,
  DynamicHelmet,
  UserNavigation,
  EditArtistForm,
} from "@/components";

const EditArtist = () => {
  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 h-auto min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Edit Blog"
        description="Edit Artist Details"
      />
      <UserNavigation />

      <EditArtistForm />

      <ThemeChanger />
    </div>
  );
};

export default EditArtist;
