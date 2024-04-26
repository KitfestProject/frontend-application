import React from 'react'
import Footer from "../../components/footer/Footer";
import DynamicHelmet from '../../components/DynamicHelmet';
import Navigation from '../../components/utils/Navigation';

const PrivacyPolicy = () => {
  return (
    <div className="dark:bg-dark min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Privacy policy page."
        description="View our privacy and policies of use."
      />

      {/* Navigation Section */}
      <Navigation />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}

export default PrivacyPolicy