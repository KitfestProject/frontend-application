import { Footer, Navigation, DynamicHelmet } from "@/components";

const HelpCenter = () => {
  return (
    <div className="dark:bg-dark min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Help Center"
        description="Get assistance from our team members. We are here to answer your queries."
      />

      {/* Navigation Section */}
      <Navigation />

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export default HelpCenter;
