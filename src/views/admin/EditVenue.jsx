import {
  DynamicHelmet,
  UserNavigation,
  EditVenueComponent,
} from "@/components";
import toast, { Toaster } from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import { CreateVenueContext } from "@/context/CreateVenueFormContext";

const EditVenue = () => {
  const { setVenueFormData } = useContext(CreateVenueContext);
  const { getSingleVenue } = useServerSideQueries();
  const [venueData, setVenueData] = useState();
  const venueId = window.location.pathname.split("/")[3];

  useEffect(() => {
    const fetchVenue = async () => {
      const { success, message, data } = await getSingleVenue(venueId);

      if (!success) return toast.error(message);

      setVenueData(data);
    };

    fetchVenue();
  }, [venueId]);

  useEffect(() => {
    if (venueData) {
      setVenueFormData((prevFormData) => ({
        ...prevFormData,
        name: venueData.name || "",
        location: venueData.location || "",
        capacity: venueData.capacity || "",
        longitude: venueData.longitude || "",
        latitude: venueData.latitude || "",
        address: venueData.address || "",
        seatMapUrl: venueData.seat_map_url || "",
        image: venueData.image || null,
        amenities: venueData.amenities || [],
        seatMap: venueData.seat_map || null,
        description: venueData.description || "",
      }));
    }
  }, [venueData]);

  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 h-auto min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Edit Blog"
        description="Edit venue details page!"
      />

      <UserNavigation />

      <EditVenueComponent />

      <Toaster />
    </div>
  );
};

export default EditVenue;
