import {
  Footer,
  Navigation,
  DynamicHelmet,
  CheckoutComponent,
} from "@/components";
import { CheckoutFormProvider } from "@/context/CheckoutFormContext";

const Checkout = () => {
  return (
    <div className="bg-white dark:bg-darkGray min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Checkout Page"
        description="Checkout your items and make a payment."
      />

      {/* Navigation Section */}
      <Navigation />

      {/* Checkout Component */}
      <CheckoutFormProvider>
        <CheckoutComponent />
      </CheckoutFormProvider>

      {/* Site Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Checkout;
