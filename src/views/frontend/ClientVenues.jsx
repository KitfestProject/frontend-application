import {
  DynamicHelmet,
  Navigation,
  Footer,
  ClientVenuesComponent,
} from "@/components";
import { useContext, useEffect } from "react";
import { StateContext } from "@/context/ContextProvider";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import toast, { Toaster } from "react-hot-toast";

const ClientVenues = () => {
  const { start, limit, setVenueData, setStateLoading } =
    useContext(StateContext);
  const { getVenues } = useServerSideQueries();

  useEffect(() => {
    const fetchClientEvents = async () => {
      setStateLoading(true);
      const { success, message, data } = await getVenues(start, limit);

      if (!success) {
        setStateLoading(false);
        return console.log(message);
      }

      console.log(message);
      setVenueData(data);
      setStateLoading(false);
    };

    fetchClientEvents();
  }, [start, limit]);

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

      {/* Toast Notification */}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default ClientVenues;
