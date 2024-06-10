import {
  ThemeChanger,
  DynamicHelmet,
  UserNavigation,
  UpdateProfileComponent,
} from "@/components";

const UpdateProfile = () => {
  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Update My Profile"
        description="Update your profile to a more recent one. This will help you get recognized easily."
      />
      <UserNavigation />

      <UpdateProfileComponent />

      <ThemeChanger />
    </div>
  );
};

export default UpdateProfile;
