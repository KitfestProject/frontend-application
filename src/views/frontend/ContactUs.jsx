import React from "react";
import {
  Footer,
  ContactUs as ContactUsComponent,
  Navigation,
  ThemeChanger,
  DynamicHelmet,
} from "../../components/";

const ContactUs = () => {
  return (
    <div className="dark:bg-dark min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Contact Us Page"
        description="Get in touch with us or let us know how we can be of assistance."
      />

      {/* Navigation Section */}
      <Navigation />

      {/* Contact Us Component */}
      <ContactUsComponent />

      {/* Site Footer */}
      <Footer />

      {/* Theme Changer */}
      <ThemeChanger />
    </div>
  );
};

export default ContactUs;
