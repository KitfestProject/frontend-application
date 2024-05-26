import React from "react";
import {
  UserGuide as UserGuideComponent,
  Footer,
  Navigation,
  DynamicHelmet,
  ThemeChanger,
} from "../../components";

const UserGuide = () => {
  return (
    <div className="bg-white dark:bg-darkGray min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - User Guide Page."
        description="Understand how to navigate KITFT website to gain better experience."
      />

      {/* Navigation Section */}
      <Navigation />

      {/* Section Component */}
      <UserGuideComponent />

      {/* Site Footer */}
      <Footer />

      {/* Theme Changer */}
      <ThemeChanger />
    </div>
  );
};

export default UserGuide;
