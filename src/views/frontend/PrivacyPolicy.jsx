import {
  Footer,
  Navigation,
  ThemeChanger,
  DynamicHelmet,
  PrivacyPolicy as PrivacyPolicyComponent,
} from "@/components";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white dark:bg-darkGray min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Privacy policy page."
        description="View our privacy and policies of use."
      />

      {/* Navigation Section */}
      <Navigation />

      {/* Section Component */}
      <PrivacyPolicyComponent />

      {/* Site Footer */}
      <Footer />

      {/* Theme Changer */}
      <ThemeChanger />
    </div>
  );
};

export default PrivacyPolicy;
