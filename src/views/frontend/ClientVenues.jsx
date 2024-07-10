import {
  DynamicHelmet,
  Navigation,
  Footer,
  ClientVenuesComponent,
  ThemeChanger,
} from "@/components";

const ClientVenues = () => {
  return (
    <div className="dark:bg-dark min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Venues Page"
        description="Explore our venues and book for your event."
      />

      {/* Navigation Section */}
      <Navigation />

      {/* Venues Section */}
      <ClientVenuesComponent />

      {/* Site Footer */}
      <Footer />

      {/* Theme Changer */}
      <ThemeChanger />
    </div>
  );
};

export default ClientVenues;
