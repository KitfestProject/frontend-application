import { Footer, Navigation, DynamicHelmet } from "@/components";

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
