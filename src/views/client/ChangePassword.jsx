import React from "react";
import {
  ThemeChanger,
  DynamicHelmet,
  UserNavigation,
  ChangePasswordComponent,
} from "../../components";

const ChangePassword = () => {
  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Change My Password"
        description="Change your password to a more secure one. This will help you keep your account safe."
      />
      <UserNavigation />

      <ChangePasswordComponent />

      <ThemeChanger />
    </div>
  );
};

export default ChangePassword;
