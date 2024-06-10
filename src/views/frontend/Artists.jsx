import {
  Footer,
  Navigation,
  ThemeChanger,
  DynamicHelmet,
  ArtistsComponents,
} from "@/components";

const Artists = () => {
  return (
    <div className="bg-white dark:bg-darkGray min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Artist's Profiles Page"
        description="Get to know your artists by visiting their profiles."
      />

      {/* Navigation Section */}
      <Navigation />

      <ArtistsComponents />

      {/* Site Footer */}
      <Footer />

      {/* Theme Changer */}
      <ThemeChanger />
    </div>
  );
};

export default Artists;
