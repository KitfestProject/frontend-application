import CheckoutSummary from "./CheckoutSummary";
import CheckoutDetails from "./CheckoutDetails";

const CheckoutComponent = () => {
  return (
    <div className="bg-white dark:bg-darkGray">
      <div className="container mx-auto rounded-md py-10">
        <div className="flex gap-10">
          {/* Checkout Details */}
          <CheckoutDetails />

          {/* Checkout summary */}
          <CheckoutSummary />
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;
