import {
  DynamicHelmet,
  UserNavigation,
  UpdateProfileComponent,
} from "@/components";
import { useContext, useEffect } from "react";
import { UserAccountContext } from "@/context/UserAccountContext";

const UpdateProfile = () => {
  const { userProfileData, setUserProfileData } =
    useContext(UserAccountContext);

  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Update My Profile"
        description="Update your profile to a more recent one. This will help you get recognized easily."
      />
      <UserNavigation />

      <UpdateProfileComponent />
    </div>
  );
};

export default UpdateProfile;
