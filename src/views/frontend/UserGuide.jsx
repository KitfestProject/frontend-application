import {
  UserGuide as UserGuideComponent,
  Footer,
  Navigation,
  DynamicHelmet,
} from "@/components";

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
    </div>
  );
};

export default UserGuide;
