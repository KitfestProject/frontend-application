import { createContext, useState } from "react";

export const CreateVenueContext = createContext();

const initialVenueForm = {
  name: "",
  location: "",
  capacity: "",
  longitude: "",
  latitude: "",
  address: "",
  image: null, // This will be a string
  amenities: [
    { name: "Wifi", value: false },
    {
      name: "Parking",
      value: false,
    },
    { name: "Catering", value: false },
    { name: "Projector", value: false },
    { name: "Whiteboard", value: false },
    { name: "Microphone", value: false },
    { name: "Tables", value: false },
    { name: "Chairs", value: false },
    { name: "Stage", value: false },
    { name: "Sound System", value: false },
  ],
  seatMap: null, // This will be a string
  description: "",
};

export const VenueFormProvider = ({ children }) => {
  const [venueFormData, setVenueFormData] = useState(initialVenueForm);

  const isVenueImageFilled = venueFormData.image !== null;
  const isNameFilled = venueFormData.name !== "";
  const isCapacityFilled = venueFormData.capacity !== "";
  const isLongitudeAndLatitudeFilled =
    venueFormData.longitude !== "" && venueFormData.latitude !== "";
  const isAddressFilled = venueFormData.address !== "";
  const areAmenitiesSelected = venueFormData.amenities.some(
    (amenity) => amenity.value
  );
  const isDescriptionFilled = venueFormData.description !== "";

  const getBlogByIdSlug = async (venueId) => {
    return initialVenueForm;
  };

  return (
    <CreateVenueContext.Provider
      value={{
        isNameFilled,
        venueFormData,
        getBlogByIdSlug,
        isAddressFilled,
        isCapacityFilled,
        setVenueFormData,
        isVenueImageFilled,
        isDescriptionFilled,
        areAmenitiesSelected,
        isLongitudeAndLatitudeFilled,
      }}
    >
      {children}
    </CreateVenueContext.Provider>
  );
};
