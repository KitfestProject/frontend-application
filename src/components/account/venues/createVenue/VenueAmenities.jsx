import React, { useContext } from "react";
import { FaBuildingFlag } from "react-icons/fa6";
import { CreateVenueContext } from "@/context/CreateVenueFormContext";

const VenueAmenities = () => {
  const { venueFormData, setVenueFormData } = useContext(CreateVenueContext);

  const handleAmenityChange = (index) => {
    const newAmenities = [...venueFormData.amenities];
    newAmenities[index].value = !newAmenities[index].value;
    setVenueFormData({ ...venueFormData, amenities: newAmenities });
  };

  return (
    <div className="mt-5 border-b border-slate-200 dark:border-slate-700 pb-5">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold flex gap-2 items-center mb-5">
          <FaBuildingFlag className="text-2xl text-primary dark:text-gray" />
          Amenities
        </h1>
      </div>

      {/* List Amenities */}
      <small className="text-gray mb-3">
        Select All Available Amenities in the Venue (Optional)
      </small>
      <div className="my-5 flex flex-wrap gap-5 items-center">
        {venueFormData.amenities.map((amenity, index) => (
          <div
            key={index}
            className="flex items-center mb-2 checkbox-container"
          >
            <label
              htmlFor={`amenity-${index}`}
              className="text-primary dark:text-slate-100 font-bold text-sm"
            >
              <input
                id={`amenity-${index}`}
                type="checkbox"
                checked={amenity.value}
                onChange={() => handleAmenityChange(index)}
                className="mr-2"
              />
              <span className="checkmark"></span> {amenity.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VenueAmenities;
