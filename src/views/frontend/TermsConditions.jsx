import React from 'react'
import Footer from "../../components/footer/Footer";
import DynamicHelmet from '../../components/DynamicHelmet';
import Navigation from '../../components/utils/Navigation';

const TermsConditions = () => {
  return (
    <div className="dark:bg-dark min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Terms & conditions page"
        description="Browse our terms and conditions of use."
      />

      {/* Navigation Section */}
      <Navigation />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}

export default TermsConditions