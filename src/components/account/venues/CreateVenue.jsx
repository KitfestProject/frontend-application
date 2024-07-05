import {
  VenueContent,
  BlogSaveButton,
  VenueAmenities,
  BlogDraftButton,
  UploadVenueImage,
  CreateVenueSidebar,
  VenueGeneralInformation,
} from "@/components";
import { useContext } from "react";
import { CreateVenueContext } from "@/context/CreateVenueFormContext";

const CreateVenue = () => {
  const { venueFormData } = useContext(CreateVenueContext);
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

          {/* Venue Amenities */}
          <VenueAmenities />

          {/* Venue Content */}
          <VenueContent />

          <div className="flex justify-end gap-3 items-center mt-8">
            <BlogDraftButton title="Save Draft" handleClick={() => {}} />
            <BlogSaveButton title="Publish Venue" handleClick={() => {}} />
          </div>
        </div>
      </div>

      {/* Debug */}
      {/* <div className="text-gray text-xs">
        <pre>{JSON.stringify(venueFormData, null, 2)}</pre>
      </div> */}
    </section>
  );
};

export default CreateVenue;
