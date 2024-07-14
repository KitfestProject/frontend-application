import {
  Footer,
  Navigation,
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
    </div>
  );
};

export default PrivacyPolicy;
