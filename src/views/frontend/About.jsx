import React from "react";
import DynamicHelmet from "../../components/DynamicHelmet";
import Navigation from "../../components/utils/Navigation";
import Footer from "../../components/footer/Footer";

const About = () => {
  return (
    <div className="dark:bg-dark min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Learn more about us."
        description="From this page you will get to know more about KITFT."
      />

      {/* Navigation Section */}
      <Navigation />

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export default About;
