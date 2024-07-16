import {
  VenueContent,
  BlogSaveButton,
  VenueAmenities,
  BlogDraftButton,
  UploadVenueImage,
  CreateVenueSidebar,
  UploadVenueSeatMap,
  VenueGeneralInformation,
} from "@/components";
import axiosClient from "@/axiosClient";
import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CreateVenueContext } from "@/context/CreateVenueFormContext";

const CreateVenue = () => {
  const { venueFormData, clearVenueForm, validateInputs } =
    useContext(CreateVenueContext);
  const [loading, setLoading] = useState(false);

  const handlePublishVenue = async () => {
    if (!validateInputs) {
      return toast.error("Kindly fix some errors in the form to continue.");
    }

    setLoading(true);

    try {
      // API Call to publish venue
      const response = await axiosClient.post("/venues", venueFormData);

      const { success, message } = response.data;

      if (success) {
        // Reset form data
        clearVenueForm();
        toast.success(message);
      } else {
        toast.error(message);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "An error occurred while publishing the venue.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto py-10">
      <div className="flex gap-8">
        {/* Create Venue Sidebar */}
        <CreateVenueSidebar title="Create Venue" />

        {/* Create Venue Form */}
        <div className="w-full md:w-[75%] scroll-smooth">
          {/* Upload Venue Image */}
          <UploadVenueImage />

          {/* Venue General Information */}
          <VenueGeneralInformation />

          {/* Upload Seat Map */}
          <UploadVenueSeatMap />

          {/* Venue Amenities */}
          <VenueAmenities />

          {/* Venue Content */}
          <VenueContent />

          <div className="flex justify-end gap-3 items-center mt-8">
            <BlogDraftButton
              title="Save Draft"
              handleClick={() => {
                // Add logic for saving draft if needed
              }}
              loading={false}
            />

            <BlogSaveButton
              title="Publish Venue"
              handleClick={handlePublishVenue}
              loading={loading}
            />
          </div>
        </div>
      </div>

      <Toaster position="bottom-right" reverseOrder={false} />

      {/* Debug */}
      {/* <div className="text-gray text-xs">
        <pre>{JSON.stringify(venueFormData, null, 2)}</pre>
      </div> */}
    </section>
  );
};

export default CreateVenue;
