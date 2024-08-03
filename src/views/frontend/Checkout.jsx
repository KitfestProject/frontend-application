import { Navigation, DynamicHelmet, CheckoutComponent } from "@/components";
import { EventContext } from "@/context/EventDetailsContext";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import { useContext, useEffect } from "react";
import { useSeatStore } from "@/store/UseSeatStore";

const Checkout = () => {
  const { setEventDetails, setEventDetailsLoading } = useContext(EventContext);
  const { getSingleEvent } = useServerSideQueries();
  const { eventId } = useSeatStore();

  useEffect(() => {
    const getSingleEventsData = async (eventId) => {
      // Check if state has data
      // if (eventDetails) return;

      setEventDetailsLoading(true); // Set loading to true
      const response = await getSingleEvent(eventId);

      const { success, data } = response;

      if (!success) {
        setEventDetailsLoading(false);
        console.log("Error loading event details. " + message);
      }

      if (success) {
        setEventDetailsLoading(false);
        setEventDetails(data);
      }
    };

    getSingleEventsData(eventId);
  }, [eventId, setEventDetails]);

  return (
    <div className="bg-white dark:bg-darkGray min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Checkout Page"
        description="Checkout your items and make a payment."
      />

      {/* Navigation Section */}
      <Navigation />

      {/* Checkout Component */}
      <CheckoutComponent />
    </div>
  );
};

export default Checkout;
