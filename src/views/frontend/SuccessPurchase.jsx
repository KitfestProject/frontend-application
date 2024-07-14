import {
  Footer,
  Navigation,
  DynamicHelmet,
  SuccessPurchaseComponent,
} from "@/components";

const SuccessPurchase = () => {
  return (
    <div className="dark:bg-dark min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Success ticket purchase Page"
        description="Checkout your items and make a payment."
      />

      {/* Navigation Section */}
      <Navigation />

      {/* Checkout Component */}
      <SuccessPurchaseComponent />

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export default SuccessPurchase;
