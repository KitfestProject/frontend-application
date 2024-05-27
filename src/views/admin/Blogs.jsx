import React from "react";
import { ThemeChanger, DynamicHelmet, UserNavigation } from "../../components";

const Blogs = () => {
  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - My Events"
        description="View your events and manage them."
      />
      <UserNavigation />

      <ThemeChanger />
    </div>
  );
};

export default Blogs;
