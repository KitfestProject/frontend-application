import {
  Footer,
  Navigation,
  DynamicHelmet,
  AboutUsComponent,
} from "@/components";

const About = () => {
  return (
    <div className="dark:bg-dark min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Learn more about us."
        description="From this page you will get to know more about KITFT."
      />

      {/* Navigation Section */}
      <Navigation />

      {/* About Us Component */}
      <AboutUsComponent />

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export default About;
