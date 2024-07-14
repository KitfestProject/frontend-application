import {
  Footer,
  Navigation,
  DynamicHelmet,
  VenueDetailsComponents,
} from "@/components";

const VenueDetails = () => {
  return (
    <div className="bg-white dark:bg-darkGray min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Venue Details Page"
        description="Learn more about this specific venue"
      />

      {/* Navigation Section */}
      <Navigation />

      <VenueDetailsComponents />

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export default VenueDetails;
