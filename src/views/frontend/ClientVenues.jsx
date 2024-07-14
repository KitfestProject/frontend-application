import {
  DynamicHelmet,
  Navigation,
  Footer,
  ClientVenuesComponent,
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
    </div>
  );
};

export default ClientVenues;
