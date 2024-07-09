import {
  Footer,
  Navigation,
  ThemeChanger,
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

      {/* Theme Changer */}
      <ThemeChanger />
    </div>
  );
};

export default ArtistDetails;
