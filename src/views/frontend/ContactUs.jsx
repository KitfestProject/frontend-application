import {
  Footer,
  ContactUs as ContactUsComponent,
  Navigation,
  DynamicHelmet,
} from "@/components/";

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
    </div>
  );
};

export default ContactUs;
