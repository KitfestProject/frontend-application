import React from "react";
import Footer from "../../components/footer/Footer";
import DynamicHelmet from "../../components/DynamicHelmet";
import Navigation from "../../components/utils/Navigation";

const Partners = () => {
  return (
    <div className="dark:bg-dark min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Partners Page"
        description="Get insight about organizations that partnered with us. You can as well become a partner to the organization."
      />

      {/* Navigation Section */}
      <Navigation />

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export default Partners;
