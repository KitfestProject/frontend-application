import {
  Footer,
  Navigation,
  DynamicHelmet,
  ArtistDetailsComponents,
} from "@/components";

const ArtistDetails = () => {
  return (
    <div className="bg-white dark:bg-darkGray min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Artist Details page"
        description="More details about an artist"
      />

      {/* Navigation Section */}
      <Navigation />

      <ArtistDetailsComponents />

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export default ArtistDetails;
