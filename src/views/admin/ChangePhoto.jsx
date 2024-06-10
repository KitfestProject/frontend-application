import {
  ThemeChanger,
  DynamicHelmet,
  UserNavigation,
  ChangePhotoComponent,
} from "@/components";

const ChangePhoto = () => {
  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Change My Profile Photo"
        description="Change your profile photo to a more recent one. This will help you get recognized easily."
      />
      <UserNavigation />

      <ChangePhotoComponent />

      <ThemeChanger />
    </div>
  );
};

export default ChangePhoto;
