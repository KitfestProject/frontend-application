import {
  ArtistContent,
  BlogSaveButton,
  BlogDraftButton,
  UploadArtistImage,
  CreateArtistSidebar,
  ArtistGeneralInformation,
} from "@/components";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext, useState, useEffect } from "react";
import useServerSideQueries from "@/hooks/useServerSideQueries.mjs";
import { CreateArtistContext } from "@/context/CreateArtistFormContext";

const EditArtistForm = () => {
  const { updateSingleArtist } = useServerSideQueries();
  const { artistFormData, setArtistFormData } = useContext(CreateArtistContext);
  const location = useLocation();
  const artistId = location.pathname.split("/").pop();
  const [loading, setLoading] = useState(false);

  const handleUpdateArtist = async (status) => {
    setLoading(true);
    setArtistFormData((previous) => ({
      ...previous,
      active: status === "publish",
    }));

    const { success, message } = await updateSingleArtist(
      artistId,
      artistFormData
    );

    if (!success) {
      setLoading(false);
      return toast.error(message);
    }

    setLoading(false);
    toast.success(message);
  };

  return (
    <section className="container mx-auto py-10">
      <div className="flex gap-8">
        {/* Create Event Sidebar */}
        <CreateArtistSidebar title="Edit Artist Details" />

        {/* Create Event Form */}
        <div className="w-full md:w-[75%] scroll-smooth">
          {/* Upload Artist Image */}
          <UploadArtistImage />

          {/* General Artist Details */}
          <ArtistGeneralInformation />

          {/* Artist Content */}
          <ArtistContent />

          <div className="flex justify-end gap-3 items-center mt-8">
            <BlogDraftButton
              title="Save Draft"
              handleClick={() => handleUpdateArtist("draft")}
              // loading={loading}
            />
            <BlogSaveButton
              title="Publish Artist"
              handleClick={() => handleUpdateArtist("publish")}
              loading={loading}
            />
          </div>
        </div>
      </div>

      {/* Debug */}
      {/* <div className="text-gray text-xs">
        <pre>{JSON.stringify(artistFormData, null, 2)}</pre>
      </div> */}
    </section>
  );
};

export default EditArtistForm;
