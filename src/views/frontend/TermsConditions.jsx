import {
  Footer,
  Navigation,
  ThemeChanger,
  DynamicHelmet,
  TermsConditions as TermsConditionsComponent,
} from "@/components";

const TermsConditions = () => {
  return (
    <div className="bg-white dark:bg-darkGray min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Terms & conditions page"
        description="Browse our terms and conditions of use."
      />

      {/* Navigation Section */}
      <Navigation />

      {/* Section Component */}
      <TermsConditionsComponent />

      {/* Site Footer */}
      <Footer />

      {/* Theme Changer */}
      <ThemeChanger />
    </div>
  );
};

export default TermsConditions;
