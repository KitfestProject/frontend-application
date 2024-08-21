import {
  VenueContent,
  BlogSaveButton,
  VenueAmenities,
  BlogDraftButton,
  UploadVenueImage,
  UploadVenueSeatMap,
  CreateVenueSidebar,
  VenueGeneralInformation,
} from "@/components";
import toast from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import { CreateVenueContext } from "@/context/CreateVenueFormContext";
import { useLocation, useNavigate } from "react-router-dom";
import useServerSideQueries from "@/hooks/useServerSideQueries";

const EditVenueOverview = () => {
  const { venueFormData, setVenueFormData, getBlogByIdSlug } =
    useContext(CreateVenueContext);
  const { updateSingleVenue } = useServerSideQueries();
  const navigate = useNavigate();
  const location = useLocation();
  const venueId = location.pathname.split("/")[3];
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getBlogByIdSlug(venueId).then((data) => {
      setVenueFormData(data);
    });
  }, [venueId]);

  const handleUpdateVenue = async () => {
    setLoading(true);
    const { success, message } = await updateSingleVenue(
      venueId,
      venueFormData
    );

    if (!success) {
      toast.error(message, {
        duration: 4000,
        position: "top-right",
      });
      setLoading(false);
      return;
    }

    setLoading(false);
    toast.success(message, {
      duration: 4000,
      position: "top-right",
    });

    setTimeout(() => {
      navigate("/venues");
    }, 3000);
  };

  return (
    <section className="">
      <div className="flex gap-8">
        {/* Create Venue Sidebar */}
        <CreateVenueSidebar title="Edit Venue" />

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
            {/* <BlogDraftButton title="Save Draft" handleClick={() => {}} /> */}
            <BlogSaveButton
              title={`${loading ? "Publishing please wait..." : "Save Venue"}`}
              handleClick={handleUpdateVenue}
            />
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

export default EditVenueOverview;
