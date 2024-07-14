import CheckoutSummary from "./CheckoutSummary";
import CheckoutDetails from "./CheckoutDetails";
import { PrimaryButton, BottomDrawer } from "@/components";
import { useState } from "react";
import { BiXCircle } from "react-icons/bi";

const CheckoutComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawerOpen = () => setIsDrawerOpen((prev) => !prev);

  return (
    <>
      <div className="bg-white dark:bg-darkGray">
        <div className="container mx-auto rounded-md py-10">
          <div className="flex flex-col md:flex-row md:gap-10 relative pb-10">
            <div className="w-full md:w-[75%]">
              {/* Checkout Details */}
              <CheckoutDetails />
            </div>

            <div className="w-full md:w-[25%] mt-[50px] hidden md:block">
              {/* Checkout summary */}
              <CheckoutSummary />
            </div>

            {/* Mobile Checkout Button */}
            <div className="md:hidden fixed bottom-0 w-full right-0 bg-white dark:bg-darkGray p-3 border-t border-gray/30">
              <PrimaryButton
                handleClick={toggleDrawerOpen}
                title="Proceed to checkout"
                classes="w-full dark:border dark:border-gray/30"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Drawer */}
      <BottomDrawer
        isOpen={isDrawerOpen}
        onClose={toggleDrawerOpen}
        height={"75%"}
        classes="w-full dark:bg-gray dark:border dark:border-gray"
      >
        <div className="relative">
          <CheckoutSummary />
          <button onClick={toggleDrawerOpen} className="absolute top-5 right-5">
            <BiXCircle className="text-2xl" />
          </button>
        </div>
      </BottomDrawer>
    </>
  );
};

export default CheckoutComponent;
