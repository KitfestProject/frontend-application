import React from 'react'
import DynamicHelmet from '../../components/DynamicHelmet';
import Navigation from '../../components/utils/Navigation';
import Footer from "../../components/footer/Footer";

const UserGuide = () => {
  return (
    <div className="dark:bg-dark min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - User Guide Page."
        description="Understand how to navigate KITFT website to gain better experience."
      />

      {/* Navigation Section */}
      <Navigation />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}

export default UserGuide